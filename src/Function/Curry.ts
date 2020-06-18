import {Pos} from '../Iteration/Pos'
import {Append} from '../List/Append'
import {_Concat} from '../List/Concat'
import {Length} from '../List/Length'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Parameters} from './Parameters'
import {Return} from './Return'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {NonNullable} from '../List/NonNullable'
import {x} from '../Any/x'
import {List} from '../List/List'
import {Function} from './Function'
import {Extends} from '../Any/Extends'
import {Tail} from '../List/Tail'

/**
@hidden
*/
type GapOf<L1 extends List, L2 extends List, LN extends List, I extends Iteration = IterationOf<'0'>> =
    L1[Pos<I>] extends x
    ? Append<LN, L2[Pos<I>]>
    : LN

/**
@hidden
*/
type _GapsOf<L1 extends List, L2 extends List, LN extends List = [], L2D extends List = L2, I extends Iteration = IterationOf<'0'>> = {
    // L2D is what is left to consume, previously was `Drop` (see git history)
    0: _GapsOf<L1, L2, GapOf<L1, L2, LN, I>, Tail<L2D>, Next<I>>
    1: _Concat<LN, L2D>
}[Extends<Pos<I>, Length<L1>>]

/**
@hidden
*/
type Gaps<L extends List> = NonNullable<{
    [K in keyof L]?: L[K] | x
}>

/**
Curry a [[Function]]
@param F to curry
@returns [[Function]]
@example
```ts
import {F} from 'ts-toolbelt'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```
*/
export type Curry<F extends Function> =
    <L extends List>(...args: Cast<L, Gaps<Parameters<F>>>) =>
        _GapsOf<L, Parameters<F>> extends infer G
        ? Length<Cast<G, List>> extends infer L
          ? L extends 0 ? Return<F> : L extends 1
            // it means that it can continue being curried & can be called as terminating function
            ? Curry<(...args: Cast<G, List>) => Return<F>> & ((...args: Cast<G, List>) => Return<F>)
            // so it allows to continue currying (useless) & call the function (the last parameter)
            : Curry<(...args: Cast<G, List>) => Return<F>>
        : never
    : never
