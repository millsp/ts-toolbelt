import {Length} from '../../Tuple/Length'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Select} from '../Select'
import {Path as PPath} from './_Internal'

type _Omit<O extends object, Path extends string[], I extends Iteration = IterationOf<'0'>> = Select<{
    [K in keyof O]: Compute<K extends Path[Pos<I>]      // If K is part of Path
                    ? Pos<Next<I>> extends Length<Path> // & if it's the target
                      ? never // don't pick             // Update - target
                      : _Omit<O[K] & {}, Path, Next<I>> // Or continue diving
                    : O[K]> // pick it                  // Not part of path - x
}, any> // Makes sure there is no `never` fields

export type Omit<O extends object, Path extends PPath> =
    _Omit<O, Path>
