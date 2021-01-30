import {Test, F, A} from '../sources'

const {checks, check} = Test

//////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION //////////////////////////////////////////////////////////////////////////////

// @ts-ignore
const fn = (a: string, b: number, c: object) => true

// ---------------------------------------------------------------------------------------
// ARROW

checks([
    check<F.Function<[string, number, object], boolean>, typeof fn, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPOSE

// sync ----------------------------------------------------------------------------------

declare const composeSync: F.Compose<'sync'>

const composedSync = composeSync(
    // @ts-ignore
    (message: string) => false, // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
 <T>(generic: T) => generic, // receive previous return
 (name: string, age: number) => ({name, age}), // receive parameters
)

checks([
    check<(typeof composedSync), (name: string, age: number) => boolean, Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare const composeAsync: F.Compose<'async'>

const composedAsync = composeAsync(
    // @ts-ignore
    (message: string) => false, // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    async <T>(generic: T) => generic, // receive previous return
    async (name: string, age: number) => ({name, age}), // receive parameters
)

checks([
    check<(typeof composedAsync), (name: string, age: number) => Promise<boolean>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CURRY

declare function curry<Fn extends F.Function>(f: Fn): F.Curry<Fn>

const __ = {} as A.x

// @ts-ignore
const toCurry = (name: string, age: number, single: boolean, nicknames?: string) => true
const curried = curry(toCurry)

const test00: boolean = curried(__, 26)(__, true, 'JJ')(__)(__)('Jane') // boolean
const test01: boolean = curried(__, 26)(__, true)('Jane') // boolean
const test02: boolean = curried(__, 26)(__, true, __)('Jane', 'JJ') // boolean
const test03: boolean = curried('Jane', 26, true) // boolean
const test04: boolean = curried('Jane', 26, true, 'JJ') // boolean

// ---------------------------------------------------------------------------------------
// PARAMETERS

checks([
    check<F.Parameters<typeof fn>, [string, number, object], Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LENGTH

checks([
    check<F.Length<typeof fn>, 3, Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any>, 1 | 2, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PIPE

// sync ----------------------------------------------------------------------------------

declare const pipeSync: F.Pipe<'sync'>

const pipedSync = pipeSync(
    (name: string, age: number) => ({name, age}), // receive parameters
 <T>(generic: T) => generic, // receive previous return
 (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
 // @ts-ignore
 (message: string) => false, // receive previous return
)

checks([
    check<(typeof pipedSync), (name: string, age: number) => boolean, Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare const pipeAsync: F.Pipe<'async'>

const pipedAsync = pipeAsync(
    (name: string, age: number) => ({name, age}), // receive parameters
    async <T>(generic: T) => generic, // receive previous return
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    // @ts-ignore
    (message: string) => false, // receive previous return
)

checks([
    check<(typeof pipedAsync), (name: string, age: number) => Promise<boolean>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PROMISIFY

checks([
    check<F.Promisify<(typeof fn)>, (a: string, b: number, c: object) => Promise<boolean>, Test.Pass>(),
    check<F.Promisify<(a: string) => A.Promise<boolean>>, (a: string) => Promise<boolean>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RETURN

checks([
    check<F.Return<typeof fn>, boolean, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNCURRY

checks([
    check<F.UnCurry<typeof curried>, typeof toCurry, Test.Pass>(),
])
