// import {Length} from '../../Tuple/Length'
// import {Compute} from '../../Any/Compute'
// import {IterationOf} from '../../Iteration/IterationOf'
// import {Iteration} from '../../Iteration/Iteration'
// import {Pos} from '../../Iteration/Pos'
// import {Next} from '../../Iteration/Next'
// import {Filter} from '../Filter'
// import {Path as PPath} from './_Internal'
// import {Index} from '../../_Internal'
// import {Type} from '../../Any/Type'
// import {Pick as OPick} from '../Pick'
// import {Merge as OMerge} from '../Merge'

// type Never = Type<{}, 'never'>

// type _Pick<O extends object, Path extends Index[], I extends Iteration = IterationOf<'0'>> = {
//     [K in keyof O]: Compute<K extends Path[Pos<I>]             // If K is part of Path
//                     ? Pos<Next<I>> extends Length<Path>        // & if it's the target
//                       ? O[K] // pick it                        // Update - target
//                       : OMerge<_Pick<O[K] & {}, Path, Next<I>>, OPick<O[K] & {}, Path[Pos<Next<I>>]>>       // Or continue diving
//                     : Never> // don't pick                     // Not part of path - x
// } extends infer X ? Filter<X & {}, Never, '<-extends'> : never // No `never` fields

// /** Extract out of **`O`** the fields at **`Path`**
//  * @param O to extract from
//  * @param Path to be followed
//  * @returns **`object`**
//  * @example
//  * ```ts
//  * ```
//  */
// export type Pick<O extends object, Path extends PPath> =
//     _Pick<O, Path>

// interface Test {
//   foo: {
//     foofoo: string;
//     barbar: string
//   };
//   bar: {
//     foofoo: {
//       barbar: string
//       yogyog: string
//     }
//   };
//   unneeded: null;
// }

// type pickedTest = Pick<Test, ['foo' | 'bar', 'foofoo', 'barbar']>;
