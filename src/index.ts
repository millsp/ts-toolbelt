// todo merge common names and do smart detect to know what to do (eg Diff, Filter...)

// Mention to TS team to use it as tests // no, publish on definitely typed

// Higher type safety for TypeScript

// Help you to get more done

// Build types that suit your project and enforce higher type safety
// And bring the most out of TypeScript with highly dynamic features

// Bring your types to a new level + 2 examples

// All of the types are tested, benchmarked & ready for production

// You need a type that's missing? Fund it (faster) or open an issue
// todo community types with issue hunt -> fit into a category or MISC

// re-type + TDD = <3 // ts-beast

// re-type is also a type testing tool, get it into your workflow

// Design your types easily with the powerful type matching system

// How does it work?
// It trades extra CPU & memory to perform more powerful type checks
// & each type is optimized for performance, not to bloat TypeScript

// Drawbacks
// - **Number**
// Numbers are not unlimited, they will overflow out of -40 to 40
// In this case a number is either narrowed to `string` or `number`
// For optimization reasons, numbers have to be used as `string`s
// However, they can easily be converted to a `number` (& back)
// - **Tuple**
// Similarly, the maximum size that can be handled is limited to 40
//

// Best practices
// Keep your types readible, when you combine, create a subtype
// type Z<i> = X<Y<i>>

// What's next?

// Integrate these tests to the workflow of TS
// Could create more types if TS was more perf

// Learn how to ?
// -> Link article

// Goals
// Create (more) Path types for all the ones of Object

// Need a type?
// -> Open an issue (+fund it)


// todo se why docgen fails -> hint fails on Tuple ? Re-add infer X?

import * as Test from './Test'
import * as A from './Any/_api'
import * as B from './Boolean/_api'
import * as C from './Class/_api'
import * as F from './Function/_api'
import * as I from './Iteration/_api'
import * as N from './Number/_api'
import * as O from './Object/_api'
import * as S from './String/_api'
import * as T from './Tuple/_api'
import * as U from './Union/_api'

export {
    Test,
    A,
    B,
    C,
    F,
    I,
    N,
    O,
    S,
    T,
    U,
}
