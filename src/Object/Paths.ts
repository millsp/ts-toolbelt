import {OptionalFlat} from '../Object/Optional'
import {Key} from '../Any/Key'
import {NonNullableFlat} from '../Object/NonNullable'
import {Concat} from '../List/Concat'
import {Cast} from '../Any/Cast'
import {Equals} from '../Any/Equals'
import {List} from '../List/List'
import {Append} from '../List/Append'

/**
@hidden
*/
type __Paths<O, Paths extends List<Key> = []> = {
    0: {[K in keyof O]: __Paths<O[K], Append<Paths, K>>}[keyof O]
    // It dives deep, and as it dives, it adds the paths to `Paths`
    1: NonNullableFlat<OptionalFlat<Paths>>
    2: NonNullableFlat<OptionalFlat<Concat<Paths, Key[]>>>
}[
    Equals<O, any> extends 1      // Handle infinite recursion
    ? 2                           // 1: Exit adding infinite Path
    : O extends object            // 0: > If object
      ? [keyof O] extends [never] // & If recursion has finished
        ? 1                       // 1: Exit
        : 0                       // 0: Continue
      : 1                         // 1: Exit
]

/**
@hidden
*/
export type _Paths<O extends object> =
    __Paths<O> extends infer X
    ? Cast<X, List<Key>>
    : never

/**
Get all the possible paths of `O`
(⚠️ this won't work with circular-refs)
@param O to be inspected
@returns [[String]][]
@example
```ts
```
*/
export type Paths<O extends object> =
    O extends unknown
    ? _Paths<O>
    : never
