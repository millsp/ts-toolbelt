/** Get the literal kind of a type
 * @param A
 * @returns **`'string' | 'number' | 'function' | 'array' | 'object' | 'number' | 'boolean'`**
 * @example
 * ```ts
 * ```
 */
export type Kind<A extends any> =
    A extends string   ? 'string'  :
    A extends number   ? 'number'  :
    A extends Function ? 'function': // the order
    A extends any[]    ? 'array'   : // of this is
    A extends object   ? 'object'  : // important
    A extends number   ? 'number'  :
    A extends boolean  ? 'boolean' :
    'unknown'
