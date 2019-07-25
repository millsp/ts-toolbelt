import {Merge as OMerge} from '../Merge'
import {Length} from '../../Tuple/Length'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../_Internal'

// todo docs
type _Merge<O extends object, Path extends Index[], O1 extends object, I extends Iteration = IterationOf<'0'>> = {
  [K in keyof O]: Compute<K extends Path[Pos<I>]            // If K is part of Path
                  ? Pos<Next<I>> extends Length<Path>       // & if it's the target
                    ? OMerge<O[K] & {}, O1> // merge it     // Update - target
                    : _Merge<O[K] & {}, Path, O1, Next<I>>  // Or continue diving
                  : O[K]>                                   // Not part of path - x
}

export type Merge<O extends object, Path extends PPath, O1 extends object> =
   _Merge<O, Path, O1>
