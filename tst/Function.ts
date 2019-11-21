/* tslint:disable */

import {Test, F, A} from '../src/index'

const {checks, check} = Test

//////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION //////////////////////////////////////////////////////////////////////////////

const FN = (a: string, b: number, c: object) => true

// ---------------------------------------------------------------------------------------
// ARROW

checks([
    check<F.Function<[string, number, object], boolean>,   typeof FN & Function,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPOSE

// sync ----------------------------------------------------------------------------------

declare function compose<Fns extends F.Function[]>(...args: F.Composer<Fns>): F.Compose<Fns>

const composedSync = compose(
    (message: string)                   => false,                   // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    <T>(generic: T)                     => generic,                 // receive previous return
    (name: string, age: number)         => ({name, age}),           // receive parameters
)

checks([
    check<(typeof composedSync),    (name: string, age: number) => boolean,  Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare function compose<Fns extends F.Function[]>(...args: F.Composer<Fns, 'async'>): F.Compose<Fns, 'async'>

const composedAsync = compose(
    (message: string)                         => false,                   // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    async <T>(generic: T)                     => generic,                 // receive previous return
    async (name: string, age: number)         => ({name, age}),           // receive parameters
)

checks([
    check<(typeof composedAsync),   (name: string, age: number) => Promise<boolean>,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CURRY

declare function curry<Fn extends F.Function>(f: Fn): F.Curry<Fn>

const __ = {} as A.x

const toCurry = (name: string, age: number, single: true, ...nicknames: string[]) => true
const curried = curry(toCurry)

const t = curried()

const test00 = curried(__, 26)(__, true, 'JJ', __)('Jane', 'Jini') // boolean
const test01 = curried('Jane', 26, true, __)('JJ', __)('Jini')     // boolean

// ---------------------------------------------------------------------------------------
// PARAMETERS

checks([
    check<F.Parameters<typeof FN>,    [string, number, object],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LENGTH

checks([
    check<F.Length<typeof FN>,                          3,          Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any>,         1 | 2,      Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any, 's'>,    '1' | '2',  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PIPE

// sync ----------------------------------------------------------------------------------

declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns>): F.Pipe<Fns>

const pipedSync = pipe(
    (name: string, age: number)         => ({name, age}),           // receive parameters
    <T>(generic: T)                     => generic,                 // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                   => false,                   // receive previous return
)

checks([
    check<(typeof pipedSync),   (name: string, age: number) => boolean,  Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns, 'async'>): F.Pipe<Fns, 'async'>

const pipedAsync = pipe(
    (name: string, age: number)               => ({name, age}),           // receive parameters
    async <T>(generic: T)                     => generic,                 // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                         => false,                   // receive previous return
)

checks([
    check<(typeof pipedAsync),   (name: string, age: number) => Promise<boolean>,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PROMISIFY

checks([
    check<F.Promisify<typeof FN>,  (a: string, b: number, c: object) => Promise<boolean>,  Test.Pass>(),
    check<F.Promisify<(a: string) => Promise<boolean>>,  (a: string) => Promise<boolean>,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RETURN

checks([
    check<F.Return<typeof FN>,    boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNCURRY

// checks([
//     check<F.UnCurry<typeof curried>,    typeof FN,  Test.Pass>(),
// ])
