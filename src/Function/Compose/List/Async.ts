import {Function} from '../../Function'
import {PromiseOf} from '../../../Class/PromiseOf'
import {Last} from '../../../List/Last'
import {Return} from '../../Return'
import {Head} from '../../../List/Head'

export type ComposeListAsync = {
    <
        P extends any[],
        R0,
    >(fns: [
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R0>>>

    <
        P extends any[],
        R0,
        R1,
    >(fns: [
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R1>>>

    <
        P extends any[],
        R0,
        R1,
        R2,
    >(fns: [
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R2>>>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
    >(fns: [
        Function<[PromiseOf<R2>],       R3>,
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R3>>>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
    >(fns: [
        Function<[PromiseOf<R3>],       R4>,
        Function<[PromiseOf<R2>],       R3>,
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R4>>>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
    >(fns: [
        Function<[PromiseOf<R4>],       R5>,
        Function<[PromiseOf<R3>],       R4>,
        Function<[PromiseOf<R2>],       R3>,
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R5>>>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
    >(fns: [
        Function<[PromiseOf<R5>],       R6>,
        Function<[PromiseOf<R4>],       R5>,
        Function<[PromiseOf<R3>],       R4>,
        Function<[PromiseOf<R2>],       R3>,
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R6>>>

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
    >(fns: [
        Function<[PromiseOf<R6>],       R7>,
        Function<[PromiseOf<R5>],       R6>,
        Function<[PromiseOf<R4>],       R5>,
        Function<[PromiseOf<R3>],       R4>,
        Function<[PromiseOf<R2>],       R3>,
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R7>>>

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
    >(fns: [
        Function<[PromiseOf<R7>],       R8>,
        Function<[PromiseOf<R6>],       R7>,
        Function<[PromiseOf<R5>],       R6>,
        Function<[PromiseOf<R4>],       R5>,
        Function<[PromiseOf<R3>],       R4>,
        Function<[PromiseOf<R2>],       R3>,
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R8>>>

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
    >(fns: [
        Function<[PromiseOf<R8>],       R9>,
        Function<[PromiseOf<R7>],       R8>,
        Function<[PromiseOf<R6>],       R7>,
        Function<[PromiseOf<R5>],       R6>,
        Function<[PromiseOf<R4>],       R5>,
        Function<[PromiseOf<R3>],       R4>,
        Function<[PromiseOf<R2>],       R3>,
        Function<[PromiseOf<R1>],       R2>,
        Function<[PromiseOf<R0>],       R1>,
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseOf<R9>>>

    <
        Fns extends Function[],
    >(
        fns: Fns
    ): Function<
        Parameters<Last<Fns>>,
        Promise<PromiseOf<Return<Head<Fns>>>>
    >
}
