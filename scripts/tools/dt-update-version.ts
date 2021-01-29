import replace from './regex-update-file'

replace('./dt/types', '"ts-toolbelt": ".*"', '"ts-toolbelt": "test"',
    [
        '?.*/package.json',
    ],
    [],
)
