import replace from './regex-update-file'

replace('.', '"version": "(?<version>.*\\..*)\\..*"', `"version": "<version>.${Date.now()}"`,
    [
        'package.json',
    ],
    []
)
