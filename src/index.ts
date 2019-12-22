/** @ignore *//** */

import * as Test from './Test'
import * as A from './Any/_api'
import * as B from './Boolean/_api'
import * as C from './Class/_api'
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
// - recursive iteration types, the ones that are of the `Concat` form. search for `extends infer X`
//   (this happens because this is an unsupported feature, it's neither `extends` nor a mapped type)
//   (it has the effect of not distributing/aggregate unions with `At`/`[]`, we must do it manually)
// - types that are used to compute keys that match certain conditions. search for `}[Keys<` | `}[keyof`
//
// => In those cases, we do the distributution manually by inserting `<type> extends unknown ? ... : never`
// => `keyof` statements are ok and can be used if they're distributed. search for `extends unknown ?`
// => Remember that simple mapped types distribute well over unions and preserve them (no problem)

// ///////////////////////////////////////////////////////////////////////////////////////
// TODO //////////////////////////////////////////////////////////////////////////////////

// - distribute recursive types
