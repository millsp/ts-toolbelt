import {Pos} from '../Iteration/Pos'
import {_Append} from '../List/Append'
import {_Concat} from '../List/Concat'
import {_Drop} from '../List/Drop'
import {Length} from '../List/Length'
import {Next} from '../Iteration/Next'
import {Cast} from '../Any/Cast'
import {Parameters} from './Parameters'
import {Return} from './Return'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Key} from '../Iteration/Key'
import {NonNullable} from '../List/NonNullable'
import {x} from '../Any/x'
import {List} from '../List/List'
import {Function} from './Function'
import {Extends} from '../Any/Extends'

/**
@hidden
*/
type GapOf<L1 extends List, L2 extends List, LN extends List, I extends Iteration = IterationOf<'0'>> =
    L1[Pos<I>] extends x
    ? _Append<LN, L2[Pos<I>]>
    : LN

/**
@hidden
*/
type __GapsOf<L1 extends List, L2 extends List, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: __GapsOf<L1, L2, GapOf<L1, L2, LN, I>, Next<I>>
    1: [LN, I] // pack variables not to compute double recursion for each iteration
               // we continue the next steps in `_GapsOf` (`_Concat<LN, _Drop<L2, Key<I>>>`)
}[Extends<Pos<I>, Length<L1>>]

/**
@hidden
*/
type _GapsOf<L1 extends List, L2 extends List> =
    __GapsOf<L1, L2> extends infer X
    // `_Concat<LN, _Drop<L2, Key<I>>>`. This used to be done in `__GapsOf`
    // we've moved it so that the recursion does not trigger it over & over
    ? _Concat<Cast<(X & [])[0], List>, _Drop<L2, Key<Cast<(X & [])[1], Iteration>>>>
    // this is the ugly equivalent of old `_Concat<LN, _Drop<L2, Key<I>>>`
    : never

/**
@hidden
*/
type GapsOf<L1 extends List, L2 extends List> =
    _GapsOf<L1, L2> extends infer X
    ? Cast<X, List>
    : never

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
        GapsOf<L, Parameters<F>> extends infer G
        ? Length<Cast<G, List>> extends infer L
          ? L extends 0 ? Return<F> : L extends 1
            // it means that it can continue being curried & can be called as terminating function
            ? Curry<(...args: Cast<G, List>) => Return<F>> & ((...args: Cast<G, List>) => Return<F>)
            // so it allows to continue currying (useless) & call the function (the last parameter)
            : Curry<(...args: Cast<G, List>) => Return<F>>
        : never
    : never
