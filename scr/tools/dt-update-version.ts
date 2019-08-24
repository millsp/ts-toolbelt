import * as fs from 'fs'
import * as rl from 'readline'

const match = /"ts-toolbelt": ".*"/u
const replc = '"ts-toolbelt": "dt"'

const tryToUpdateDeep = (path: string) => (doc: string) => {
    const pathToDoc = `${path}/${doc}`

    if (fs.statSync(pathToDoc).isDirectory()) {
        dtUpdateVersion(pathToDoc)
    } else if (fs.statSync(pathToDoc).isFile()) {
        if (doc !== 'package.json') {return}

        let   content  = ''
        let   didMatch = false
        const streamFD = fs.createReadStream(pathToDoc)

        rl.createInterface(streamFD).
        on('line', (line) => {
            if (line.match(match)) {
                line = line.replace(match, replc)

                didMatch = true
            }

            content += `${line}\n`
        }).
        on('close', () => {
            if (didMatch) {
                fs.writeFileSync(pathToDoc, content)

                console.info(`updated ${pathToDoc}`)
            }

            streamFD.close()
        })
    }
}

// update the ts-toolbelt dependents to the latest ts-toolbelt version
const dtUpdateVersion = (path: string) => fs.readdir(path, 'utf8', (error, docs) => {
    if (error) {
        console.error(error)
    } else {
        docs.forEach(tryToUpdateDeep(path))
    }
})

dtUpdateVersion('./dt/types')
