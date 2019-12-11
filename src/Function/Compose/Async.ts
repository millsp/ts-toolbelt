import {Function} from '../Function'
import {PromiseOf} from '../../Class/PromiseOf'
import {Last} from '../../List/Last'
import {Return} from '../Return'
import {Head} from '../../List/Head'

export type ComposeAsync = {
    <R>(): R

    <
        P extends any[],
        R0,
    >(
        fn0: Function<P,               R0>,
    ): Function<P,                     R0>

    <
        P extends any[],
        R0,
        R1,
    >(
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R1>

    <
        P extends any[],
        R0,
        R1,
        R2,
    >(
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R2>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
    >(
        fn3: Function<[PromiseOf<R2>], R3>,
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R3>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
    >(
        fn4: Function<[PromiseOf<R3>], R4>,
        fn3: Function<[PromiseOf<R2>], R3>,
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R4>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
    >(
        fn5: Function<[PromiseOf<R4>], R5>,
        fn4: Function<[PromiseOf<R3>], R4>,
        fn3: Function<[PromiseOf<R2>], R3>,
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R5>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
    >(
        fn6: Function<[PromiseOf<R5>], R6>,
        fn5: Function<[PromiseOf<R4>], R5>,
        fn4: Function<[PromiseOf<R3>], R4>,
        fn3: Function<[PromiseOf<R2>], R3>,
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R6>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
    >(
        fn7: Function<[PromiseOf<R6>], R7>,
        fn6: Function<[PromiseOf<R5>], R6>,
        fn5: Function<[PromiseOf<R4>], R5>,
        fn4: Function<[PromiseOf<R3>], R4>,
        fn3: Function<[PromiseOf<R2>], R3>,
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R7>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
        R8,
    >(
        fn8: Function<[PromiseOf<R7>], R8>,
        fn7: Function<[PromiseOf<R6>], R7>,
        fn6: Function<[PromiseOf<R5>], R6>,
        fn5: Function<[PromiseOf<R4>], R5>,
        fn4: Function<[PromiseOf<R3>], R4>,
        fn3: Function<[PromiseOf<R2>], R3>,
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R8>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
        R8,
        R9,
    >(
        fn9: Function<[PromiseOf<R8>], R9>,
        fn8: Function<[PromiseOf<R7>], R8>,
        fn7: Function<[PromiseOf<R6>], R7>,
        fn6: Function<[PromiseOf<R5>], R6>,
        fn5: Function<[PromiseOf<R4>], R5>,
        fn4: Function<[PromiseOf<R3>], R4>,
        fn3: Function<[PromiseOf<R2>], R3>,
        fn2: Function<[PromiseOf<R1>], R2>,
        fn1: Function<[PromiseOf<R0>], R1>,
        fn0: Function<P,               R0>,
    ): Function<P,                     R9>

    <
        Fns extends Function[],
    >(
        ...fns: Fns
    ): Function<
        Parameters<Last<Fns>>,
        Promise<PromiseOf<Return<Head<Fns>>>>
    >
}

