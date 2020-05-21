import {_Promise} from './_Internal'

/**
 * Create an asynchronous operation like the original `Promise` type but this
 * one prevents promises to be wrapped within more promises (not possible).
 * @param A
 */
export type Promise<A extends any> =
    A extends _Promise<any>
    ? A
    : _Promise<A>
