import {Keys as UKeys} from '../Union/Keys'

/**
Get the keys of an [[Object]]
@param O
@returns [[Key]]
@example
```ts
```
*/
export type Keys<O extends object> =
    UKeys<O>
