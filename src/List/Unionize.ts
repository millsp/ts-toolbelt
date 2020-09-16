import {Key} from '../Any/Key'
import {List} from './List'
import {At} from '../Object/At'
import {Format} from '../String/Format'
import {NumberOf} from '../Any/_Internal'
import {Cast} from '../Any/Cast'

/**
Make the fields of `L` union the ones of `L1`
@param L to union from
@param L1 to union with
@param K (?=`Key`) to do choose fields
@returns [[List]]
@example
```ts
```
*/
export type Unionize<L extends List, L1 extends List, K extends Key = Key> = Cast<{
    [P in keyof L]: P extends K
                    ? L[P] | At<L1, P>
                    : L[P]
}, List>
