import {Test, A} from '../src/index'

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
// COMPUTE

// Cannot be tested

// ---------------------------------------------------------------------------------------
// EQUALS

checks([
    check<A.Equals<[0, 1], any>,            boolean,    Test.Pass>(),
    check<A.Equals<any, [0, 1]>,            boolean,    Test.Pass>(),
    check<A.Equals<any, [0, 1]>,            boolean,    Test.Pass>(),
    check<A.Equals<0, 0>,                   true,       Test.Pass>(),
    check<A.Equals<0, 1>,                   false,      Test.Pass>(),
    check<A.Equals<0, number>,              false,      Test.Pass>(),
    check<A.Equals<any, string>,            boolean,    Test.Pass>(),
    check<A.Equals<string, any>,            boolean,    Test.Pass>(),
    check<A.Equals<{}, object>,             true,       Test.Pass>(),
    check<A.Equals<{a: any}, object>,       false,      Test.Pass>(),
    check<A.Equals<object, {a: any}>,       false,      Test.Pass>(),
    check<A.Equals<any[], Array<any>>,      true,       Test.Pass>(),
    check<A.Equals<'a' | 'b', 'b' | 'a'>,   true,       Test.Pass>(),
    check<A.Equals<'a', 'a'>,               true,       Test.Pass>(),
    check<A.Equals<true | false, boolean>,  true,       Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXTENDS

checks([
    check<A.Extends<any, any>,              true,       Test.Pass>(),
    check<A.Extends<[0, 1], any>,           true,       Test.Pass>(),
    check<A.Extends<any, [0, 1]>,           false,      Test.Fail>(),
    check<A.Extends<any, [0, 1]>,           boolean,    Test.Pass>(),
    check<A.Extends<0, 0>,                  true,       Test.Pass>(),
    check<A.Extends<0, 1>,                  false,      Test.Pass>(),
    check<A.Extends<0, number>,             true,       Test.Pass>(),
    check<A.Extends<any, string>,           boolean,    Test.Pass>(),
    check<A.Extends<string, any>,           true,       Test.Pass>(),
    check<A.Extends<{}, object>,            true,       Test.Pass>(),
    check<A.Extends<{a: any}, object>,      true,       Test.Pass>(),
    check<A.Extends<object, {a: any}>,      false,      Test.Pass>(),
    check<A.Extends<any[], Array<any>>,     true,       Test.Pass>(),
    check<A.Extends<'a' | 'b', 'b' | 'a'>,  true,       Test.Pass>(),
    check<A.Extends<'a', 'a'>,              true,       Test.Pass>(),
    check<A.Extends<never, never>,          false,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// IS

checks([
    check<A.Is<'xxxx', string, 'extends'>,  true,   Test.Pass>(),
    check<A.Is<string, 'xxxx', 'extends'>,  false,  Test.Pass>(),

    check<A.Is<'xxxx', string, 'equals'>,   false,  Test.Pass>(),
    check<A.Is<string, 'xxxx', 'equals'>,   false,  Test.Pass>(),

    check<A.Is<'xxxx', string, 'loose'>,    true,   Test.Pass>(),
    check<A.Is<string, 'xxxx', 'loose'>,    true,   Test.Pass>(),

    check<A.Is<string, string | number, 'extends'>, true,       Test.Pass>(),
    check<A.Is<string | number, string, 'extends'>, boolean,    Test.Pass>(),

    check<A.Is<string, string | number, 'equals'>,  false,  Test.Pass>(),
    check<A.Is<string | number, string, 'equals'>,  false,  Test.Pass>(),

    check<A.Is<string, string | number, 'loose'>,   true,   Test.Pass>(),
    check<A.Is<string | number, string, 'loose'>,   true,   Test.Pass>(),
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

// Cannot be tested
