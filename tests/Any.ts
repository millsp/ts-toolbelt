import {Test, A} from '../sources'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// ANY ///////////////////////////////////////////////////////////////////////////////////

type O = {
    a: string,
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    j: 'a' | undefined;
    k: {a: {b: string}};
    x: () => 1;
};

type T = [
    1,
    2,
    '3' | undefined,
    'xxxx',
    {a: 'a'} & {b: 'b'},
    string | number,
    number,
    object,
    readonly [0, 1, 2?],
    'xxxx'?
];

// ---------------------------------------------------------------------------------------
// AT

checks([
    check<A.At<O, 'a'>, string, Test.Pass>(),
    check<A.At<O, 'c'>, {a: 'a'} & {b: 'b'}, Test.Pass>(),
    check<A.At<O, 'g'>, O, Test.Pass>(),
    check<A.At<T, '1'>, 2, Test.Pass>(),
    check<A.At<T, '3'>, 'xxxx', Test.Pass>(),
    check<A.At<{a: 1} | {b: 2}, 'a'>, 1 | undefined, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CAST

checks([
    check<A.Cast<[0, 1, 2], any>, [0, 1, 2], Test.Pass>(),
    check<A.Cast<{a: string}, {}>, {a: string}, Test.Pass>(),
    check<A.Cast<string, object>, object, Test.Pass>(),
    check<A.Cast<any, string>, any, Test.Pass>(),
    check<A.Cast<0, 42>, 42, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPUTE

// Cannot be tested

// ---------------------------------------------------------------------------------------
// CONTAINS

checks([
    check<A.Contains<any, any>, 1, Test.Pass>(),
    check<A.Contains<[0, 1], any>, 1, Test.Pass>(),
    check<A.Contains<any, [0, 1]>, 0, Test.Pass>(),
    check<A.Contains<any, [0, 1]>, 0, Test.Pass>(),
    check<A.Contains<0, 0>, 1, Test.Pass>(),
    check<A.Contains<0, 1>, 0, Test.Pass>(),
    check<A.Contains<0, number>, 1, Test.Pass>(),
    check<A.Contains<any, string>, 0, Test.Pass>(),
    check<A.Contains<string, any>, 1, Test.Pass>(),
    check<A.Contains<{}, object>, 1, Test.Pass>(),
    check<A.Contains<{a: any}, object>, 1, Test.Pass>(),
    check<A.Contains<object, {a: any}>, 0, Test.Pass>(),
    check<A.Contains<any[], Array<any>>, 1, Test.Pass>(),
    check<A.Contains<'a' | 'b', 'b' | 'a'>, 1, Test.Pass>(),
    check<A.Contains<'b', 'b' | 'a'>, 1, Test.Pass>(),
    check<A.Contains<'b' | 'a', 'b'>, 0, Test.Pass>(),
    check<A.Contains<'a', 'a'>, 1, Test.Pass>(),
    check<A.Contains<never, never>, 0, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EQUALS

checks([
    check<A.Equals<{}, {} | null>, 0, Test.Pass>(),
    check<A.Equals<[0, 1], any>, 0, Test.Pass>(),
    check<A.Equals<any, [0, 1]>, 0, Test.Pass>(),
    check<A.Equals<any, [0, 1]>, 0, Test.Pass>(),
    check<A.Equals<0, 0>, 1, Test.Pass>(),
    check<A.Equals<0, 1>, 0, Test.Pass>(),
    check<A.Equals<0, number>, 0, Test.Pass>(),
    check<A.Equals<any, string>, 0, Test.Pass>(),
    check<A.Equals<string, any>, 0, Test.Pass>(),
    check<A.Equals<{}, object>, 0, Test.Pass>(),
    check<A.Equals<{a: any}, object>, 0, Test.Pass>(),
    check<A.Equals<object, {a: any}>, 0, Test.Pass>(),
    check<A.Equals<any[], Array<any>>, 1, Test.Pass>(),
    check<A.Equals<'a' | 'b', 'b' | 'a'>, 1, Test.Pass>(),
    check<A.Equals<'a', 'a'>, 1, Test.Pass>(),
    check<A.Equals<1 | 0, 0 | 1>, 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXTENDS

checks([
    check<A.Extends<any, any>, 1, Test.Pass>(),
    check<A.Extends<[0, 1], any>, 1, Test.Pass>(),
    check<A.Extends<any, [0, 1]>, 0, Test.Fail>(),
    check<A.Extends<any, [0, 1]>, 0 | 1, Test.Pass>(),
    check<A.Extends<0, 0>, 1, Test.Pass>(),
    check<A.Extends<0, 1>, 0, Test.Pass>(),
    check<A.Extends<0, number>, 1, Test.Pass>(),
    check<A.Extends<any, string>, 0 | 1, Test.Pass>(),
    check<A.Extends<string, any>, 1, Test.Pass>(),
    check<A.Extends<{}, object>, 1, Test.Pass>(),
    check<A.Extends<{a: any}, object>, 1, Test.Pass>(),
    check<A.Extends<object, {a: any}>, 0, Test.Pass>(),
    check<A.Extends<any[], Array<any>>, 1, Test.Pass>(),
    check<A.Extends<'a' | 'b', 'b' | 'a'>, 1, Test.Pass>(),
    check<A.Extends<'b', 'b' | 'a'>, 1, Test.Pass>(),
    check<A.Extends<'b' | 'a', 'b'>, 0 | 1, Test.Pass>(),
    check<A.Extends<'a', 'a'>, 1, Test.Pass>(),
    check<A.Extends<never, never>, 0, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// KEY

// Cannot be tested

// ---------------------------------------------------------------------------------------
// KEYS

checks([
    check<A.Keys<O>, keyof O, Test.Pass>(),
    check<A.Keys<{a: 0} | {b: 0}>, 'a' | 'b', Test.Pass>(),
    check<(keyof ({a: 0} | {b: 0})), 'a' & 'b', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// KNOWNKEYS

checks([
    check<A.KnownKeys<T>, Exclude<A.Keys<T>, number>, Test.Pass>(),
    check<A.KnownKeys<string[]>, never, Test.Pass>(),
    check<A.KnownKeys<O>, keyof O, Test.Pass>(),
    check<A.KnownKeys<string[]>, never, Test.Pass>(),
    check<A.KnownKeys<{[k: string]: any} & {a: any}>, 'a', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// IS

checks([
    check<A.Is<'xxxx', string, 'extends->'>, 1, Test.Pass>(),
    check<A.Is<string, 'xxxx', 'extends->'>, 0, Test.Pass>(),

    check<A.Is<'xxxx', string, '<-extends'>, 0, Test.Pass>(),
    check<A.Is<string, 'xxxx', '<-extends'>, 1, Test.Pass>(),

    check<A.Is<string, string | number, 'extends->'>, 1, Test.Pass>(),
    check<A.Is<string | number, string, 'extends->'>, 0 | 1, Test.Pass>(),

    check<A.Is<string, string | number, '<-extends'>, 0 | 1, Test.Pass>(),
    check<A.Is<string | number, string, '<-extends'>, 1, Test.Pass>(),

    check<A.Is<string, string | number, '<-contains'>, 0, Test.Pass>(),
    check<A.Is<string | number, string, '<-contains'>, 1, Test.Pass>(),

    check<A.Is<string, string | number, 'contains->'>, 1, Test.Pass>(),
    check<A.Is<string | number, string, 'contains->'>, 0, Test.Pass>(),

    check<A.Is<'xxxx', string, 'equals'>, 0, Test.Pass>(),
    check<A.Is<string, 'xxxx', 'equals'>, 0, Test.Pass>(),

    check<A.Is<string, string | number, 'equals'>, 0, Test.Pass>(),
    check<A.Is<string | number, string, 'equals'>, 0, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PROMISE

checks([
    check<A.Promise<Promise<1>>, A.Promise<1>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// AWAIT

checks([
    check<A.Await<Promise<1>>, 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TRY

checks([
    check<A.Try<[0, 1, 2], any>, [0, 1, 2], Test.Pass>(),
    check<A.Try<{a: string}, {}>, {a: string}, Test.Pass>(),
    check<A.Try<string, object>, never, Test.Pass>(),
    check<A.Try<any, string>, any, Test.Pass>(),
    check<A.Try<0, 42, 'xxxx'>, 'xxxx', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TYPE

checks([
    check<A.Type<string, 'name'>, any, Test.Fail>(),
    check<A.Type<string, 'name'>, A.Type<string, 'other'>, Test.Fail>(),
    check<A.Type<string, 'name'>, A.Type<string, 'name'>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// X

// Cannot be tested // todo
