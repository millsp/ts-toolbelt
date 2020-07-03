import {Test, T, A} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// LIST /////////////////////////////////////////////////////////////////////////////////

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

type T1 = [
    1,
    2,
    '3',
    'xxxx',
    string,
    number,
    number & {},
    object,
    readonly [0, 1, 2?, 3?],
    {a: never},
    'xxxx'?
];

// ---------------------------------------------------------------------------------------
// APPEND

checks([
    check<T.Append<[0, 1, 2, 3], 4>,        [0, 1, 2, 3, 4],        Test.Pass>(),
    check<T.Append<[0, 1, 2, 3], [4, 5]>,   [0, 1, 2, 3, [4, 5]],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ASSIGN

checks([
    check<T.Assign<[1], [[2, 1], [3, 2?]]>,     [3, 2 | undefined],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ASSIGNUP

checks([
    check<T.AssignUp<[1], [[2, 1], [3, 2?]]>,   [3, 2 | 1],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// AT

checks([
    check<T.At<T, '1'>,             2,              Test.Pass>(),
    check<T.At<T, '3'>,             'xxxx',         Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ATLEAST

type T_ATLEAST = [
    0,
    1,
    2
] | [
    3,
    4,
    5,
    6
]

type ATLEAST_T_013 =
    | [0, 1, 2]
    | [0, 1 | undefined, 2 | undefined]
    | [0 | undefined, 1, 2 | undefined]
    | [3, 4 | undefined, 5 | undefined, 6 | undefined]
    | [3 | undefined, 4, 5 | undefined, 6 | undefined]
    | [3 | undefined, 4 | undefined, 5 | undefined, 6];

checks([
    check<T.AtLeast<T_ATLEAST, '0' | '1' | '3'>,    ATLEAST_T_013,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPACT

checks([
    check<T.Compact<[1], [[2, 1], [3, 2?]]>,        [1, 1],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPACTUP

checks([
    check<T.CompactUp<[1], [[2, 1?], [3, 2?]]>,     [1, 1 | 2 | undefined],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPULSORY

// No test needed (same as O.Compulsory)

// ---------------------------------------------------------------------------------------
// COMPULSORYKEYS

// No test needed (same as O.CompulsoryKeys)

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
    check<T.Diff<[1, 2, 3], [4, 5, 6], 'default'>,          [],             Test.Pass>(),
    check<T.Diff<[1, 2, 3], [4, number, 6], 'extends->'>,   [1, number, 3], Test.Pass>(),
    check<T.Diff<[1, 2, 3], [4, 5, 6, 7], 'equals'>,        [1, 2, 3, 7],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// DROP

checks([
    check<T.Drop<[1, 2, 3, 4], '10', '->'>, [],     Test.Pass>(),
    check<T.Drop<[1, 2, 3, 4], '2', '->'>,  [3, 4], Test.Pass>(),
    check<T.Drop<[1, 2, 3, 4], '2', '<-'>,  [1, 2], Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EITHER

type T_EITHER = [
    0,
    1,
    2
]

type EITHER_T_01 = [0, undefined, 2] | [undefined, 1, 2];

checks([
    check<T.Either<T_EITHER, '0' | '1'>,    EITHER_T_01,    Test.Pass>(),
])

// -------------------------------------------------------------------------------------
// EXCLUDE

checks([
    check<T.Exclude<[1, 2, 3, 4], [0, 0, 0], 'default'>,            [4],            Test.Pass>(),
    check<T.Exclude<[1, 2, 3, 4], [1, 0, 0], 'equals'>,             [2, 3, 4],      Test.Pass>(),
    check<T.Exclude<[1, 2, 3, 4], [1, string, 3], 'extends->'>,     [2, 4],         Test.Pass>(),
    check<T.Exclude<[1, number, 3, 4], [1, 2, 3], 'extends->'>,     [number, 4],    Test.Pass>(),
])

// -------------------------------------------------------------------------------------
// EXCLUDEKEYS

checks([
    check<T.ExcludeKeys<[1, 2, 3, 4], [0, 0, 0], 'default'>,        '3',                Test.Pass>(),
    check<T.ExcludeKeys<[1, 2, 3, 4], [1, 0, 0], 'equals'>,         '1' | '2' | '3',    Test.Pass>(),
    check<T.ExcludeKeys<[1, 2, 3, 4], [1, string, 3], 'extends->'>,   '1' | '3',          Test.Pass>(),
    check<T.ExcludeKeys<[1, number, 3, 4], [1, 2, 3], 'extends->'>,   '1' | '3',          Test.Pass>(),
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
    'xxxx',
    {a: 'a'} & {b: 'b'},
    string | number,
    object,
    readonly [
        0,
        1,
        2?,
    ],
    'xxxx' | undefined
];

type FILTER_T_NUMBER_EQUALS = [
    1,
    2,
    '3' | undefined,
    'xxxx',
    {a: 'a'} & {b: 'b'},
    string | number,
    object,
    readonly [0, 1, 2?],
    'xxxx' | undefined
];

checks([
    check<T.Filter<T, number, 'default'>,   FILTER_T_NUMBER_EXTENDS,     Test.Pass>(),
    check<T.Filter<T, number, 'extends->'>, FILTER_T_NUMBER_EXTENDS,     Test.Pass>(),
    check<T.Filter<T, number, 'equals'>,    FILTER_T_NUMBER_EQUALS,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// FILTERKEYS

// No test needed (same as O.FilterKeys)

// ---------------------------------------------------------------------------------------
// FLATTEN

type T_FLATTEN = [1, 12, [2, [3, [4, [5, [6, [7, [8, [9, 92?]]]]]]]]]
type FLATTEN_T = [1, 12, 2, 3, 4, 5, 6, 7, 8, 9, 92] | [1, 12, 2, 3, 4, 5, 6, 7, 8, 9, undefined];

checks([
    check<T.Flatten<any>,                   any[],                      Test.Pass>(),
    check<T.Flatten<any[]>,                 any[],                      Test.Pass>(),
    check<T.Flatten<T_FLATTEN>,             FLATTEN_T,                  Test.Pass>(),
    check<T.Flatten<[1, 2, 42]>,            [1, 2, 42],                 Test.Pass>(),
    check<T.Flatten<[1, 2?]>,               [1, undefined] | [1, 2],    Test.Pass>(),
    check<T.Flatten<readonly [1, 2, 42]>,   [1, 2, 42],                 Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// GROUP

type T_GROUP = [1, 2, 3, 4, 5, 6, 7, 8]

type GROUP_T_1 = [[1], [2], [3], [4], [5], [6], [7], [8]]
type GROUP_T_2 = [[1, 2], [3, 4], [5, 6], [7, 8]]
type GROUP_T_3 = [[1, 2, 3], [4, 5, 6], [7, 8, undefined]];

checks([
    check<T.Group<T_GROUP, '1'>,    GROUP_T_1,  Test.Pass>(),
    check<T.Group<T_GROUP, '2'>,    GROUP_T_2,  Test.Pass>(),
    check<T.Group<T_GROUP, '3'>,    GROUP_T_3,  Test.Pass>(),
    check<T.Group<[], '3'>,         [],         Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// HAS

// No test needed (same as O.Has)

// ---------------------------------------------------------------------------------------
// HASPATH

// No test needed (same as O.HasPath)

// ---------------------------------------------------------------------------------------
// HEAD

checks([
    check<T.Head<T>,        1,      Test.Pass>(),
    check<T.Head<any>,      any,    Test.Pass>(),
    check<T.Head<never>,    never,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INCLUDES

// No test needed (same as O.Includes)

// ---------------------------------------------------------------------------------------
// INTERSECT

type INTERSECT_T_T1_NUMBER_DEFAULT = [
    1,
    2,
    '3' | undefined,
    'xxxx',
    {a: 'a'} & {b: 'b'},
    string | number,
    number,
    object,
    readonly [0, 1, 2?],
    'xxxx' | undefined
]

type INTERSECT_T_T1_NUMBER_EXTENDS = [
    1,
    2,
    '3' | undefined,
    'xxxx',
    number | string,
    number,
    object,
    readonly [0, 1, 2?]
]

type INTERSECT_T_T1_NUMBER_EQUALS = [
    1,
    2,
    'xxxx',
    object,
];

checks([
    check<T.Intersect<T, T1, 'default'>,    INTERSECT_T_T1_NUMBER_DEFAULT,  Test.Pass>(),
    check<T.Intersect<T, T1, 'extends->'>,  INTERSECT_T_T1_NUMBER_EXTENDS,  Test.Pass>(),
    check<T.Intersect<T, T1, 'equals'>,     INTERSECT_T_T1_NUMBER_EQUALS,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INTERSECTKEYS

// No test needed (same as O.IntersectKeys)

// ---------------------------------------------------------------------------------------
// KEYS

type KEYS_T = number | '3' | '0' | '1' | '2' | '4' | '5' | '6' | '7' | '8' | '9';

checks([
    check<T.Keys<T>,    KEYS_T,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// KEYSET

checks([
    check<T.KeySet<'1', '6'>,   '1' | '2' | '3' | '4' | '5' | '6',  Test.Pass>(),
    check<T.KeySet<'-5', '-2'>, '-5' | '-4' | '-3' | '-2',          Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LAST

checks([
    check<T.Last<T>,    'xxxx' | readonly [0, 1, 2?] | undefined,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LASTINDEX

checks([
    check<T.LastIndex<[0, 1, 2?]>,  1 | 2,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LENGTH

checks([
    check<T.Length<[0, 1, 2?], 'n'>,    2 | 3,      Test.Pass>(),
    check<T.Length<[0, 1, 2?], 's'>,    '2' | '3',  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LONGEST

checks([
    check<T.Longest<T, T1>,     T1,     Test.Pass>(),
    check<T.Longest<T1, T>,     T1,     Test.Pass>(),
    check<T.Longest<[0], [1]>,  [0],    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MERGE

checks([
    check<T.Merge<[0],  [1, 2, 3?]>,                    [0, 2, 3 | undefined],  Test.Pass>(),
    check<T.Merge<[0],  [1, 2, 3]>,                     [0, 2, 3],              Test.Pass>(),
    check<T.Merge<[0?], [1, 2, 3]>,                     [2, 3?],                Test.Fail>(),
    check<T.Merge<[1, 2, 3?], [0, 0, 0]>,               [1, 2, 3 | undefined],  Test.Pass>(),
    check<T.Merge<[0, [1]],  [1, [2, 3], 4], 'deep'>,   [0, [1, 3], 4],         Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MERGEKEYS

// No test needed (same as O.MergeKeys)

// ---------------------------------------------------------------------------------------
// MODIFY

checks([
    check<T.Modify<[9, string], [9, A.x?]>, [9, string?],   Test.Pass>(),
    check<T.Modify<[], [9, A.x]>,           [9, never],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NONNULLABLE

checks([
    check<T.NonNullable<[0 | undefined, 1, 2 | undefined]>,         [0, 1, 2],              Test.Pass>(),
    check<T.NonNullable<[0 | undefined, 1, 2 | undefined], '2'>,    [0 | undefined, 1, 2],  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NONNULLABLEKEYS

// No test needed (same as O.NonNullableKeys)

// ---------------------------------------------------------------------------------------
// NULLABLE

checks([
    check<T.Nullable<[0, 1, 2]>,        [0 | undefined | null, 1 | undefined | null, 2 | undefined | null],     Test.Pass>(),
    check<T.Nullable<[0, 1, 2], '2'>,   [0, 1, 2 | undefined | null],                                           Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NULLABLEKEYS

// No test needed (same as O.NonNullableKeys)

// ---------------------------------------------------------------------------------------
// OBJECTOF

checks([
    check<T.ObjectOf<readonly [0]>,         {readonly 0: 0},        Test.Pass>(),
    check<T.ObjectOf<[0, 1, 2]>,            {0: 0, 1: 1, 2: 2},     Test.Pass>(),
    check<T.ObjectOf<[0, 1, 2?]>,           {0: 0, 1: 1, 2?: 2},    Test.Pass>(),
    check<T.ObjectOf<([1] | {a: 1})>,       {0: 1} | {a: 1},        Test.Pass>(),
    check<T.ObjectOf<(1[] & {a: 1})>,       {[k: number]: 1, a: 1}, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OMIT

checks([
    check<T.Omit<[0, 1, 2?], '0'>,          [1, 2 | undefined],     Test.Pass>(),
    check<T.Omit<[0, 1, 2?], '1' | '2'>,    [0],                    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OPTIONAL

checks([
    check<T.Optional<[0, 1, 2]>,    [0?, 1?, 2?],   Test.Pass>(),
    check<T.Optional<[0, 1, 2?]>,   [0?, 1?, 2?],   Test.Pass>(),
    check<T.Optional<never>,        never,          Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OPTIONALKEYS

// No test needed (same as O.OptionalKeys)

// ---------------------------------------------------------------------------------------
// OVERWRITE

// No test needed (same as O.Overwrite)

// ---------------------------------------------------------------------------------------
// PATH

// No test needed (same as O.Path)

// ---------------------------------------------------------------------------------------
// PATHS

// No test needed (same as O.Paths)

// ---------------------------------------------------------------------------------------
// PATHUP

// No test needed (same as O.PathUp)

// ---------------------------------------------------------------------------------------
// PATHVALID

// No test needed (same as O.PathValid)

// ---------------------------------------------------------------------------------------
// PICK

checks([
    check<T.Pick<[0, 1, 2], '0'>,           [0],                    Test.Pass>(),
    check<T.Pick<[0, 1, 2?], '1' | '2'>,    [1, 2 | undefined],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// POP

checks([
    check<T.Pop<[1, 2, 3]>,     [1, 2],                 Test.Pass>(),
    check<T.Pop<[1, 2?, 3?]>,   [1, 2 | undefined],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PREPEND

checks([
    check<T.Prepend<[0, 1, 2, 3?], 4>,      [4, 0, 1, 2, 3?],       Test.Pass>(),
    check<T.Prepend<[0, 1, 2, 3], [4, 5?]>, [[4, 5?], 0, 1, 2, 3],  Test.Pass>(),
    // check<T.Prepend<never, [4, 5]>,         never,                  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// READONLY

checks([
    check<T.Readonly<[0, 1, 2]>,    readonly [0, 1, 2],     Test.Pass>(),
    check<T.Readonly<[0, 1, 2?]>,   readonly [0, 1, 2?],    Test.Pass>(),
    check<T.Readonly<never>,        never,                  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// READONLYKEYS

// No test needed (same as O.ReadonlyKeys)

// ---------------------------------------------------------------------------------------
// REMOVE

checks([
    check<T.Remove<[0, 1, 2], '1', '1'>,    [0, 2],             Test.Pass>(),
    check<T.Remove<[0, 1, 2?], '1', '1'>,   [0, 2 | undefined], Test.Pass>(),
    check<T.Remove<[0, 1, 2], '0', '2'>,    [],                 Test.Pass>(),
    check<T.Remove<[0, 1, 2?], '-1', '10'>, [],                 Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REPEAT

checks([
    check<T.Repeat<1, '3'>,     [1, 1, 1],  Test.Pass>(),
    check<T.Repeat<1, never>,   never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REPLACE

// No test needed (same as O.Replace)

// ---------------------------------------------------------------------------------------
// REQUIRED

checks([
    check<T.Required<[0, 1, 2?]>,   [0, 1, 2],  Test.Pass>(),
    check<T.Required<[0, 1?, 2?]>,  [0, 1, 2],  Test.Pass>(),
    check<T.Required<[0, 1, 2]>,    [0, 1, 2],  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REVERSE

checks([
    check<T.Reverse<[1, 2, 3]>,     [3, 2, 1],              Test.Pass>(),
    check<T.Reverse<[1, 2, 3?]>,    [3 | undefined, 2, 1],  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SELECT

type SELECT_T_NUMBER_EXTENDS = [
    1,
    2,
    string | number,
    number
]

type SELECT_T_NUMBER_EQUALS = [
    number
];

checks([
    check<T.Select<T, number, 'default'>,    SELECT_T_NUMBER_EXTENDS,     Test.Pass>(),
    check<T.Select<T, number, 'extends->'>,  SELECT_T_NUMBER_EXTENDS,     Test.Pass>(),
    check<T.Select<T, number, 'equals'>,     SELECT_T_NUMBER_EQUALS,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SELECTKEYS

// No test needed (same as O.SelectKeys)

// ---------------------------------------------------------------------------------------
// SHORTEST

checks([
    check<T.Shortest<T, T1>,        T,      Test.Pass>(),
    check<T.Shortest<T1, T>,        T,      Test.Pass>(),
    check<T.Shortest<[0], [1]>,     [0],    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TAIL

checks([
    check<T.Tail<[1, 2, 3?, 4?]>,   [2, 3?, 4?],    Test.Pass>(),
    check<T.Tail<[]>,               [],             Test.Pass>(),
    // check<T.Tail<never>,            never,          Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TAKE

checks([
    check<T.Take<[1, 2, 3?, 4?], '2', '->'>,    [1, 2],                             Test.Pass>(),
    check<T.Take<[1, 2, 3?, 4?], '2', '<-'>,    [3 | undefined, 4 | undefined],     Test.Pass>(), // nothing happens
    check<T.Take<[1, 2, 3, 4], '2', '<-'>,      [3, 4],                             Test.Pass>(), // nothing happens
])

// ---------------------------------------------------------------------------------------
// TUPLE

// Cannot be tested

// ---------------------------------------------------------------------------------------
// UNDEFINABLE

checks([
    check<T.Undefinable<[0, 1, 2]>,        [0 | undefined, 1 | undefined, 2 | undefined],  Test.Pass>(),
    check<T.Undefinable<[0, 1, 2], '2'>,   [0, 1, 2 | undefined],                          Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNDEFINABLEKEYS

// No test needed (same as O.UndefinableKeys)

// ---------------------------------------------------------------------------------------
// LIST

checks([
    check<T.List<string>,  readonly string[],   Test.Pass>(),
    check<T.List<never>,   readonly never[],    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNIONIZE

checks([
    check<T.Unionize<[2], string[]>,    [2 | string],           Test.Pass>(),
    check<T.Unionize<string[], [2]>,    Array<string | 2>,      Test.Pass>(),
    check<T.Unionize<[1], [2, 3]>,      [1 | 2],                Test.Pass>(),
])

// --------------------------------------------------------------------------------?-------
// UNIONOF

checks([
    check<T.UnionOf<[1, 2, 3?]>,    1 | 2 | 3 | undefined,      Test.Pass>(),
    check<T.UnionOf<[]>,            never,                      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNNEST


checks([
    check<T.UnNest<[[1], [2],   [3, [4]]]>,     [1, 2, 3, [4]],         Test.Pass>(),
    check<T.UnNest<number[][][] | number[]>,    number[][] | number[],  Test.Pass>(),
    check<T.UnNest<any>,                        any[],                  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UPDATE

checks([
    check<T.Update<string[], '1', 2>,   Array<(string | 2)>,    Test.Pass>(),
    check<T.Update<[], '1', 2>,         [undefined, 2],         Test.Pass>(),
    check<T.Update<[1], '2', 2>,        [1, undefined, 2],      Test.Pass>(),
    check<T.Update<[1?], 0,  2>,        [2],                    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// WRITABLE

type WRITABLE_W_T_ARR = ['a', 'b']
type WRITABLE_R_T_ARR = readonly ['a', 'b']

checks([
    check<T.Writable<WRITABLE_W_T_ARR>,  WRITABLE_W_T_ARR,    Test.Pass>(),
    check<T.Writable<WRITABLE_R_T_ARR>,  WRITABLE_W_T_ARR,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// WRITABLEKEYS

// No test needed (same as O.WritableKeys)

// ---------------------------------------------------------------------------------------
// ZIP

checks([
    check<T.Zip<['a', 'b', 'c'], [1, 2, 3, 4]>,     [['a', 1], ['b', 2], ['c', 3]],                             Test.Pass>(),
    check<T.Zip<['a', 'b', 'c'], []>,               [['a', undefined], ['b', undefined], ['c', undefined]],     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ZIPOBJ

checks([
    check<T.ZipObj<['a', 'b', 'c'], [1, 2, 3, 4]>,     {a: 1, b: 2, c: 3},                             Test.Pass>(),
    check<T.ZipObj<['a', 'b', 'c'], []>,               {a: undefined, b: undefined, c: undefined},     Test.Pass>(),
])
