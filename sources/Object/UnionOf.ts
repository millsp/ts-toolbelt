/**
 * @hidden
 */
export type _UnionOf<O extends object> =
    O[keyof O]

/**
 * Transform an [[Object]] into an [[Union]]
 * @param O to transform
 * @returns [[Any]]
 * @example
 * ```ts
 * ```
 */
export type UnionOf<O extends object> =
    O extends unknown
    ? _UnionOf<O>
    : never
