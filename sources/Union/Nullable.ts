/**
 * Add `undefined | null` to `U`
 * @param U to make nullable
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Nullable<U extends any> =
    U | undefined | null
