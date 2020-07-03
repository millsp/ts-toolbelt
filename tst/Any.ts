import {Test, A, O} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// ANY ///////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// CAST

checks([
    check<A.Cast<[0, 1, 2], any>,   [0, 1, 2],      Test.Pass>(),
    check<A.Cast<{a: string}, {}>,  {a: string},    Test.Pass>(),
    check<A.Cast<string, object>,   object,         Test.Pass>(),
    check<A.Cast<any, string>,      any,            Test.Pass>(),
    check<A.Cast<0, 42>,            42,             Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CLEAN

checks([
    check<A.Clean<{a: string}>,                         {a: string},                Test.Pass>(),
    check<A.Clean<A.Compute<{a: string} & number[]>>,   {a: string} & number[],     Test.Pass>(),
    check<A.Clean<[1, 2, 3]>,                           [1, 2, 3],                  Test.Pass>(),
    check<A.Clean<A.Compute<[1, 2, 3] & {a: 3}>>,       [1, 2, 3] & {a: 3},         Test.Pass>(),
    check<A.Clean<O.MergeUp<[1, 2], {a: 3}>>,           [1, 2] & {a: 3},            Test.Pass>(),
    check<A.Clean<O.MergeUp<number[], []>>,             number[],                   Test.Pass>(),
    check<A.Clean<O.MergeUp<string[], [1]>>,            Array<1 | string>,          Test.Pass>(),
    check<A.Clean<{length: 0}>,                         {length: 0},                Test.Pass>(),
    check<A.Clean<{[k: string]: string}>,               {[k: string]: string},      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPUTE

// Cannot be tested

// ---------------------------------------------------------------------------------------
// IMPLEMENTS

checks([
    check<A.Implements<any, any>,              1,     Test.Pass>(),
    check<A.Implements<[0, 1], any>,           1,     Test.Pass>(),
    check<A.Implements<any, [0, 1]>,           0,     Test.Pass>(),
    check<A.Implements<0, 0>,                  1,     Test.Pass>(),
    check<A.Implements<0, 1>,                  0,     Test.Pass>(),
    check<A.Implements<0, number>,             1,     Test.Pass>(),
    check<A.Implements<any, string>,           0,     Test.Pass>(),
    check<A.Implements<string, any>,           1,     Test.Pass>(),
    check<A.Implements<{}, object>,            1,     Test.Pass>(),
    check<A.Implements<{a: any}, object>,      1,     Test.Pass>(),
    check<A.Implements<{}, {a: any}>,          0,     Test.Pass>(),
    check<A.Implements<any[], Array<any>>,     1,     Test.Pass>(),
    check<A.Implements<'a' | 'b', 'b' | 'a'>,  1,     Test.Pass>(),
    check<A.Implements<'b', 'b' | 'a'>,        1,     Test.Pass>(),
    check<A.Implements<'b' | 'a', 'b'>,        0,     Test.Pass>(),
    check<A.Implements<'a', 'a'>,              1,     Test.Pass>(),
    check<A.Implements<never, never>,          0,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EQUALS

checks([
    check<A.Equals<{}, {} | null>,          0,      Test.Pass>(),
    check<A.Equals<[0, 1], any>,            0,      Test.Pass>(),
    check<A.Equals<any, [0, 1]>,            0,      Test.Pass>(),
    check<A.Equals<any, [0, 1]>,            0,      Test.Pass>(),
    check<A.Equals<0, 0>,                   1,      Test.Pass>(),
    check<A.Equals<0, 1>,                   0,      Test.Pass>(),
    check<A.Equals<0, number>,              0,      Test.Pass>(),
    check<A.Equals<any, string>,            0,      Test.Pass>(),
    check<A.Equals<string, any>,            0,      Test.Pass>(),
    check<A.Equals<{}, object>,             0,      Test.Pass>(),
    check<A.Equals<{a: any}, object>,       0,      Test.Pass>(),
    check<A.Equals<object, {a: any}>,       0,      Test.Pass>(),
    check<A.Equals<any[], Array<any>>,      1,      Test.Pass>(),
    check<A.Equals<'a' | 'b', 'b' | 'a'>,   1,      Test.Pass>(),
    check<A.Equals<'a', 'a'>,               1,      Test.Pass>(),
    check<A.Equals<1 | 0, 0 | 1>,           1,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXTENDS

checks([
    check<A.Extends<any, any>,              1,          Test.Pass>(),
    check<A.Extends<[0, 1], any>,           1,          Test.Pass>(),
    check<A.Extends<any, [0, 1]>,           0,          Test.Fail>(),
    check<A.Extends<any, [0, 1]>,           0 | 1,      Test.Pass>(),
    check<A.Extends<0, 0>,                  1,          Test.Pass>(),
    check<A.Extends<0, 1>,                  0,          Test.Pass>(),
    check<A.Extends<0, number>,             1,          Test.Pass>(),
    check<A.Extends<any, string>,           0 | 1,      Test.Pass>(),
    check<A.Extends<string, any>,           1,          Test.Pass>(),
    check<A.Extends<{}, object>,            1,          Test.Pass>(),
    check<A.Extends<{a: any}, object>,      1,          Test.Pass>(),
    check<A.Extends<object, {a: any}>,      0,          Test.Pass>(),
    check<A.Extends<any[], Array<any>>,     1,          Test.Pass>(),
    check<A.Extends<'a' | 'b', 'b' | 'a'>,  1,          Test.Pass>(),
    check<A.Extends<'b', 'b' | 'a'>,        1,          Test.Pass>(),
    check<A.Extends<'b' | 'a', 'b'>,        0 | 1,      Test.Pass>(),
    check<A.Extends<'a', 'a'>,              1,          Test.Pass>(),
    check<A.Extends<never, never>,          0,          Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// IMPLEMENTS

checks([
    check<A.Implements<any, any>,              1,           Test.Pass>(),
    check<A.Implements<[0, 1], any>,           1,           Test.Pass>(),
    check<A.Implements<any, [0, 1]>,           0,           Test.Pass>(),
    check<A.Implements<any, [0, 1]>,           0,           Test.Pass>(),
    check<A.Implements<0, 0>,                  1,           Test.Pass>(),
    check<A.Implements<0, 1>,                  0,           Test.Pass>(),
    check<A.Implements<0, number>,             1,           Test.Pass>(),
    check<A.Implements<any, string>,           0,           Test.Pass>(),
    check<A.Implements<string, any>,           1,           Test.Pass>(),
    check<A.Implements<{}, object>,            1,           Test.Pass>(),
    check<A.Implements<{a: any}, object>,      1,           Test.Pass>(),
    check<A.Implements<object, {a: any}>,      0,           Test.Pass>(),
    check<A.Implements<any[], Array<any>>,     1,           Test.Pass>(),
    check<A.Implements<'a' | 'b', 'b' | 'a'>,  1,           Test.Pass>(),
    check<A.Implements<'b', 'b' | 'a'>,        1,           Test.Pass>(),
    check<A.Implements<'b' | 'a', 'b'>,        0,           Test.Pass>(),
    check<A.Implements<'a', 'a'>,              1,           Test.Pass>(),
    check<A.Implements<never, never>,          0,           Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// KEY

// Cannot be tested

// ---------------------------------------------------------------------------------------
// IS

checks([
    check<A.Is<'xxxx', string, 'extends->'>,    1,  Test.Pass>(),
    check<A.Is<string, 'xxxx', 'extends->'>,    0,  Test.Pass>(),

    check<A.Is<'xxxx', string, '<-extends'>,    0,  Test.Pass>(),
    check<A.Is<string, 'xxxx', '<-extends'>,    1,  Test.Pass>(),

    check<A.Is<'xxxx', string, 'implements->'>,   1,  Test.Pass>(),
    check<A.Is<string, 'xxxx', 'implements->'>,   0,  Test.Pass>(),

    check<A.Is<'xxxx', string, '<-implements'>,   0,  Test.Pass>(),
    check<A.Is<string, 'xxxx', '<-implements'>,   1,  Test.Pass>(),

    check<A.Is<string, string | number, 'extends->'>,   1,      Test.Pass>(),
    check<A.Is<string | number, string, 'extends->'>,   0 | 1,  Test.Pass>(),

    check<A.Is<string, string | number, '<-extends'>,   0 | 1,  Test.Pass>(),
    check<A.Is<string | number, string, '<-extends'>,   1,      Test.Pass>(),

    check<A.Is<string, string | number, 'implements->'>,    1,      Test.Pass>(),
    check<A.Is<string | number, string, 'implements->'>,    0,      Test.Pass>(),

    check<A.Is<string, string | number, '<-implements'>,    0,      Test.Pass>(),
    check<A.Is<string | number, string, '<-implements'>,    1,      Test.Pass>(),

    check<A.Is<'xxxx', string, 'equals'>,           0,  Test.Pass>(),
    check<A.Is<string, 'xxxx', 'equals'>,           0,  Test.Pass>(),

    check<A.Is<string, string | number, 'equals'>,  0,  Test.Pass>(),
    check<A.Is<string | number, string, 'equals'>,  0,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISLITERAL

checks([
    check<A.IsLiteral<1 | 2>,               1,      Test.Pass>(),
    check<A.IsLiteral<1 | '2'>,             0 | 1,  Test.Pass>(),
    check<A.IsLiteral<'x', string>,         1,      Test.Pass>(),
    check<A.IsLiteral<1 | 'x', number>,     0 | 1,  Test.Pass>(),
    check<A.IsLiteral<number, number>,      0,      Test.Pass>(),
    check<A.IsLiteral<string, string>,      0,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// KIND

checks([
    check<A.Kind<'..'>,         'string',       Test.Pass>(),
    check<A.Kind<1>,            'number',       Test.Pass>(),
    check<A.Kind<() => 1>,      'function',     Test.Pass>(),
    check<A.Kind<[0, 1, 2]>,    'array',        Test.Pass>(),
    check<A.Kind<{a: 1}>,       'object',       Test.Pass>(),
    check<A.Kind<true>,         'boolean',      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OMIT

type U_OMIT    = {t: 'a'; o: string} | {t: 'b'; o: number} | [1, 2] | 42
type OMIT_U_O0 = {t: 'a'} | {t: 'b'} | [2] | 42;

checks([
    check<A.Omit<U_OMIT, 'o' | '0'>,    OMIT_U_O0,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PICK

type U_PICK    = {t: 'a'; o: string} | {t: 'b'; o: number} | [1, 2] | 42
type PICK_U_t1 = {t: 'a'} | {t: 'b'} | [2] | 42;

checks([
    check<A.Pick<U_PICK, 't' | '1'>,    PICK_U_t1,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PROMISABLE

checks([
    check<A.Promisable<42>,     42 | Promise<42>,       Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PROMISE

checks([
    check<A.Promise<Promise<1>>,  A.Promise<1>,  Test.Pass>(),
])


// ---------------------------------------------------------------------------------------
// TRY

checks([
    check<A.Try<[0, 1, 2], any>,    [0, 1, 2],      Test.Pass>(),
    check<A.Try<{a: string}, {}>,   {a: string},    Test.Pass>(),
    check<A.Try<string, object>,    never,          Test.Pass>(),
    check<A.Try<any, string>,       any,            Test.Pass>(),
    check<A.Try<0, 42, 'xxxx'>,     'xxxx',         Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TYPE

checks([
    check<A.Type<string, 'name'>,   any,                        Test.Fail>(),
    check<A.Type<string, 'name'>,   A.Type<string, 'other'>,    Test.Fail>(),
    check<A.Type<string, 'name'>,   A.Type<string, 'name'>,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// X

// Cannot be tested // todo
