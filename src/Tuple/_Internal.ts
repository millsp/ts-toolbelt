/** Describes the size limit of a **tuple**
 * * `min`: minimum size
 * * `max`: maximum size
 * * `reg`: regular size
 * (Useful for **tuple**s with optionals)
 */
export type Limit = 'min' | 'max' | 'reg'

export type Tuple<A = any> = ReadonlyArray<A> | A[]
