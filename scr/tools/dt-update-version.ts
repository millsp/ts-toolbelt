import * as fs from 'fs'

// update the ts-toolbelt dependents to the latest ts-toolbelt version
const dtUpdateVersion = (path: string) => fs.readdir(path, 'utf8', (error, docs) => {
    if (error)
        console.error(error)
    else {
        docs.forEach((doc) => {
            doc = `${path}/${doc}`

            if (fs.statSync(doc).isDirectory())
                dtUpdateVersion(`${doc}`)
            else {
                let data = fs.readFileSync(doc).toString('utf8')

                const match = /"ts-toolbelt": ".*"/u

                if (doc.match(/package.json/u) && data.match(match)) {
                    data = data.replace(match, '"ts-toolbelt": "../../../../ts-toolbelt"')

                    fs.writeFileSync(doc, data)

                    console.info(`updated ${doc}`)
                }

                fs.readFile(doc, 'utf8', (error, data) => {
                    if (error) throw error

                    const match = /"ts-toolbelt": ".*"/u

                    if (doc.match(/package.json/u) && data.match(match)) {
                        data = data.replace(match, '"ts-toolbelt": "../../../../ts-toolbelt"')

                        fs.writeFile(doc, data, (error) => {
                            if (error) throw error

                            console.info(`updated ${doc}`)
                        })
                    }
                })
            }
        })
    }
})

dtUpdateVersion('./dt')
