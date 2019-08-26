import replace from './regex-update-file'

replace('.', '"version": "(?<version>.*)"', '"version": "<version>-test"',
    [
        'package.json',
    ],
    []
)
