import {Formats} from './_Internal'
import {Number} from './Number'
import {IsZero} from './IsZero'
import {Not} from '../Boolean/Not'
import {Pos} from '../Iteration/Pos'
import {IterationOf} from '../Iteration/IterationOf'
import {NumberMap} from '../Iteration/Maps/Number'
import {Map} from '../Iteration/Map'

/**
Change the format of a [[Number]]
@param B to transform
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.Format<'30', 'b'> // True
type test1 = N.Format<'30', 'n'> // 30
```
*/
export type Format<N extends Number, fmt extends Formats, IMap extends Map = NumberMap> = {
    'b': Not<IsZero<N, IMap>>
    'n': Pos<IterationOf<N, IMap>>
    's': N
}[fmt]
