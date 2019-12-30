import {IterationOf} from '../../../../Iteration/IterationOf'
import {Iteration} from '../../../../Iteration/Iteration'
import {Pos} from '../../../../Iteration/Pos'
import {Next} from '../../../../Iteration/Next'
import {Key} from '../../../../Any/Key'
import {Update as OUpdate} from '../../../../Object/Update'
import {Update as LUpdate} from '../../../../List/Update'
import {LastIndex} from '../../../../List/LastIndex'
import {List} from '../../../../List/List'
import {Has} from '../../../../Union/Has'
import {Keys} from '../../../../Union/Keys'
import {ObjectOf} from '../../../../List/ObjectOf'
import {NumberOf} from '../../../../Any/_Internal'

type FinalUpdate<O extends object, K extends Key, A> =
    K extends number
    ? O extends List
      ? LUpdate<O, K, A>
      : OUpdate<O, K, A>
    : ObjectOf<OUpdate<O, K, A>>

type BuildUpdate<O extends object, K extends Key, Path extends List<Key>, A, I extends Iteration, _K extends Key = K> =
    K extends number
    ? O extends List
      ? LUpdate<O, K, _K extends number ? [] : undefined>
      : O & Record<Exclude<K, Keys<O>>, []>
    : O & Record<Exclude<K, Keys<O>>, []>

/**
@hidden
*/
type _Update<O extends object, Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
    Pos<I> extends LastIndex<Path>                                     // If it's the last index
    ? FinalUpdate<O, Path[Pos<I>], A>                                  // Use standard Update
    : BuildUpdate<O, Path[Pos<I>], Path, A, I> extends infer O         // we make that we can dive in an object even if the path does not exist within
      ? {                                                              // ^^^ this way, we create sub-empty-objects for the keys that don't exist in `O`
          [K in keyof O]: NumberOf<K> extends NumberOf<Path[Pos<I>]>                       // ?> for the keys `K` that are in the path
                          ? O[K] extends infer OK                      //    > we make that property distributable
                            ? Has<OK, object> extends 1                //      ?> if that union has at least an object
                              ? OK extends object                      //         > we distribute over objects
                                ? _Update<OK, Path, A, Next<I>>        //           ?> it is an object, continue diving
                                : OK                                   //           !> otherwise, we leave the property as is
                              : _Update<[], Path, A, Next<I>>          //      !> if union had no object, we can only replace it
                            : never
                          : O[K]                                       // !> `K` is not part of path, do nothing
        } & {}
      : never

/**
Update in **`O`** the fields at **`Path`** with **`A`**
(⚠️ this type is expensive)
@param O to update
@param Path to be followed
@param A to update with
@returns [[Object]]
@example
```ts
```
*/
export type Update<O extends object, Path extends List<Key>, A extends any> =
    _Update<O, Path, A>


type t = Update<{4: string[]}, [4, 2, 5], 42>

type t1 = LUpdate<number[], 0, 1>
