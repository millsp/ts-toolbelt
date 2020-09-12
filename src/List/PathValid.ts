import {PathValid as OPathValid} from '../Object/PathValid'
import {Key} from '../Any/Key'
import {List} from './List'

/**
Replaces invalid parts of a path with `never`
@param L to be inspected
@param Path to be validated
@returns [[Index]][]
@example
```ts
import {A, L, O} from 'ts-toolbelt'

// Get a property in an array `t` at any depth with `path`
// `A.Cast<P, L.PathValid<L, P>>` makes sure `path` is valid
const getAt = <
L extends L.List,
P extends L.List<A.Index>
>(t: L, path: A.Cast<P, L.PathValid<L, P>>): L.Path<L, P> => {
    let valueAt = t

    for (const p of path)
        valueAt = valueAt[p]

    return valueAt as any
}

const test0 = getAt([[[1]]] as const, [0, 0] as const) // [1]
const test1 = getAt([[[1]]] as const, [1] as const)    // error
```
*/
export type PathValid<L extends List, Path extends List<Key>> =
    OPathValid<L, Path>
