import {Key} from '../Any/Key'

/**
@hidden
*/
export type _UndefinableKeys<O extends object> = {
    [K in keyof O]: [O[K] & (undefined)] extends [never]
                    ? never
                    : K
}[keyof O]

/**
Get the keys of **`O`** that are **`undefined`**
(⚠️ needs `--strictNullChecks` enabled)
@param O
@returns [[Key]]
@example
```ts
```
*/
export type UndefinableKeys<O extends object> =
    (
        O extends unknown
        ? _UndefinableKeys<O>
        : never
    ) & Key
