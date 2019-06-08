import {Length} from '../../Tuple/Length'
import {Compute} from '../../Extras/Compute'
import {Iteration, IterationOf} from '../../Iteration/IterationOf'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Select} from '../Select'
import {List} from '../../_Internal'
import {Path as PPath} from './_Internal'

type _Pick<O extends object, Path extends List<string>, I extends Iteration = IterationOf<'0'>> = Select<{
    [K in keyof O]: K extends Path[Pos<I>]                       // If K is part of Path
                    ? Pos<Next<I>> extends Length<Path>          // & if it's the target
                      ? O[K] // pick it                          // Update - target
                      : Compute<_Pick<O[K] & {}, Path, Next<I>>> // Or continue diving
                    : never // don't pick                        // Not part of path - x
}, any> // Makes sure there is no `never` fields

export type Pick<O extends object, Path extends PPath> =
    _Pick<O, Path>
