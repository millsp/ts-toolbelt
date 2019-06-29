import {Length} from '../../Tuple/Length'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/_Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Select} from '../Select'
import {Path as PPath} from './_Internal'

type _Pick<O extends object, Path extends string[], I extends Iteration = IterationOf<'0'>> = Select<{
    [K in keyof O]: K extends Path[Pos<I>]                       // If K is part of Path
                    ? Pos<Next<I>> extends Length<Path>          // & if it's the target
                      ? O[K] // pick it                          // Update - target
                      : Compute<_Pick<O[K] & {}, Path, Next<I>>> // Or continue diving
                    : never // don't pick                        // Not part of path - x
}, any> // Makes sure there is no `never` fields

export type Pick<O extends object, Path extends PPath> =
    _Pick<O, Path>
