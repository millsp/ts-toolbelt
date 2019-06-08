import {Length} from '../../Tuple/Length'
import {Compute} from '../../Extras/Compute'
import {Iteration, IterationOf} from '../../Iteration/IterationOf'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {List} from '../../_Internal'
import {Path as PPath} from './_Internal'

type _Update<O extends object, Path extends List<string>, A, I extends Iteration = IterationOf<'0'>> = {
  [K in keyof O]: K extends Path[Pos<I>]                            // If K is part of Path
                  ? Pos<Next<I>> extends Length<Path>               // & if it's the target
                    ? A // update it                                // Update - target
                    : Compute<_Update<O[K] & {}, Path, A, Next<I>>> // Or continue diving
                  : O[K] // don't update                            // Not part of path - x
}

export type Update<O extends object, Path extends PPath, A extends any> =
    _Update<O, Path, A>
