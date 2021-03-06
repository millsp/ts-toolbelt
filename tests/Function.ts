import {Test, F, A} from '../sources'
import {Narrow} from '../sources/Function/Narrow'

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

composeSync(
    (c1: string[]) => [c1],
    (b1: string) => [b1],
    curry((a1: number, d2:  number) => `${a1 + d2}`),
)(23, 42)

checks([
    check<(typeof composedSync), (name: string, age: number) => boolean, Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare const composeAsync: F.Compose<'async'>

const composedAsync = composeAsync(
    // @ts-ignore
    (message: string) => false, // receive previous return
    // @ts-ignore
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    async <T>(generic: T) => generic, // receive previous return
    async (name: string, age: number) => ({name, age}), // receive parameters
)

composeAsync(
    (c1: string[]) => [c1],
    (b1: string) => [b1],
    curry((a1: number, d2:  number) => `${a1 + d2}`),
)(23, 42)

checks([
    check<(typeof composedAsync), (name: string, age: number) => Promise<boolean>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CURRY

declare function curry<Fn extends F.Function>(f: Fn): F.Curry<Fn>;

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
// EXACT

declare function exactObject<A>(x: F.Exact<A, {a: number, b: 2}>): A;

const test07 = exactObject({} as {a: 1, b: 2})
// @ts-expect-error
const test08 = exactObject({} as {a: 1})

checks([
    check<typeof test07, {a: 1, b: 2}, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PARAMETERS

checks([
    check<F.Parameters<typeof fn>, [string, number, object], Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// AUTOPATH

type O_AUTOPATH = {
    a: {
        a: 1;
    };
    b: {
        a: {
            a: 2;
        };
        b: O_AUTOPATH[];
    };
};

checks([
    check<F.AutoPath<O_AUTOPATH, 'a'>, 'a' | 'a.a', Test.Pass>(),
    check<F.AutoPath<O_AUTOPATH, 'a.'>, 'a.a', Test.Pass>(),
    check<F.AutoPath<O_AUTOPATH, 'b.'>, 'b.b' | 'b.a', Test.Pass>(),
    check<F.AutoPath<O_AUTOPATH, 'b.b.0'>, 'b.b.0' | 'b.b.0.b' | 'b.b.0.a', Test.Pass>(),
    check<F.AutoPath<O_AUTOPATH, 'b.b.0.a'>, 'b.b.0.a' | 'b.b.0.a.a', Test.Pass>(),
    check<F.AutoPath<O_AUTOPATH, 'b.b.0.a'>, 'b.b.0.a' | 'b.b.x.a.a', Test.Fail>(),
    check<F.AutoPath<O_AUTOPATH, 'b.b.0.a'>, 'b.b.0.a' | 'b.b.a.a', Test.Fail>(),
    check<F.AutoPath<GlobalEventHandlersEventMap, 'cancel.isTrusted.'>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// VALIDPATH

type O_VALIDPATH = {
    a: {
        a: {};
    };
    b: {
        a: {
            a: {};
        };
        b: string[];
    };
};

checks([
    check<F.ValidPath<any, ['a', 'a']>, ['a', 'a'], Test.Pass>(),
    check<F.ValidPath<O_VALIDPATH, ['a', 'a']>, ['a', 'a'], Test.Pass>(),
    check<F.ValidPath<O_VALIDPATH, ['a', 'x']>, ['a', 'x'], Test.Pass>(),
    check<F.ValidPath<O_VALIDPATH, ['b', 'a', 'a']>, ['b', 'a', 'a'], Test.Pass>(),
    check<F.ValidPath<O_VALIDPATH, ['b', 'b', 0]>, ['b', 'b', 0], Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LENGTH

checks([
    check<F.Length<typeof fn>, 3, Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any>, 1 | 2, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NARROW

declare function narrowList<A extends any[]>(x: F.Narrow<A>): A;
declare function narrowObject<A extends object>(x: F.Narrow<A>): A;

const test05 = narrowList(['e', 2, true, {f: ['g', ['h']]}])
const test06 = narrowObject({a: 1, b: 'c', d: ['e', 2, true, {f: ['g']}]})

checks([
    check<typeof test05, ['e', 2, true, {f: ['g', ['h']]}], Test.Pass>(),
    check<typeof test06, {a: 1, b: 'c', d: ['e', 2, true, {f: ['g']}]}, Test.Pass>(),
])

const narrow = <T>(thing: Narrow<T>) => thing

interface Foo {
    bar: {hi: 'there'}
}

class Bar implements Foo {
    bar = narrow({hi: 'there'})
}

type Co<V> = () => Narrow<V>;
function covariance<U, T extends U>(t: Narrow<T>, u: Narrow<U>, coT: Co<T>, coU: Co<U>) {
    u = t
    // @ts-expect-error
    t = u

    coU = coT
    // @ts-expect-error
    coT = coU
}

type Contra<V> = (v: Narrow<V>) => void;
function contravariance<U, T extends U>(t: Narrow<T>, u: Narrow<U>, contraT: Contra<T>, contraU: Contra<U>) {
    u = t
    // @ts-expect-error
    t = u

    // @ts-expect-error
    contraU = contraT
    contraT = contraU
}

type In<V> = (v: Narrow<V>) => Narrow<V>;
function invariance<U, T extends U>(t: Narrow<T>, u: Narrow<U>, inT: In<T>, inU: In<U>) {
    u = t
    // @ts-expect-error
    t = u

    // @ts-expect-error
    inU = inT
    // @ts-expect-error
    inT = inU
}

type Bi<V> = { foo(v: Narrow<V>): void };
function bivariance<U, T extends U>(t: Narrow<T>, u: Narrow<U>, biT: Bi<T>, biU: Bi<U>) {
    u = t
    // @ts-expect-error
    t = u

    biU = biT
    biT = biU
}

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

pipeSync(
    curry((a1: number, d2:  number) => `${a1 + d2}`),
    (b1: string) => [b1],
    (c1: string[]) => [c1],
)(23, 42)

checks([
    check<(typeof pipedSync), (name: string, age: number) => boolean, Test.Pass>(),
])

// async ---------------------------------------------------------------------------------

declare const pipeAsync: F.Pipe<'async'>

const pipedAsync = pipeAsync(
    (name: string, age: number) => ({name, age}), // receive parameters
    async <T>(generic: T) => generic, // receive previous return
    // @ts-ignore
    async (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    // @ts-ignore
    (message: string) => false, // receive previous return
)

pipeAsync(
    curry((a1: number, d2:  number) => `${a1 + d2}`),
    (b1: string) => [b1],
    (c1: string[]) => [c1],
)(23, 42)

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
