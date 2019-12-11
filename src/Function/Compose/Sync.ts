import {Function} from '../Function'
import {Return} from '../Return'
import {Last} from '../../List/Last'
import {Head} from '../../List/Head'

export type ComposeSync = {
    <R>(): R

    <
        P extends any[],
        R0,
    >(
        fn0: Function<P,    R0>,
    ): Function<P,          R0>

    <
        P extends any[],
        R0,
        R1,
    >(
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R1>

    <
        P extends any[],
        R0,
        R1,
        R2,
    >(
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R2>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
    >(
        fn3: Function<[R2], R3>,
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R3>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
    >(
        fn4: Function<[R3], R4>,
        fn3: Function<[R2], R3>,
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R4>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
    >(
        fn5: Function<[R4], R5>,
        fn4: Function<[R3], R4>,
        fn3: Function<[R2], R3>,
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R5>

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
        fn6: Function<[R5], R6>,
        fn5: Function<[R4], R5>,
        fn4: Function<[R3], R4>,
        fn3: Function<[R2], R3>,
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R6>

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
        fn7: Function<[R6], R7>,
        fn6: Function<[R5], R6>,
        fn5: Function<[R4], R5>,
        fn4: Function<[R3], R4>,
        fn3: Function<[R2], R3>,
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R7>

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
        fn8: Function<[R7], R8>,
        fn7: Function<[R6], R7>,
        fn6: Function<[R5], R6>,
        fn5: Function<[R4], R5>,
        fn4: Function<[R3], R4>,
        fn3: Function<[R2], R3>,
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R8>

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
        fns: Function<[R8], R9>,
        fn8: Function<[R7], R8>,
        fn7: Function<[R6], R7>,
        fn6: Function<[R5], R6>,
        fn5: Function<[R4], R5>,
        fn4: Function<[R3], R4>,
        fn3: Function<[R2], R3>,
        fn2: Function<[R1], R2>,
        fn1: Function<[R0], R1>,
        fn0: Function<P,    R0>,
    ): Function<P,          R9>

    <
        Fns extends Function[],
    >(
        ...fns: Fns
    ): Function<
        Parameters<Last<Fns>>,
        Return<Head<Fns>>
    >
}
