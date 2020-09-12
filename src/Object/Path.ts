import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../List/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable} from '../Union/NonNullable'
import {Key} from '../Any/Key'
import {List} from '../List/List'
import {Boolean} from '../Boolean/Boolean'
import {Extends} from '../Any/Extends'

/**
@hidden
*/
type __Path<O, Path extends List<Key>, strict extends Boolean, I extends Iteration = IterationOf<'0'>> = {
    0: __Path<At<NonNullable<O> & {}, Path[Pos<I>], strict>, Path, strict, Next<I>>
    // Use of `NonNullable` otherwise path cannot be followed #`undefined`
    1: O
}[Extends<Pos<I>, Length<Path>>]

/**
@hidden
*/
export type _Path<O extends object, Path extends List<Key>, strict extends Boolean> =
    __Path<O, Path, strict> extends infer X
    ? Cast<X, any>
    : never

/**
Get in `O` the type of nested properties
@param O to be inspected
@param Path to be followed
@param strict (?=`1`) `0` to work with unions
@returns [[Any]]
@example
```ts
```
*/
export type Path<O extends object, Path extends List<Key>, strict extends Boolean = 1> =
    //! O extends unknown // not needed, this is what strict = 0 does
    Path extends unknown
    ? _Path<O, Path, strict>
    : never
