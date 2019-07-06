import {Length} from '../../Tuple/Length'
import {Compute} from '../../Any/Compute'
import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Readonly as OReadonly} from '../Readonly'
import {Last} from '../../Tuple/Last'
import {Pop} from '../../Tuple/Pop'
import {Depth} from '../_Internal'
import {Path as PPath} from './_Internal'
import {Prepend} from '../../Tuple/Prepend'
import {Index} from '../../_Internal'

type _Readonly<O extends object, Path extends Index[], K extends Index, depth extends Depth, I extends Iteration = IterationOf<'0'>> = {
  [P in keyof O]: Compute<P extends Path[Pos<I>]                    // If K is part of Path
                  ? Pos<Next<I>> extends Length<Path>               // & if it's the target
                    ? OReadonly<O[P] & {}, K, depth> // immutable   // Update - target
                    : _Readonly<O[P] & {}, Path, K, depth, Next<I>> // Or continue diving
                  : O[P]> // don't update                           // Not part of path - x
}

export type Readonly<O extends object, Path extends PPath, depth extends Depth = 'flat'> = {}
// _Readonly<Record<'_', O>, Pop<Prepend<Path, '_'>>, Last<Path>, depth> // todo
// We have nested `O` to be able to perform 0-depth operations as well
