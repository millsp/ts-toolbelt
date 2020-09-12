/** @ignore *//** */

import {Function} from '../../Function'
import {PromiseType} from '../../../Any/PromiseType'

/**
@hidden
 */
export type PipeMultiAsync = {
    <
        R0,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
    ]): Function<P,   Promise<PromiseType<R0>>>

    <
        R0,
        R1,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
    ]): Function<P,   Promise<PromiseType<R1>>>

    <
        R0,
        R1,
        R2,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
    ]): Function<P,   Promise<PromiseType<R2>>>

    <
        R0,
        R1,
        R2,
        R3,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
        Function<[PromiseType<R2>],       R3>,
    ]): Function<P,   Promise<PromiseType<R3>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
        Function<[PromiseType<R2>],       R3>,
        Function<[PromiseType<R3>],       R4>,
    ]): Function<P,   Promise<PromiseType<R4>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
        Function<[PromiseType<R2>],       R3>,
        Function<[PromiseType<R3>],       R4>,
        Function<[PromiseType<R4>],       R5>,
    ]): Function<P,   Promise<PromiseType<R5>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
        Function<[PromiseType<R2>],       R3>,
        Function<[PromiseType<R3>],       R4>,
        Function<[PromiseType<R4>],       R5>,
        Function<[PromiseType<R5>],       R6>,
    ]): Function<P,   Promise<PromiseType<R6>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
        Function<[PromiseType<R2>],       R3>,
        Function<[PromiseType<R3>],       R4>,
        Function<[PromiseType<R4>],       R5>,
        Function<[PromiseType<R5>],       R6>,
        Function<[PromiseType<R6>],       R7>,
    ]): Function<P,   Promise<PromiseType<R7>>>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        R6,
        R7,
        R8,
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
        Function<[PromiseType<R2>],       R3>,
        Function<[PromiseType<R3>],       R4>,
        Function<[PromiseType<R4>],       R5>,
        Function<[PromiseType<R5>],       R6>,
        Function<[PromiseType<R6>],       R7>,
        Function<[PromiseType<R7>],       R8>,
    ]): Function<P,   Promise<PromiseType<R8>>>

    <
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
        P extends any[],
    >(...fns: [
        Function<P,                     R0>,
        Function<[PromiseType<R0>],       R1>,
        Function<[PromiseType<R1>],       R2>,
        Function<[PromiseType<R2>],       R3>,
        Function<[PromiseType<R3>],       R4>,
        Function<[PromiseType<R4>],       R5>,
        Function<[PromiseType<R5>],       R6>,
        Function<[PromiseType<R6>],       R7>,
        Function<[PromiseType<R7>],       R8>,
        Function<[PromiseType<R8>],       R9>,
    ]): Function<P,   Promise<PromiseType<R9>>>
}
