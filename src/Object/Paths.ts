import {Key} from '../Any/Key'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Append} from '../List/Append'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Pos} from '../Iteration/Pos'
import {Length} from '../List/Length'
import {Extends} from '../Any/Extends'
import {Next} from '../Iteration/Next'

/**
@hidden
*/
type __Paths<O, Paths extends List<Key> = [], Seen = never> = {
    0: {[K in keyof O]: __Paths<O[K], Append<Paths, K>, O | Seen>}[keyof O]
    1: Paths
    2: List<Key>
}[
    O extends Seen
    ? 2
    : O extends object
      ? 0
      : 1
]

/**
@hidden
*/
export type _Paths<O extends object> =
    __Paths<O> extends infer X
    ? Cast<X, List<string | number>>
    : never

/**
Get all the possible paths of `O`
(⚠️ this won't work with circular-refs)
@param O to be inspected
@returns [[String]][]
@example
```ts
```
*/
export type Paths<O extends object> =
    O extends unknown
    ? _Paths<O>
    : never

type Joinable = string | number | boolean | bigint

type Join<
  L extends List<Joinable>,
  D extends Joinable,
  J extends Joinable = L[0],
  I extends Iteration = IterationOf<'1'>> = {
    0: Join<L, D, `${J}${D}${L[Pos<I>]}`, Next<I>>
    1: J
}[Extends<Pos<I>, Length<L>>]

type StringPaths<O extends object> =
  Paths<O> extends infer P
  ? P extends unknown
    ? Join<Cast<P, List<string | number>>, '.'>
    : never
  : never

type t0 = StringPaths<typeof objecto>

declare function get<O extends object, P extends StringPaths<O>>(obj: O, path: P): P;

const object = {
    firstName: 'Diego',
    lastName : 'Haz',
    age      : 30,
    projects : [
        {name: 'Reakit', contributors: 68},
        {name: 'Constate', contributors: 12},
    ],
} as const

type O = {
  o: O
}

declare const objecto: O

type t = Paths<typeof objecto>

const a = get(objecto, '')

type PropType<T, Path extends string> =
    string extends Path ? unknown :
    Path extends keyof T ? T[Path] :
    Path extends `${infer K}.${infer R}` ? K extends keyof T ? PropType<T[K], R> : unknown :
    unknown;

declare function getPropValue<T, P extends string>(obj: T, path: P): PropType<T, P>;
declare const s: string

const obj = {a: {b: {c: 42, d: 'hello'}}}
const b = getPropValue(object, 'firstName')  // { b: {c: number, d: string } }
getPropValue(obj, 'a.b')  // {c: number, d: string }
getPropValue(obj, 'a.b.d')  // string
getPropValue(obj, 'a.b.x')  // unknown
getPropValue(obj, s)  // unknown
