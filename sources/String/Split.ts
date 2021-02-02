type _Split<S extends string, D extends string, T extends string[] = []> =
    S extends `${infer BS}${D}${infer AS}`
    ? _Split<AS, D, [...T, BS]>
    : [...T, S]

/**
 * Replace `R` with `W` in `S`
 * @param S
 * @param R
 * @param W
 */
export type Split<S extends string, D extends string> =
    S extends '' ? [] : string extends S ? string[] : _Split<S, D>
