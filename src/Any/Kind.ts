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
    A extends Function ? 'function': // the order  // to
    A extends any[]    ? 'array'   : // of this is // untangle
    A extends object   ? 'object'  : // important  // object types
    A extends number   ? 'number'  :
    A extends boolean  ? 'boolean' :
    'unknown'
