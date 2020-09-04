// @ts-ignore
import * as fs from 'fs'
// @ts-ignore
import * as rl from 'readline'

// regex-update-file
// regex-find-file

const updateMatchTo = (line: string, match: RegExp, to: string) => {
    const result = match.exec(line) || {groups: {}}
    const groups = result.groups

    // if user is not using groups just do
    if (!groups) return line.replace(match, to)

    Object.keys(groups).forEach((key) => {
        const groupMatch = new RegExp(`<${key}>`, 'gu')

        to   = to.replace(groupMatch, groups[key])
        line = line.replace(match, to)
    })

    return line
}


const replaceInFile = (
    file : string,
    path : string,
    match: RegExp,
    to   : string,
) => {
    let content  = ''
    let didMatch = false

    const filePath = `${path}/${file}`
    const streamFD = fs.createReadStream(filePath)

    rl.createInterface(streamFD).
    on('line', (line: string) => {
        if (line.match(match)) {
            line = updateMatchTo(line, match, to)

            didMatch = true
        }

        content += `${line}\n`
    }).
    on('close', () => {
        if (didMatch) {
            fs.writeFileSync(filePath, content)

            console.info(`wrote: ${filePath}`)
        }

        streamFD.close()
    })
}

const isPathIncluded = (
    path: string,
    include: string[],
    exclude: string[],
) => {
    // reduces down to `true` if a regex is a match
    const isExcluded = exclude.reduce((acc, val) => {
        return !!path.match(new RegExp(val, 'u')) || acc
    }, false)

    if (isExcluded)
        return false

    // reduces down to `true` if a regex is a match
    const isIncluded = include.reduce((acc, val) => {
        return !!path.match(new RegExp(val, 'u')) || acc
    }, false)

    return isIncluded
}

const replaceInDir = (
    path   : string,
    match  : RegExp,
    replc  : string,
    include: string[],
    exclude: string[],
) => fs.readdir(path, 'utf8', (error: Error, docs: string[]) => {
    if (error)
        console.error(error)
    else {
        docs.forEach((doc) => {
            const docPath = `${path}/${doc}`

            if (fs.statSync(docPath).isDirectory()) {
                // it is important to add `/` for the regex matching
                if (isPathIncluded(`${docPath}/`, include, exclude))
                    replaceInDir(docPath, match, replc, include, exclude)
            }

            if (fs.statSync(docPath).isFile()) {
                if (isPathIncluded(docPath, include, exclude))
                    replaceInFile(doc, path, match, replc)
            }
        })
    }
})

const pathToRegExp = (root: string) => (path: string) => {
    path = `^${root}/${path}`

    // // prepare insertion of different regexps
    // path = path.replace(/\*\*/gu, '[rec]')  // .*
    // path = path.replace(/\*/gu,   '[any]')  // [\\w\\.]+
    // // we do this because we can't replace '*'

    // // insert the regexps at their positions
    // path = path.replace(/\[rec\]/gu, '.*')
    // path = path.replace(/\[any\]/gu, '[\\w\\.]*')

    return `${path}$`
}

const paths = (paths: string[]) => {
    let possibilities: string[] = []

    paths.forEach((path) => {
        possibilities = [
            ...possibilities,                         // merge previous
            ...path.split('/').                       // split the path
            // @ts-ignore
            map((path, index, array) => {             // get combination
                return array.slice(0, index + 1)
            }).                                       // got combinations
            map((splitPath, index, splitPaths) => {   // put it back as path
                if (index < splitPaths.length - 1)    // add regex `$` for all
                    return `${splitPath.join('/')}/$` // merge string back
                return splitPath.join('/')            // but not the last one
            }),
        ]
    })

    return possibilities
}

const replace = (
    path: string,
    match: string,
    replc: string,
    include: string[],
    exclude: string[],
) => {
    // change/map paths to string regexps
    include = include.map(pathToRegExp(path))
    exclude = exclude.map(pathToRegExp(path))

    // only the end directory is included
    // so the algo can't follow by default
    // let's include all the possible paths
    const pathsInclude = paths(include)
    const pathsExclude = paths(exclude)

    include = include.concat(pathsInclude)
    exclude = exclude.concat(pathsExclude)

    // console.log(include)

    return replaceInDir(path, new RegExp(match, 'u'), replc, include, exclude)
}

export default replace
