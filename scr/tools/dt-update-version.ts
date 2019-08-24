import * as fs from 'fs'
import * as rl from 'readline'

const replaceInFile = (
    file : string,
    path : string,
    match: string,
    replc: string,
) => {
    let   content  = ''
    let   didMatch = false

    const matchRgx = new RegExp(match, 'u')
    const filePath = `${path}/${file}`
    const streamFD = fs.createReadStream(filePath)

    rl.createInterface(streamFD).
    on('line', (line) => {
        if (line.match(matchRgx)) {
            line     = line.replace(matchRgx, replc)
            didMatch = true
        }

        content += `${line}\n`
    }).
    on('close', () => {
        if (didMatch) {
            fs.writeFileSync(filePath, content)
            console.info(`updated ${filePath}`)
        }

        streamFD.close()
    })
}

const replaceDeep = (
    path   : string,
    match  : string,
    replc  : string,
    include: string[],
    exclude: string[]
) => (doc: string) => {
    const docPath = `${path}/${doc}`
    const includes = include.includes(doc)
    const excludes = exclude.includes(doc) || exclude.includes(docPath)

    // This file has not been included
    if (!includes || excludes) {return}

    console.log(docPath)

    if (fs.statSync(docPath).isDirectory()) {
        replaceInDir(docPath, match, replc, include, exclude) // recurse
    } else if (fs.statSync(docPath).isFile()) {
        replaceInFile(doc, path, match, replc)
    }
}

const replaceInDir = (
    path   : string,
    match  : string,
    replc  : string,
    include: string[] = [],
    exclude: string[] = [],
    depth  : number = 0
) => fs.readdir(path, 'utf8', (error, docs) => {
    if (error) {
        console.error(error)
    } else {
        docs.forEach(replaceDeep(path, match, replc, include, exclude))
    }
})

const replaceArgs

replaceInDir('./dt/types', '"ts-toolbelt": ".*"', '"ts-toolbelt": "test"', ['package.json'])
