/** @ignore *//** */

export * as Test from './Test'
export * as A from './Any/_api'
export * as B from './Boolean/_api'
export * as C from './Class/_api'
export * as Community from './Community/_api'
export * as F from './Function/_api'
export * as I from './Iteration/_api'
export * as M from './Misc/_api'
export * as N from './Number/_api'
export * as O from './Object/_api'
export * as S from './String/_api'
export * as T from './List/_api'
export * as L from './List/_api'
export * as U from './Union/_api'
export * as Any from './Any/_api'
export * as Boolean from './Boolean/_api'
export * as Class from './Class/_api'
export * as Function from './Function/_api'
export * as Iteration from './Iteration/_api'
export * as Misc from './Misc/_api'
export * as Number from './Number/_api'
export * as Object from './Object/_api'
export * as String from './String/_api'
export * as Tuple from './List/_api'
export * as List from './List/_api'
export * as Union from './Union/_api'

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
// -> Perf tip: When building utilities, always check if a type has an exported `_` version & decide if needed
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

// ///////////////////////////////////////////////////////////////////////////////////////
// TODO //////////////////////////////////////////////////////////////////////////////////

// remove legacy tools and rename MergeUp to Merge in the tests

// type O<V> = {
//     a: number[]
//     b: {a: V}[]
//     c: O<V>
// }

// type t1 = O.MergeAll<{}, [
//     O<[0]>,
//     O<[1, 2]>,
//     O<[1, 2, 3]>,
//     O<[1, 2, 3, 4]>,
//     O<[1, 2, 3, 4, 5]>,
//     O<[1, 2, 3, 4, 5, 6]>,
//     O<[1, 2, 3, 4, 5, 6, 7]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]>,
//     O<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]>,
// ], 'deep', 0>

