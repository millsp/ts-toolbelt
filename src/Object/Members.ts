import {ListOf} from '../Union/ListOf'
import {Flatten} from '../List/Flatten'
import {Readonly} from '../List/Readonly'

/**
@hidden
*/
type _Members<T, K extends Readonly<Array<unknown>>> = 
  ((...args: K) => unknown) extends ((head: infer Head, ...tail: infer Tail) => unknown)
  ? Head extends keyof T
    ? [T[Head], _Members<T, Tail>]
    : []
  : []

/**
Find all member types of an object and return them as an array.
Multiple members having the same type is supported, order of the
members declaration is preserved.

@param O From which members should be extract
@example
```ts
interface Person {
  name: string
  age: number
}
type PersonMembers = Members<Person> // [string, number]

interface OtherPerson {
  name: string
  age: number
  money: number
  catName: string
}

type OtherPersonMembers = Members<OtherPerson> // [string, number, number, string]


interface CatPerson {
  name: string
  age: number
  money: number
  cat: {
    name: string
    age: number
  }
}

type CatPersonMembers = Members<CatPerson> // [string, number, number, {name: string, age: number}]
```
*/
export type Members<O extends object> = Flatten<_Members<O, ListOf<keyof O>>>
