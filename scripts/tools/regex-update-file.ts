import * as fs from 'fs'

// regex-update-file
// regex-find-file

const replaceInFile = (
    file : string,
    path : string,
    match: RegExp,
    to   : string,
) => {
    const filePath = `${path}/${file}`
    fs.writeFileSync(filePath, fs.readFileSync(filePath, 'utf8').replace(match, to))
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
) => fs.readdir(path, 'utf8', (error, docs) => {
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
            map((_, index, array) => {             // get combination
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
    match: string | RegExp,
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

    return replaceInDir(path, typeof match === 'string'? new RegExp(match, 'ug'): match, replc, include, exclude)
}

export default replace
