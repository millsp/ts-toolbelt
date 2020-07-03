/**
 * Create an asynchronous operation like the original `Promise` type but this
 * one prevents promises to be wrapped within more promises (not possible).
 * @param A
 */
export type Promise<A extends any> =
    globalThis.Promise<
        A extends globalThis.Promise<infer X>
        ? X
        : A
    >
