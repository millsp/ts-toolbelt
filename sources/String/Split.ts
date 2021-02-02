type _Split<S extends string, D extends string, T extends string[] = []> =
    S extends `${infer BS}${D}${infer AS}`
    ? _Split<AS, D, [...T, BS]>
    : T

/**
 * Split `S` by `D` into a [[List]]
 * @param S to split up
 * @param D to split at
 */
export type Split<S extends string, D extends string = ''> =
    S extends '' ? [] : string extends S ? string[] : _Split<S, D>
