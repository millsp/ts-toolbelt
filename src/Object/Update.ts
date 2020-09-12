import {Key} from '../Any/Key'
import {x} from '../Any/x'
import {Replace} from '../Union/Replace'
import {Depth} from './_Internal'

/**
 * @hidden
 */
type UpdateFlat<O extends object, K extends Key, A extends any> = {
    [P in keyof O]: P extends K
                    ? Replace<A, x, O[P]>
                    : O[P]
} & {}

/**
 * @hidden
 */
type __UpdateDeep<O, A extends any> = {
    [K in keyof O]: Replace<A, x, O[K]> extends infer X
                    ? X extends object
                      ? __UpdateDeep<X, A>
                      : X
                    : never
}

/**
 * @hidden
 */
type _UpdateDeep<O extends object, K extends Key, A extends any, OU = Update<O, K, x | A>> = {
    [K in keyof OU]: __UpdateDeep<OU[K], A>
} & {}

/**
 * @hidden
 */
export type UpdateDeep<O extends object, K extends Key, A extends any> =
    _UpdateDeep<O, K, A>

/**
Update in `O` the fields of key `K` with `A`.
Use the [[x]] placeholder to get the current field type.
@param O to update
@param K to chose fields
@param A to update with
@returns [[Object]]
@example
```ts
import {A, O} from 'ts-toolbelt'

type User = {
    info: {
        name: string
        age: number
        payment: {}
    }
    id: number
}

type test0 = Update<User, 'id' | 'info', A.x | null>
// {
//     info: {
//         name: string;
//         age: number;
//         payment: {};
//     } | null;
//     id: number | null;
// }
```
*/
export type Update<O extends object, K extends Key, A extends any, depth extends Depth = 'flat'> = {
    'flat': UpdateFlat<O, K, A>
    'deep': UpdateDeep<O, K, A>
}[depth]
