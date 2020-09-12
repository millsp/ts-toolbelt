import {Equals} from '../Any/Equals'

// Credit https://stackoverflow.com/a/52473108/3570903

/**
@hidden
*/
export type _WritableKeys<O extends object> = {
    [K in keyof O]-?: {
        1: K
        0: never
    }[Equals<{-readonly [Q in K]: O[K]}, {[Q in K]: O[K]}>]
}[keyof O]

/**
Get the keys of `O` that are writable
@param O
@returns [[Key]]
@example
```ts
```
*/
export type WritableKeys<O extends object> =
    O extends unknown
    ? _WritableKeys<O>
    : never
