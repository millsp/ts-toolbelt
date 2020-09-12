import {Key} from '../Iteration/Key'
import {Pos} from '../Iteration/Pos'
import {Numbers, KnownIterationMapKeys} from './_Internal'
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'

/**
@hidden
*/
export type _NumberOf<N extends number, IMap extends Map> = {
    [K in keyof IMap[1]]: Pos<IMap[1][K]> extends N
                          ? Key<IMap[1][K]>
                          : never
}[KnownIterationMapKeys<IMap>]

/**
Transform a `number` into a [[Number]]
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
