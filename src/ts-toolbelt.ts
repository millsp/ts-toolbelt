/** @ignore *//** */

import * as Test from './Test'
import * as A from './Any/_api'
import * as B from './Boolean/_api'
import * as C from './Class/_api'
import * as Community from './Community/_api'
import * as F from './Function/_api'
import * as I from './Iteration/_api'
import * as M from './Misc/_api'
import * as N from './Number/_api'
import * as O from './Object/_api'
import * as S from './String/_api'
import * as T from './List/_api'
import * as L from './List/_api'
import * as U from './Union/_api'
import * as Any from './Any/_api'
import * as Boolean from './Boolean/_api'
import * as Class from './Class/_api'
import * as Function from './Function/_api'
import * as Iteration from './Iteration/_api'
import * as Misc from './Misc/_api'
import * as Number from './Number/_api'
import * as Object from './Object/_api'
import * as String from './String/_api'
import * as Tuple from './List/_api'
import * as List from './List/_api'
import * as Union from './Union/_api'

export {
    Test,
    A,
    Any,
    B,
    Boolean,
    C,
    Class,
    Community,
    F,
    Function,
    I,
    Iteration,
    L,
    List,
    M,
    Misc,
    N,
    Number,
    O,
    Object,
    S,
    String,
    T,
    Tuple,
    U,
    Union,
}

// ///////////////////////////////////////////////////////////////////////////////////////
// NOTES /////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////
// RULES /////////////////////////////////////////////////////////////////////////////////

// I regularly check that the project is respecting the following rules

// ---------------------------------------------------------------------------------------
// 1. Better computations
//
// search for `= \{\n?[ ]*?\[(.*?\n)*?\}` and add `& {}` for better computation
// ! we can only do this if the mapped type is not intended to go deep (recurse)
// ! because `& {}` forces computation, if we do it deeply => resolves to `any`
// ! this happens only when a type is nested within itself => infinite recursion
// This technique also lowers the memory consumption and the RAM that is needed

// ---------------------------------------------------------------------------------------
// 2. Avoid fall-through `never`
//
// do not forget to NOT do `X extends never` => do `[X] extends [never]`
// if the goal is to explicitly match `never` & not distribute the type

// ---------------------------------------------------------------------------------------
// 3. Ensure type distribution
//
// There are three families of types that do not distribute well (at all)
// - types that make use of `keyof`. `keyof` is a distribution breaker. search for `(?<! in )keyof(?! any)`
// - recursive iteration types, the ones that are of the `Concat` form. search for `(?<!\?)\n.*?extends infer X`
//   (this happens because this is an unsupported feature, it's neither `extends` nor a mapped type)
//   (it has the effect of not distributing/aggregate unions with `At`/`[]`, we must do it manually)
// - types that are used to compute keys that match certain conditions. search for `}[Keys<` | `}[keyof`
// - anything that's indexed has a chance of not distributing properly. search for `}[`
//
// => In those cases, we do the distributution manually by inserting `<type> extends unknown ? ... : never`
// -> `keyof` statements are ok and can be used if they're distributed. search for `extends unknown ?`
// -> Remember that simple mapped types distribute well over unions and preserve them (no problem)
//
// => For recursive types that re-use each other, we MUST NOT use the distributed version since they all do it
//    We must import the version of the type that is named `type _<name>`. This is the non-distributed version
//    (otherwise, we would distribute over something that is already distributed (pointless, it uses resources))

// ---------------------------------------------------------------------------------------
// 4. Naming
//
// => If you wonder what the `type _<name>` means, it's a "step" in the implementation (a bare implementation)
//    (Usually, the first step `_` takes care of parameters. But you can also find 2 steps `__` (eg. recursive))
// => !\ Perf: Always check if a type has an EXPORTED `_` version, decide if needed
// -> Remember:
//              - ALL EXPORTED `_` types are/must be NON-distributed types
//              - ALL `_` types are parameter processors, they handle params
//              - ALL `_` types are the first step in a type's implementation
//              - ALL `_` types are useful to save processing/performance cost
//              - NOT ALL `_` types serve the same purpose

// ---------------------------------------------------------------------------------------
// 4. Performance
//
// => Types must always be written to be as lightweight as possible
// -> Sometimes it involves losing the comfort of using other types
//
// => Distributed types MUST USE NON-distributed types as much as possible
// -> This will avoid `<type> extends unknown`-hell loops (and re-looping)
//
// => Avoiding unnecessary intersections on large unions will compute time
// => This is also valid for `extends`, for distributing over large unions

// ---------------------------------------------------------------------------------------
// 5. Keys & Tuples
//
// => It is very common that we use `ObjectOf` to make a tuple an `object`
// -> We do this so that we can use tuples with the `Object` type utilities
// -> Using `Object` utilities directly with a tuple is known to cause bugs
//
// => One of the features of this lib is to be able to pass `Key`s to utils
// -> But on tuples that get manipulated (eg. with `ObjectOf`) we just can't
// -> In fact, tuple utilities were not always able to handle `number` keys
// -> This is a side effect of altering/transforming the original tuple type
// -> Altered tuples can only be interacted with if we pass `string` keys
//    (In essence, this would fail `Pick<ObjectOf<[1]>, 0>`)
// => So what we do is to check for all utilities located in folder `src/List`
// -> We look for ones that have any kind of `Key` parameter `K extends Key`
// -> We use `NumberOf` on those `K`s to make them `Number`s (ie. `string`s)
//    (Yes, `NumberOf` yields a `string` bcs numbers are handled as strings)

// ---------------------------------------------------------------------------------------
// 6. Distribution
//
// => An easy way to test if distribution is happening correctly is to test the
// type with `never`, then it should yield `never`. However, this might differ
// or not be true for a few utilities.
//
// => Perf: Always check if a type has an EXPORTED `_` version, decide if needed
//
// => !\ Excessive type distribution is known to cause type metadata loss
//    TypeScript's inference stops following if too much distribution is done
//    ALWAYS build a type version with `_` utilities, then distribute the type

// ///////////////////////////////////////////////////////////////////////////////////////
// TODO //////////////////////////////////////////////////////////////////////////////////

// remove legacy tools and rename MergeUp to Merge in the tests

// type Oo<V> = {
//     e: [V]
//     f: [[V]]
//     g: [[[V]]]
//     h: [[[[V]]]]
//     i: [[[[[V]]]]]
//     j: [[[[[[V]]]]]]
//     k: [[[[[[[V]]]]]]]
//     l: [[[[[[[[V]]]]]]]]
// }

// type t1 = O.PatchAll<{}, [
//     Oo<[1, 2, 3, 4]>,
//     Oo<[1, 2, 3, 4, 5]>,
//     Oo<[1, 2, 3, 4, 5, 6]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]>,
//     Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]>,
//     // Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]>,
//     // Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]>,
//     // Oo<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]>,
// ], 'deep', 2>['l'][0][0][0][0][0][0][0][0]
