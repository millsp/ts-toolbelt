import {IntersectOf} from './IntersectOf'

/**
 * Get the last item within an [[Union]]
 * (⚠️ it might not preserve order)
 * @param U
 * @returns [[Any]]
 * @example
 * ```ts
 * ```
 */
export type Last<U extends any> =
    IntersectOf<
        U extends unknown   // Distribute U
        ? (x: U) => void
        : never             // To intersect
    > extends (x: infer P) => void
      ? P                   // Extract merged
      : never               // ^^^ Last parameter

/*
 * The above does this (i.e.)
 * Parameters<((a: 1) => void) & ((a: 2) => void)> // => [2]
 */
