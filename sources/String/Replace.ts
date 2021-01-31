export type Replace<S extends string, R extends string, W extends string, RS extends string = ''> =
    S extends `${infer BS}${R}${infer AS}`
    ? Replace<AS, R, W, `${RS}${BS}${W}`>
    : `${RS}${S}`
