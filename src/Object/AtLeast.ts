import {_Omit} from './Omit'
import {_Pick} from './Pick'
import {Key} from '../Any/Key'
import {Compute} from '../Any/Compute'
import {OptionalFlat} from './Optional'
import {Keys} from './Keys'
import {Filter} from '../Union/Filter'
import {RequiredFlat} from './Required'

/**
@hidden
*/
type __AtLeast<O extends object, K extends Key> =
    K extends keyof O             // if we can operate on it
    ? OptionalFlat<O> & Filter<({ // merge all but K
        [P in K]: _Pick<O, P>     // with K possibilities
    }[K]), {}, '<-extends'>       // remove empty `{}`s
    : O

/**
@hidden
*/
type _AtLeast<O extends object, K extends Key> =
    Compute<__AtLeast<RequiredFlat<O>, K>>

/**
Split **`O`** into a [[Union]] with **`K`** keys in such a way that none of
the keys are ever present with one another within the different unions.
@param O to split
@param K to split with
@param strict (?=`1`) to force excess property checks https://github.com/microsoft/TypeScript/issues/20863
@returns [[Object]] [[Union]]
@example
```ts
```
*/
export type AtLeast<O extends object, K extends Key = Keys<O>> =
    O extends unknown
    ? _AtLeast<O, K>
    : never

type O = {
    a?: 1
    b?: 2
    c?: 3
    d?: 4
} | {
    e: 5
    f: 6
}

type t0 = AtLeast<O, 'a' | 'b' | 'f'>
// type t1 = Compute<AtLeastOne<O>>

