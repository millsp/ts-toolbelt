/** @ignore *//** */

import {Function} from '../../Function'

/**
@hidden
 */
export type PipeMultiSync = {
    <
        R0,
        P extends any[],
    >(...fns: [
        Function<P,    R0>,
    ]): Function<P,    R0>

    <
        R0,
        R1,
        P extends any[],
    >(...fns: [
        Function<P,    R0>,
        Function<[R0], R1>,
    ]): Function<P,    R1>

    <
        R0,
        R1,
        R2,
        P extends any[],
    >(...fns: [
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
    ]): Function<P,    R2>

    <
        R0,
        R1,
        R2,
        R3,
        P extends any[],
    >(...fns: [
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
        Function<[R2], R3>,
    ]): Function<P,    R3>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        P extends any[],
    >(...fns: [
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
        Function<[R2], R3>,
        Function<[R3], R4>,
    ]): Function<P,    R4>

    <
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
        P extends any[],
    >(...fns: [
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
        Function<[R2], R3>,
        Function<[R3], R4>,
        Function<[R4], R5>,
    ]): Function<P,    R5>

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
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
        Function<[R2], R3>,
        Function<[R3], R4>,
        Function<[R4], R5>,
        Function<[R5], R6>,
    ]): Function<P,    R6>

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
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
        Function<[R2], R3>,
        Function<[R3], R4>,
        Function<[R4], R5>,
        Function<[R5], R6>,
        Function<[R6], R7>,
    ]): Function<P,    R7>

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
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
        Function<[R2], R3>,
        Function<[R3], R4>,
        Function<[R4], R5>,
        Function<[R5], R6>,
        Function<[R6], R7>,
        Function<[R7], R8>,
    ]): Function<P,    R8>

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
        Function<P,    R0>,
        Function<[R0], R1>,
        Function<[R1], R2>,
        Function<[R2], R3>,
        Function<[R3], R4>,
        Function<[R4], R5>,
        Function<[R5], R6>,
        Function<[R6], R7>,
        Function<[R7], R8>,
        Function<[R8], R9>,
    ]): Function<P,    R9>
}
