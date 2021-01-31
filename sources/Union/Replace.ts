/**
 * Replace `M` with `A` in `U`
 * @param U to update
 * @param M to select
 * @param A to update with
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Replace<U extends any, M extends any, A extends any> =
    U extends M
    ? A
    : U
