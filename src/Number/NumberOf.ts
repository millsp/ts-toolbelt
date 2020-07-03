import {Key} from '../Iteration/Key'
import {Pos} from '../Iteration/Pos'
import {Numbers, KnownIterationMapKeys} from './_Internal'
import {NumberMap} from '../Misc/Iteration/Number'
import {Map} from '../Misc/Iteration/Map'

/**
@hidden
*/
export type _NumberOf<N extends number, IMap extends Map> = {
    [K in keyof IMap]: Pos<IMap[K], IMap> extends N
                       ? Key<IMap[K], IMap>
                       : never
}[KnownIterationMapKeys<IMap>]

/**
Transform a **`number`** into a [[Number]]
@param N to stringify
@param IMap to operate with another set of numbers
@returns [[String]]
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.StringOf<5>  //  '5'
type test1 = N.StringOf<-5> // '-5'
```
*/
export type NumberOf<N extends number, IMap extends Map = NumberMap> =
    N extends Numbers<IMap>['number']['all']
    ? _NumberOf<N, IMap>
    : string
