import {At} from './At'
import {Depth, Empty} from './_Internal'
import {Kind} from '../Any/Kind'
import {OptionalKeys} from './OptionalKeys'
import {Key} from '../Any/Key'
import {NonNullable} from '../Union/NonNullable'
import {And} from '../Boolean/And'
import {Extends} from '../Any/Extends'
import {Boolean} from '../Boolean/Boolean'
import {Or} from '../Boolean/Or'
import {Overwrite} from './Overwrite'
import {Select} from '../Union/Select'

/**
@hidden
*/
type MergeUpProp<O extends object, O1 extends object, K extends Key, IsOptional extends Boolean> =
    IsOptional extends 1                // If `K` is marked as optional
    ? NonNullable<At<O, K>> | At<O1, K> // complete `O[K]` with `O1[K]`
    : [At<O, K>] extends [never]        // or patch `O[K]` with `O1[K]`
      ? At<O1, K>                       // can patch with `O1[K]`
      : At<O, K>                        // cannot patch, keep it

/**
@hidden
*/
export type _MergeUpFlat<O extends object, O1 extends object, OOK extends Key = OptionalKeys<O>> = {
    [K in keyof (Empty<O> & Empty<O1>)]: MergeUpProp<O, O1, K, Extends<K, OOK>>
} & {}

/**
@hidden
*/
type MergeUpFlat<O extends object, O1 extends object> =
    O extends unknown       // we distribute because
    ? O1 extends unknown    // doing `O & O1` breaks
      ? _MergeUpFlat<O, O1> // the mapped type distrib
      : never
    : never

/**
@hidden
*/
export type _MergeUpDeep<O extends object, O1 extends object, IsParentOptional extends Boolean = 0, OOK extends keyof O = OptionalKeys<O>> = {
    [K in keyof (Empty<O> & Empty<O1>)]: And< // we first make sure that both are objects
                                             Extends<Kind<NonNullable<At<O,  K>>>, 'object'>,
                                             Extends<Kind<NonNullable<At<O1, K>>>, 'object'>
                                         > extends 1
                                         ? MergeUpDeep< // if it is the case, recurse deeper
                                             At<O,  K> & {}, // merge O[K]
                                             At<O1, K> & {}, // with O1[K]
                                             // mark the descendants as children of an optional
                                             K extends OOK ? 1 : 0
                                             // if `O[K]` has `undefined | null` we re-add it
                                         > | (Extends<K, OOK> extends 0 ? Select<At<O, K>, undefined | null> : never)
                                         : MergeUpProp< // otherwise, we treat them as fields
                                             O, O1, K,
                                             Or< // if parent, or the field `K` are optional
                                                 IsParentOptional,
                                                 Extends<K, OOK>
                                             >
                                         >
} & {}

/**
@hidden
*/
type MergeUpDeep<O extends object, O1 extends object, IsParentOptional extends Boolean = 0> =
    O extends unknown
    ? O1 extends unknown
      ? _MergeUpDeep<O, O1, IsParentOptional>
      : never
    : never

/**
Accurately complete the fields of **`O`** with the ones of **`O1`**.
This is a version of `Merge` that handles optional fields. It understands
that merged optional fields are no longer optional (have been completed).
And it is able to deal with the merging of **`Union`s** of [[Object]]s.
@param O to complete
@param O1 to copy from
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
import {O} from 'ts-toolbelt'

type O = {
    name?: string
    age? : number
    zip? : string
    pay  : {
        cvv?: number
    }
}

type O1 = {
    age : number
    zip?: number
    city: string
    pay : {
        cvv : number
        ccn?: string
    }
}

type test = O.MergeUp<O, O1, 'deep'>
// {
//     name?: string | undefined;
//     age: number;
//     zip?: string | number;
//     pay: {
//         cvv: number;
//         ccn?: string | undefined;
//     };
//     city: string;
// }
```
*/
export type MergeUp<O extends object, O1 extends object, depth extends Depth = 'flat'> = {
    'flat': MergeUpFlat<O, O1>
    'deep': MergeUpDeep<O, O1>
}[depth]
