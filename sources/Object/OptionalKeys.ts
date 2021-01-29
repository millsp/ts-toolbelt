/**
 * @hidden
 */
export type _OptionalKeys<O extends object> = {
    [K in keyof O]-?: {} extends Pick<O, K>
                      ? K
                      : never
}[keyof O]

/**
 * Get the keys of `O` that are optional
 * @param O
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type OptionalKeys<O extends object> =
    O extends unknown
    ? _OptionalKeys<O>
    : never
