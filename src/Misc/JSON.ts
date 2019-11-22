/** A JSON type
 */
export type JSON = string | number | boolean | null | JSON[] | {[K: string]: JSON}
