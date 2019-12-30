import {Union} from './Union'

// Credit https://stackoverflow.com/a/50375286/3570903

/**
Transform a [[Union]] to an **intersection**
@param U to transform
@returns **intersection**
@example
```ts
```
*/
export type IntersectOf<U extends Union> =
    (U extends unknown? (k: U) => void : never) extends ((k: infer I) => void)
    ? I
    : never
