type _Split<S extends string, D extends string, T extends string[] = []> =
    S extends `${infer BS}${D}${infer AS}`
    ? _Split<AS, D, [...T, BS]>
    : [...T, S]

export type Split<S extends string, D extends string> =
    S extends '' ? [] : string extends S ? string[] : _Split<S, D>
