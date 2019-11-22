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
import * as T from './Tuple/_api'
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
import * as Tuple from './Tuple/_api'
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

// NOTES

// search for `= \{\n?[ ]*?\[(.*?\n)*?\}` and add `& {}` for better computation

// do not forget to NOT do `X extends never` => do `[X] extends [never]`
// if the goal is to explicitly match `never` & not distribute the type

// we can now use recursive interfaces/class to express n--level nesting
// https://github.com/microsoft/TypeScript/pull/33050 = infinite recurse
//
// EXAMPLES
//
// 1.
// type Json = string | number | boolean | null | Json[] | { [key: string]: Json }
//
// 2.
// interface Box<T> {
//     value: T;
// }
//
// type Foo<T> = Box<number | Foo>
//
// 3.
// type ValueOrArray<T> = T | Array<ValueOrArray<T>>;
//
// 4.
// type ValueOrArray<T> = [ValueOrArray<T>]
//
