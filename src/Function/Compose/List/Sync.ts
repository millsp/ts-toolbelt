import {Function} from '../../Function'
import {Return} from '../../Return'
import {Last} from '../../../List/Last'
import {Head} from '../../../List/Head'

export type ComposeListSync = {
    <
        P extends any[],
        R0,
    >(fns: [
        Function<P,    R0>,
    ]): Function<P,    R0>

    <
        P extends any[],
        R0,
        R1,
    >(fns: [
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R1>

    <
        P extends any[],
        R0,
        R1,
        R2,
    >(fns: [
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R2>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
    >(fns: [
        Function<[R2], R3>,
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R3>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
    >(fns: [
        Function<[R3], R4>,
        Function<[R2], R3>,
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R4>

    <
        P extends any[],
        R0,
        R1,
        R2,
        R3,
        R4,
        R5,
    >(fns: [
        Function<[R4], R5>,
        Function<[R3], R4>,
        Function<[R2], R3>,
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R5>

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
        Function<[R5], R6>,
        Function<[R4], R5>,
        Function<[R3], R4>,
        Function<[R2], R3>,
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R6>

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
        Function<[R6], R7>,
        Function<[R5], R6>,
        Function<[R4], R5>,
        Function<[R3], R4>,
        Function<[R2], R3>,
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R7>

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
        Function<[R7], R8>,
        Function<[R6], R7>,
        Function<[R5], R6>,
        Function<[R4], R5>,
        Function<[R3], R4>,
        Function<[R2], R3>,
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R8>

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
        Function<[R8], R9>,
        Function<[R7], R8>,
        Function<[R6], R7>,
        Function<[R5], R6>,
        Function<[R4], R5>,
        Function<[R3], R4>,
        Function<[R2], R3>,
        Function<[R1], R2>,
        Function<[R0], R1>,
        Function<P,    R0>,
    ]): Function<P,    R9>

    <
        Fns extends Function[],
    >(
        fns: Fns
    ): Function<
        Parameters<Last<Fns>>,
        Return<Head<Fns>>
    >
}
