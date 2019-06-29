import {Length} from '../../Tuple/Length'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/_Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'

type _Update<O extends object, Path extends string[], A, I extends Iteration = IterationOf<'0'>> = {
  [K in keyof O]: K extends Path[Pos<I>]                            // If K is part of Path
                  ? Pos<Next<I>> extends Length<Path>               // & if it's the target
                    ? A // update it                                // Update - target
                    : Compute<_Update<O[K] & {}, Path, A, Next<I>>> // Or continue diving
                  : O[K] // don't update                            // Not part of path - x
}

export type Update<O extends object, Path extends PPath, A extends any> =
    _Update<O, Path, A>
