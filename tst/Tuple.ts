import {Test, T} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// TUPLE /////////////////////////////////////////////////////////////////////////////////

type T = [
    1,
    2,
    '3' | undefined,
    {a: T},
    'xxxx',
    string & number,
    string | number,
    number,
    object,
    {b?: T},
    readonly [
        0,
        1,
        2?,
    ]
];

// ---------------------------------------------------------------------------------------
// APPEND

checks([
    check<T.Append<[0, 1, 2, 3], 4>,        [0, 1, 2, 3, 4],        Test.Pass>(),
    check<T.Append<[0, 1, 2, 3], [4, 5]>,   [0, 1, 2, 3, [4, 5]],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// AT

checks([
    check<T.At<T, '1'>,             2,              Test.Pass>(),
    check<T.At<T, '4'>,             'xxxx',         Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CONCAT

checks([
    check<T.Concat<[1, 2, 3], [4, 5, 6]>,   [1, 2, 3, 4, 5, 6],     Test.Pass>(),
    check<T.Concat<['1', '2', '3'], ['4']>, ['1', '2', '3', '4'],   Test.Pass>(),
    check<T.Concat<[1], number[]>,          [1, ...number[]],       Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// DIFF

checks([
    check<T.Diff<[1, 2, 3], [4, 5, 6], 'default'>,      [],             Test.Pass>(),
    check<T.Diff<[1, 2, 3], [4, number, 6], 'extends'>, [1, number, 3], Test.Pass>(),
    check<T.Diff<[1, 2, 3], [4, 5, 6, 7], 'equals'>,    [1, 2, 3, 7],   Test.Pass>(),
    check<T.Diff<[1, 2, 3], [4, 5, 6, 7], 'loose'>,     [1, 2, 3, 7],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// DROP

checks([
    check<T.Drop<[1, 2, 3, 4], '10', '->'>, [],     Test.Pass>(),
    check<T.Drop<[1, 2, 3, 4], '2', '->'>,  [3, 4], Test.Pass>(),
    check<T.Drop<[1, 2, 3, 4], '2', '<-'>,  [1, 2], Test.Pass>(),
])

// -------------------------------------------------------------------------------------
// EXCLUDE

checks([
    check<T.Exclude<[1, 2, 3, 4], [0, 0, 0], 'default'>,        [4],            Test.Pass>(),
    check<T.Exclude<[1, 2, 3, 4], [1, 0, 0], 'equals'>,         [2, 3, 4],      Test.Pass>(),
    check<T.Exclude<[1, 2, 3, 4], [1, string, 3], 'extends'>,   [2, 4],         Test.Pass>(),
    check<T.Exclude<[1, number, 3, 4], [1, 2, 3], 'extends'>,   [number, 4],    Test.Pass>(),
    check<T.Exclude<[1, number, 3, 4], [1, 2, 3], 'loose'>,     [4],            Test.Pass>(),
    check<T.Exclude<[1, 2, 3, 4], [1, number, 3], 'loose'>,     [4],            Test.Pass>(),
])

// -------------------------------------------------------------------------------------
// EXCLUDEKEYS

checks([
    check<T.ExcludeKeys<[1, 2, 3, 4], [0, 0, 0], 'default'>,        '3',                Test.Pass>(),
    check<T.ExcludeKeys<[1, 2, 3, 4], [1, 0, 0], 'equals'>,         '1' | '2' | '3',    Test.Pass>(),
    check<T.ExcludeKeys<[1, 2, 3, 4], [1, string, 3], 'extends'>,   '1' | '3',          Test.Pass>(),
    check<T.ExcludeKeys<[1, number, 3, 4], [1, 2, 3], 'extends'>,   '1' | '3',          Test.Pass>(),
    check<T.ExcludeKeys<[1, number, 3, 4], [1, 2, 3], 'loose'>,     '3',                Test.Pass>(),
    check<T.ExcludeKeys<[1, 2, 3, 4], [1, number, 3], 'loose'>,     '3',                Test.Pass>(),
])

// -------------------------------------------------------------------------------------
// EXTRACT

checks([
    check<T.Extract<[1, 2, 3, 4, 5], '1', '3'>,     [2, 3, 4],          Test.Pass>(),
    check<T.Extract<[1, 2, 3, 4, 5], '-1', '13'>,   [1, 2, 3, 4, 5],    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// FILTER

type FILTER_T_NUMBER_EXTENDS = [
    '3' | undefined,
    {a: T},
    'xxxx',
    string | number,
    object,
    {b?: T},
    readonly [
        0,
        1,
        2?,
    ]
];

type FILTER_T_NUMBER_ = [
    1,
    2,
    '3' | undefined,
    {a: T},
    'xxxx',
    string & number,
    string | number,
    number,
    object,
    {b?: T},
    readonly [
        0,
        1,
        2?,
    ]
];

// checks([
//     check<T.Filter<T, number, 'default'>,  FILTER_T_NUMBER_EXTENDS,    Test.Pass>(),
//     check<T.Filter<T, number, 'extends'>,  FILTER_T_NUMBER_EXTENDS,    Test.Pass>(),
//     check<T.Filter<T, number, ''>,  FILTER_T_NUMBER,    Test.Pass>(),
//     check<T.Filter<T, number, 'extends'>,  FILTER_T_NUMBER,    Test.Pass>(),
//     check<,,    Test.Pass>(),
// ])

// // ---------------------------------------------------------------------------------------
// // BLANK

// checks([
//     check<,,    Test.Pass>(),
//     check<,,    Test.Pass>(),
// ])
