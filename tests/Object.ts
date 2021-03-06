import {Test, O, A, T, U, M, F, S} from '../sources'
import {Key} from '../sources/Any/Key'
import {OptionalDeep} from '../sources/Object/Optional'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// OBJECT ////////////////////////////////////////////////////////////////////////////////

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

type O1 = {
    a: string | number;
    b: object;
    c: {a: 'a'} & {b: 'b'};
    d?: never;
    readonly e?: 'string1';
    readonly f: 0;
    g: {};
    h: never;
    i: {a: string};
    j: 'a' | undefined;
    k: {a: {b: string, c: 0}};
    l: [1, 2, 3];
};

// ---------------------------------------------------------------------------------------
// ASSIGN

type O_ASSIGN = {readonly a: 1, c: 2};
type Os_ASSIGN = [{a: 2, readonly b: 1}, {a: 3, c?: 1}];

type ASSIGN_O_Os = {readonly a: 3, readonly b: 1, c: 1 | 2};

checks([
    check<O.Assign<O_ASSIGN, Os_ASSIGN>, ASSIGN_O_Os, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ATLEAST

type O_ATLEAST = {
    a?: 1;
    b?: 2;
    c?: 3;
    d: 4;
} | {
    e: 5;
    f: 6;
} | {
    g?: 7;
    h?: 8;
};

type ATLEAST_O_ABF = {
    a: 1;
    b: 2;
    c: 3;
    d: 4;
} | {
    a: 1;
    b?: 2;
    c?: 3;
    d?: 4;
} | {
    a?: 1;
    b: 2;
    c?: 3;
    d?: 4;
} | {
    e: 5;
    f: 6;
} | {
    e?: 5;
    f: 6;
} | {
    g?: 7;
    h?: 8;
};

checks([
    check<O.AtLeast<O_ATLEAST, 'a' | 'b' | 'f'>, ATLEAST_O_ABF, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPULSORY

type COMPULSORY_O = {
    a: string,
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d: 'string0';
    readonly e: 'string1';
    readonly f: 0;
    g: O; // recursion
    h: 1;
    j: 'a';
    k: {a: {b: string}};
    x: () => 1;
};

checks([
    check<O.Compulsory<O>, COMPULSORY_O, Test.Pass>(),
])

function COMPULSORY_GENERIC<O extends {n?: number}>(o: O) {
    const v0 = o as O.Compulsory<O, Key, 'flat'>
    const v1 = o as O.Compulsory<O, Key, 'deep'>
    const p0: number = v0.n
    const p1: number = v1.n
}

// ---------------------------------------------------------------------------------------
// COMPULSORYKEYS

type COMPULSORYKEYS_O = 'a' | 'b' | 'c' | 'f' | 'g' | 'k' | 'x';

checks([
    check<O.CompulsoryKeys<O>, COMPULSORYKEYS_O, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// DIFF

type DIFF_O_O1_DEFAULT = {
    i: {a: string};
    l: [1, 2, 3];
    x: () => 1;
};

type DIFF_O_O1_EQUALS = {
    a: string;
    b: number;
    d?: 'string0';
    g: O;
    h?: 1;
    i: {a: string};
    k: {a: {b: string}};
    l: [1, 2, 3];
    x: () => 1;
};

checks([
    check<O.Diff<O, O1, 'default'>, DIFF_O_O1_DEFAULT, Test.Pass>(),
    check<O.Diff<O, O1, 'equals'>, DIFF_O_O1_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------

type DIFF_O1_O_DEFAULT = {
    i: {a: string};
    l: [1, 2, 3];
    x: () => 1;
};

type DIFF_O1_O_EQUALS = {
    a: string | number;
    b: object;
    d?: never;
    g: {};
    h: never;
    i: {a: string};
    k: {a: {b: string, c: 0}};
    l: [1, 2, 3];
    x: () => 1;
};

checks([
    check<O.Diff<O1, O, 'default'>, DIFF_O1_O_DEFAULT, Test.Pass>(),
    check<O.Diff<O1, O, 'equals'>, DIFF_O1_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EITHER

type O_EITHER = {
    a: string;
    b?: number;
    readonly c?: object;
} | {
    a: 'a',
    b: 'b';
};

type EITHER_O_AB_TRUE = {
    a: string;
    b?: undefined;
    readonly c?: object;
} | {
    a?: undefined;
    b?: number;
    readonly c?: object;
} | {
    a: 'a';
    b?: undefined;
} | {
    b: 'b';
    a?: undefined;
};

type EITHER_O_AB_FALSE = {
    a: string;
    readonly c?: object;
} | {
    b?: number;
    readonly c?: object;
} | {
    a: 'a';
} | {
    b: 'b';
};

checks([
    check<O.Either<O_EITHER, 'a' | 'b'>, EITHER_O_AB_TRUE, Test.Pass>(),
    check<O.Either<O_EITHER, 'a' | 'b', 0>, EITHER_O_AB_FALSE, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXCLUDE

type EXCLUDE_O_O1_DEFAULT = {
    x: () => 1;
};

type EXCLUDE_O_O1_EQUALS = {
    a: string;
    b: number;
    d?: 'string0';
    g: O;
    h?: 1;
    k: {a: {b: string}};
    x: () => 1;
};

checks([
    check<O.Exclude<O, O1, 'default'>, EXCLUDE_O_O1_DEFAULT, Test.Pass>(),
    check<O.Exclude<O, O1, 'equals'>, EXCLUDE_O_O1_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------

type EXCLUDE_O1_O_DEFAULT = {
    i: {a: string};
    l: [1, 2, 3];
};

type EXCLUDE_O1_O_EQUALS = {
    a: string | number;
    b: object;
    d?: never;
    g: {};
    h: never;
    i: {a: string};
    k: {a: {b: string, c: 0}};
    l: [1, 2, 3];
};

checks([
    check<O.Exclude<O1, O, 'default'>, EXCLUDE_O1_O_DEFAULT, Test.Pass>(),
    check<O.Exclude<O1, O, 'equals'>, EXCLUDE_O1_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXCLUDEKEYS

type EXCLUDEKEYS_O_DEFAULT = 'x';

type EXCLUDEKEYS_O_EQUALS = 'a' | 'b' | 'd' | 'g' | 'h' | 'k' | 'x';

checks([
    check<O.ExcludeKeys<O, O1, 'default'>, EXCLUDEKEYS_O_DEFAULT, Test.Pass>(),
    check<O.ExcludeKeys<O, O1, 'equals'>, EXCLUDEKEYS_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------

type EXCLUDEKEYS_O1_DEFAULT = 'i' | 'l';

type EXCLUDEKEYS_O1_EQUALS = 'a' | 'b' | 'd' | 'g' | 'h' | 'i' | 'k' | 'l';

checks([
    check<O.ExcludeKeys<O1, O, 'default'>, EXCLUDEKEYS_O1_DEFAULT, Test.Pass>(),
    check<O.ExcludeKeys<O1, O, 'equals'>, EXCLUDEKEYS_O1_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// FILTER

type FILTER_O_DEFAULT = {
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

type FILTER_O_EQUALS = {
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

checks([
    check<O.Filter<O, string, 'extends->'>, FILTER_O_DEFAULT, Test.Pass>(),
    check<O.Filter<O, string, 'equals'>, FILTER_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// FILTERKEYS

type FILTERKEYS_O_DEFAULT = 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'j' | 'k' | 'x';

type FILTERKEYS_O_EQUALS = 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'j' | 'k' | 'x';

checks([
    check<O.FilterKeys<O, string, 'extends->'>, FILTERKEYS_O_DEFAULT, Test.Pass>(),
    check<O.FilterKeys<O, string, 'equals'>, FILTERKEYS_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// HAS

checks([
    check<O.Has<O, 'X', string | number, 'extends->'>, 0, Test.Pass>(),

    check<O.Has<O, 'c', string, 'extends->'>, 0, Test.Pass>(),
    check<O.Has<O, 'c', {a: 'a'} & {b: 'b'}, 'equals'>, 1, Test.Pass>(),

    check<O.Has<O, 'd', string | undefined, 'extends->'>, 1, Test.Pass>(),
    check<O.Has<O, 'd', 'string0' | undefined, 'equals'>, 1, Test.Pass>(),

    check<O.Has<O, 'd', string, 'extends->'>, 0 | 1, Test.Pass>(),
    check<O.Has<O, 'd', 'string0', 'equals'>, 0, Test.Pass>(),

    check<O.Has<O, 'd', undefined, 'extends->'>, 0 | 1, Test.Pass>(),
    check<O.Has<O, 'd', 'string0', 'equals'>, 0, Test.Pass>(),
    check<O.Has<O1, 'a', string, 'extends->'>, 0 | 1, Test.Pass>(),

    check<O.Has<O, 'f', 0 | undefined | 'a', 'extends->'>, 1, Test.Pass>(),
    check<O.Has<O, 'f', 0 | undefined | 'a', 'equals'>, 0, Test.Pass>(),

    check<O.Has<O, 'a' | 'd', string, 'extends->'>, 0 | 1, Test.Pass>(),

    check<O.Has<O, 'a' | 'd', string | undefined, 'extends->'>, 1, Test.Pass>(),
    check<O.Has<O, 'xx' | 'd', string | undefined, 'extends->'>, 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// HASPATH

checks([
    check<O.HasPath<O, ['g', 'g', 'g'], object, 'extends->'>, 1, Test.Pass>(),
    check<O.HasPath<O, ['g', 'g', 'g'], O, 'equals'>, 1, Test.Pass>(),

    check<O.HasPath<O, ['g', 'g', 'g', 'a'], string, 'extends->'>, 1, Test.Pass>(),
    check<O.HasPath<O, ['g', 'x', 'g'], object, 'extends->'>, 0, Test.Pass>(),

    check<O.HasPath<O, [], any, 'extends->'>, 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INCLUDES

checks([
    check<O.Includes<O, 'xxxx', 'extends->'>, 0, Test.Pass>(),
    check<O.Includes<O, 'xxxx', 'equals'>, 0, Test.Pass>(),

    check<O.Includes<O, string, 'extends->'>, 1, Test.Pass>(),
    check<O.Includes<O, string, 'equals'>, 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INTERSECT

type INTERSECT_O_O1_DEFAULT = O.Omit<O, 'x'>;

type INTERSECT_O_O1_EQUALS = {
    c: {a: 'a'} & {b: 'b'};
    readonly e?: 'string1';
    readonly f: 0;
    j: 'a' | undefined;
};

checks([
    check<O.Intersect<O, O1, 'default'>, INTERSECT_O_O1_DEFAULT, Test.Pass>(),
    check<O.Intersect<O, O1, 'equals'>, INTERSECT_O_O1_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INTERSECTKEYS

type INTERSECTKEYS_O_DEFAULT = U.Exclude<keyof O, 'x'>;

type INTERSECTKEYS_O_EQUALS = 'c' | 'e' | 'f' | 'j';

checks([
    check<O.IntersectKeys<O, O1, 'default'>, INTERSECTKEYS_O_DEFAULT, Test.Pass>(),
    check<O.IntersectKeys<O, O1, 'equals'>, INTERSECTKEYS_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INVERT

const INVERT_SYM = Symbol('')

type O_INVERT = {
    A: 'Av',
    B: typeof INVERT_SYM,
    C: 42;
};

type INVERT_O = {
    Av: 'A';
    [INVERT_SYM]: 'B';
    42: 'C';
};

checks([
    check<O.Invert<O_INVERT>, INVERT_O, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LISTOF

type O_LISTOF_INDEX = {
    '0': 1;
    '2': 3;
    '3': never;
    '5': 5;
    '6': 6;
};

type O_LISTOF_NUMBER = {
    [K in number]: 42
};

type O_LISTOF_STRING = {
    [K in string]: 42
};

type O_LISTOF_SYMBOL = {
    [K in symbol]: 42
};

type LISTOF_INDEX_O = [1, 3, never, 5, 6];
type LISTOF_NUMBER_O = 42[];
type LISTOF_STRING_O = 42[];
type LISTOF_SYMBOL_O = unknown[];

checks([
    check<O.ListOf<O_LISTOF_INDEX>, LISTOF_INDEX_O, Test.Pass>(),
    check<O.ListOf<O_LISTOF_NUMBER>, LISTOF_NUMBER_O, Test.Pass>(),
    check<O.ListOf<O_LISTOF_STRING>, LISTOF_STRING_O, Test.Pass>(),
    check<O.ListOf<O_LISTOF_SYMBOL>, LISTOF_SYMBOL_O, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MERGE

type O_MERGE = {
    a?: string;
    c: {
        a?: string;
        b?: number;
   } | Date;
    d: 'hello' | undefined;
    e: number | {a: 1};
    f?: {
        a: string;
        b?: number;
   },
    g?: {
        a?: string;
        b?: number;
   };
    h: {
        a: number;
        b: number;
   } | undefined;
    i: {
        a: string;
   } | undefined;
    j: {
        a: {
            b?: {};
       };
   },
    k?: {[k: string]: string};
    l: [{a: 'a'}];
    n: 42;
};

type O1_MERGE = {
    a: object | undefined;
    b: number;
    c: {
        a: object;
        b?: object;
        c: object;
   };
    d: 'goodbye';
    e: string | {b: 2};
    f?: {
        a: object;
        b?: object;
        c: object;
   };
    h: {
        a: string;
   };
    i: {
        a: number;
   } | undefined;
    j?: {
        a: {
            b?: {
                c: 1;
           };
       };
   };
    k: {} | Date;
    l: [{b: 'b'}, 2, 3];
    m: [];
};

type MERGE_O_O1_LODASH = {
    a: string | object | undefined;
    b: number;
    c: {
        a?: string;
        b?: number;
   } | Date;
    d: 'hello' | 'goodbye';
    e: number | {a: 1};
    f?: {
        a: string;
        b?: number;
   } | {
        a: object;
        b?: object;
        c: object;
   },
    g?: {
        a?: string;
        b?: number;
   };
    h: {
        a: number;
        b: number;
   } | {
        a: string;
   };
    i: {
        a: string;
   } | {
        a: number;
   } | undefined;
    j: {
        a: {
            b?: {};
       };
   },
    k: {} | {[k: string]: string} | Date;
    l: [{a: 'a'}];
    m: [];
    n: 42;
};

type MERGE_O_O1_DEEP_LODASH = {
    a: string | object | undefined;
    b: number;
    c: {
        a: string | object;
        b?: number | object;
        c: object;
   } | Date;
    d: 'hello' | 'goodbye';
    e: number | {a: 1} | {a: 1, b: 2};
    f?: {
        a: string;
        b?: number | undefined;
   } | {
        a: object;
        b?: object | undefined;
        c: object;
   } | {
        a: string;
        b?: number | object | undefined;
        c: object;
   } | undefined;
    g?: {
        a?: string;
        b?: number;
   };
    h: {
        a: number;
        b: number;
   } | {
        a: string;
   };
    i: {
        a: string;
   } | {
        a: number;
   } | undefined;
    j: {
        a: {
            b?: {} | {
                c: 1;
           };
       };
   } | {
        a: {
            b?: {};
       };
   },
    k: {} | {[k: string]: string} | {[x: string]: string | undefined} | Date;
    l: [{a: 'a', b: 'b'}, 2, 3];
    m: [];
    n: 42;
};

checks([
    check<O.Merge<[1], [2, 3], 'flat'>, [1, 3], Test.Pass>(),
    check<O.Merge<[1], [2, 3], 'deep'>, [1, 3], Test.Pass>(),
    check<O.Merge<O_MERGE, O1_MERGE, 'flat', M.BuiltIn, undefined>, MERGE_O_O1_LODASH, Test.Pass>(),
    check<O.Merge<O_MERGE, O1_MERGE, 'deep', M.BuiltIn, undefined>, MERGE_O_O1_DEEP_LODASH, Test.Pass>(),
])

function MERGE_GENERIC<O extends {n?: number}>(o: O) {
    const v0 = o as O.Merge<O, {n: string}, 'flat'>
    const v1 = o as O.Merge<O, {n: string}, 'deep'>
    const p0: string | number = v0.n
    const p1: string | number = v1.n
}

// ---------------------------------------------------------------------------------------
// MERGEALL

checks([
    check<O.MergeAll<{}, [O_MERGE, O1_MERGE], 'flat', M.BuiltIn, undefined>, MERGE_O_O1_LODASH, Test.Pass>(),
    check<O.MergeAll<{}, [O_MERGE, O1_MERGE], 'deep', M.BuiltIn, undefined>, MERGE_O_O1_DEEP_LODASH, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MODIFY

checks([
    check<O.Modify<{a?: string}, {a: A.x, b: 9}>, {a: string, b: 9}, Test.Pass>(),
    check<O.Modify<{}, {a: A.x, b: 9}>, {a: never, b: 9}, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NONNULLABLE

type NONNULLABLE_O_FLAT = {
    a: string;
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    j: 'a';
    k: {a: {b: string}};
    x: () => 1;
};

type NONNULLABLE_O_J_FLAT = {
    a: string;
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    j: 'a';
    k: {a: {b: string}};
    x: () => 1;
};

checks([
    check<O.NonNullable<O, keyof O, 'flat'>, NONNULLABLE_O_FLAT, Test.Pass>(),
    check<O.NonNullable<O, 'j', 'flat'>, NONNULLABLE_O_J_FLAT, Test.Pass>(),
    check<O.Path<O.NonNullable<O, 'g', 'deep'>, ['g', 'g']>, O.NonNullable<O, keyof O, 'deep'>, Test.Pass>(),
])

function NONNULLABLE_GENERIC<O extends {n: number[] | undefined}>(o: O) {
    const v0 = o as O.NonNullable<O, Key, 'flat'>
    const v1 = o as O.NonNullable<O, Key, 'deep'>
    const p0: number[] = v0.n
    const p1: number[] = v1.n
}

// ---------------------------------------------------------------------------------------
// NONNULLABLEKEYS

checks([
    check<O.NonNullableKeys<O>, 'a' | 'b' | 'c' | 'f' | 'g' | 'k' | 'x', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NULLABLE

type NULLABLE_O_FLAT = {
    a: string | undefined | null;
    b: number | undefined | null;
    c: {a: 'a'} & {b: 'b'} | undefined | null;
    d?: 'string0' | null;
    readonly e?: 'string1' | null;
    readonly f: 0 | undefined | null;
    g: O | undefined | null;
    h?: 1 | null;
    j: 'a' | undefined | null;
    k: {a: {b: string}} | undefined | null;
    x: (() => 1) | undefined | null;
};

type NULLABLE_O_A_FLAT = {
    a: string | undefined | null;
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

checks([
    check<O.Nullable<O, keyof O, 'flat'>, NULLABLE_O_FLAT, Test.Pass>(),
    check<O.Nullable<O, 'a', 'flat'>, NULLABLE_O_A_FLAT, Test.Pass>(),
    check<O.Path<O.Nullable<O, 'g', 'deep'>, ['g', 'g']>, O.Nullable<O, keyof O, 'deep'> | undefined | null, Test.Pass>(),
])

function NULLABLE_GENERIC<O extends {n: number[]}>(o: O) {
    const v0 = o as O.Nullable<O, Key, 'flat'>
    const v1 = o as O.Nullable<O, Key, 'deep'>
    const p0: number[] | undefined | null = v0.n
    const p1: (number | undefined | null)[] | null | undefined = v1.n
}

// ---------------------------------------------------------------------------------------
// NULLABLEKEYS

checks([
    check<O.NullableKeys<O>, 'd' | 'e' | 'h' | 'j', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OBJECT

// Cannot be tested

// ---------------------------------------------------------------------------------------
// OMIT

type OMIT_O_DEH = {
    a: string;
    b: number;
    c: {a: 'a'} & {b: 'b'};
    readonly f: 0;
    g: O;
    j: 'a' | undefined;
    k: {a: {b: string}};
    x: () => 1;
};

checks([
    check<O.Omit<O, 'd' | 'e' | 'h'>, OMIT_O_DEH, Test.Pass>(),
    check<O.Omit<O, keyof O>, {}, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OPTIONAL

type OPTIONAL_O_FLAT = {
    a?: string,
    b?: number;
    c?: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f?: 0;
    g?: O;
    h?: 1;
    j?: 'a';
    k?: {a: {b: string}};
    x?: () => 1;
};

type OPTIONAL_O_A_FLAT = {
    a?: string;
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

checks([
    check<O.Optional<O, keyof O, 'flat'>, OPTIONAL_O_FLAT, Test.Pass>(),
    check<O.Optional<O, 'a', 'flat'>, OPTIONAL_O_A_FLAT, Test.Pass>(),
    check<O.Path<O.Optional<O, 'g', 'deep'>, ['g', 'g']>, O.Optional<O, keyof O, 'deep'> | undefined, Test.Pass>(),
])

function OPTIONAL_GENERIC<O extends {values: number[]}>(o: O) {
    let v0 = o as O.Optional<O, Key, 'flat'>
    let v1 = o as O.Optional<O, Key, 'deep'>

    const p0: number[] | undefined = v0.values
    const p1: OptionalDeep<O['values']> | undefined = v1.values

    v0 = {}
    v1 = {}
}

// ---------------------------------------------------------------------------------------
// PARTIAL

type PARTIAL_O_FLAT = {
    a?: string,
    b?: number;
    c?: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f?: 0;
    g?: O;
    h?: 1;
    j?: 'a';
    k?: {a: {b: string}};
    x?: () => 1;
};

checks([
    check<O.Partial<O, 'flat'>, PARTIAL_O_FLAT, Test.Pass>(),
    check<O.Path<O.Partial<O, 'deep'>, ['g', 'g']>, O.Partial<O, 'deep'> | undefined, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OPTIONALKEYS

checks([
    check<O.OptionalKeys<O>, 'd' | 'e' | 'h', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OVERWRITE

checks([
    check<O.Overwrite<{a: string}, {a: number, b: any}>, {a: number}, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PATCH

type PATCH_O_O1 = {
    a: string;
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    i: {a: string};
    j: 'a' | undefined;
    k: {a: {b: string}};
    l: [1, 2, 3];
    x: () => 1;
};

type PATCH_O1_O = {
    a: string | number;
    b: object;
    c: {a: 'a'} & {b: 'b'};
    d?: never;
    readonly e?: 'string1';
    readonly f: 0;
    g: {};
    h: never;
    i: {a: string};
    j: 'a' | undefined;
    k: {a: {b: string, c: 0}};
    l: [1, 2, 3];
    x: () => 1;
};

type PATCH_O_O1_DEEP = {
    a: string;
    b: number;
    c: {a: 'a', b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    i: {a: string};
    j: 'a' | undefined;
    k: {a: {b: string, c: 0}};
    l: [1, 2, 3];
    x: () => 1;
};

checks([
    check<O.Patch<O, O1>, PATCH_O_O1, Test.Pass>(),
    check<O.Patch<O1, O>, PATCH_O1_O, Test.Pass>(),
    check<O.Patch<O, O1, 'deep'>, PATCH_O_O1_DEEP, Test.Pass>(),
])

function PATCH_GENERIC<O extends {n: number}>(o: O) {
    const v0 = o as O.Patch<O, {a: string}, 'flat'>
    const v1 = o as O.Patch<O, {a: string}, 'deep'>
    const p0n: number = v0.n
    const p1n: number = v1.n
    const p0a: string = v0.a
    const p1a: string = v1.a
}

// ---------------------------------------------------------------------------------------
// PATCHALL

checks([
    check<O.PatchAll<{}, [O, O1]>, PATCH_O_O1, Test.Pass>(),
    check<O.PatchAll<{}, [O, O1], 'deep'>, PATCH_O_O1_DEEP, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PATH

checks([
    check<O.Path<O, ['g', 'g', 'g']>, O['g'], Test.Pass>(),
    check<O.Path<O, ['g', 'g', 'g', 'a']>, string, Test.Pass>(),
    check<O.Path<O, ['g', 'x', 'g']>, undefined, Test.Pass>(),
    // check<O.Path<O, []>, undefined, Test.Pass>(),
    check<O.Path<O, ['d']>, 'string0' | undefined, Test.Pass>(),
])

type O_PATH_U = {
    b: {
        c: {
            d: 'bcd';
        };
        b: 'bb';
    };
    c: 1;
} | {
    a: {
        b: boolean | {
            c: 'abc';
        };
    };
    c: 2;
};

checks([
    check<O.Path<O_PATH_U, ['c']>, 1 | 2, Test.Pass>(),
    check<O.Path<O_PATH_U, ['b', 'c', 'x']>, undefined, Test.Pass>(),
    check<O.Path<O_PATH_U, ['b', 'c', 'd']>, 'bcd' | undefined, Test.Pass>(),
    check<O.Path<O_PATH_U, ['a', 'b', 'c']>, 'abc' | undefined, Test.Pass>(),
    check<O.Path<O_PATH_U, ['a' | 'b', 'b']>, boolean | 'bb' | {c: 'abc'} | undefined, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PATHS

type O_PATHS = {
    a: {
        a: boolean;
    };
    b: {
        a: {
            a: {};
        };
        b: {};
    };
};

checks([
    check<O.Paths<{'prop': {a: 1}[]}>, T.NonNullable<['prop'?, number?, 'a'?]>, Test.Pass>(),
    check<O.Paths<O_PATHS>, T.NonNullable<['a'?, 'a'?] | ['b'?, 'a'?, 'a'?] | ['b'?, 'b'?]>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PICK

type PICK_O_DEF = {
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
};

checks([
    check<O.Pick<O, 'd' | 'e' | 'f'>, PICK_O_DEF, Test.Pass>(),
    check<O.Pick<O, keyof O>, O, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// READONLY

type READONLY_O_FLAT = {
    readonly a: string,
    readonly b: number;
    readonly c: {a: 'a'} & {b: 'b'};
    readonly d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    readonly g: O;
    readonly h?: 1;
    readonly j: 'a' | undefined;
    readonly k: {a: {b: string}};
    readonly x: () => 1;
};

type READONLY_O_A_FLAT = {
    readonly a: string,
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

checks([
    check<O.Readonly<O, keyof O, 'flat'>, READONLY_O_FLAT, Test.Pass>(),
    check<O.Readonly<O, 'a', 'flat'>, READONLY_O_A_FLAT, Test.Pass>(),
    check<O.Path<O.Readonly<O, 'g', 'deep'>, ['g', 'g']>, O.Readonly<O, keyof O, 'deep'>, Test.Pass>(),
])

function READONLY_GENERIC<O extends {n?: number[]}>(o: O) {
    const v0 = o as O.Readonly<O, Key, 'flat'>
    const v1 = o as O.Readonly<O, Key, 'deep'>
    const p0: number[] | undefined = v0.n
    const p1: readonly number[] | undefined = v1.n

    // @ts-expect-error
    v0.n = 1
    // @ts-expect-error
    v1.n = 1
}

// ---------------------------------------------------------------------------------------
// READONLYKEYS

checks([
    check<O.ReadonlyKeys<O>, 'e' | 'f', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RECORD

type RECORD_AB_A_OPTR = {
    readonly a?: string;
    readonly b?: string;
};

type RECORD_AB_A_OPTW = {
    a?: string;
    b?: string;
};

type RECORD_AB_A_REQR = {
    readonly a: string;
    readonly b: string;
};

type RECORD_AB_A_REQW = {
    a: string;
    b: string;
};

checks([
    check<O.Record<'a' | 'b', string, ['?', 'R']>, RECORD_AB_A_OPTR, Test.Pass>(),
    check<O.Record<'a' | 'b', string, ['?', 'W']>, RECORD_AB_A_OPTW, Test.Pass>(),
    check<O.Record<'a' | 'b', string, ['!', 'R']>, RECORD_AB_A_REQR, Test.Pass>(),
    check<O.Record<'a' | 'b', string, ['!', 'W']>, RECORD_AB_A_REQW, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REPLACE

type REPLACE_STRING_NUMBER = {
    a: number;
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    j: 'a' | undefined;
    k: {
        a: {
            b: string;
       };
   };
    x: () => 1;
};

checks([
    check<O.Replace<O, string, number>, REPLACE_STRING_NUMBER, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REQUIRED

type REQUIRED_O_FLAT = {
    a: string,
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d: 'string0';
    readonly e: 'string1';
    readonly f: 0;
    g: O;
    h: 1;
    j: 'a' | undefined;
    k: {a: {b: string}};
    x: () => 1;
};

type REQUIRED_O_D_FLAT = {
    a: string,
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    j: 'a' | undefined;
    k: {a: {b: string}};
    x: () => 1;
};

checks([
    check<O.Required<O, keyof O, 'flat'>, REQUIRED_O_FLAT, Test.Pass>(),
    check<O.Required<O, 'd', 'flat'>, REQUIRED_O_D_FLAT, Test.Pass>(),
    check<O.Path<O.Required<O, 'g', 'deep'>, ['g', 'g']>, O.Required<O, keyof O, 'deep'>, Test.Pass>(),
])

function REQUIRED_GENERIC<O extends {n?: number[]}>(o: O) {
    const v0 = o as O.Required<O, Key, 'flat'>
    const v1 = o as O.Required<O, Key, 'deep'>
    const p0: number[] = v0.n
    const p1: number[] = v1.n
}

// ---------------------------------------------------------------------------------------
// REQUIREDKEYS

checks([
    check<O.RequiredKeys<O>, 'a' | 'b' | 'c' | 'f' | 'g' | 'j' | 'k' | 'x', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SELECT

type SELECT_O_DEFAULT = {
    a: string;
    d?: 'string0';
    readonly e?: 'string1';
    j: 'a' | undefined;
};

type SELECT_O_EQUALS = {
    a: string,
};

checks([
    check<O.Select<O, string, 'extends->'>, SELECT_O_DEFAULT, Test.Pass>(),
    check<O.Select<O, string, 'equals'>, SELECT_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SELECTKEYS

type SELECTKEYS_O_DEFAULT = 'a' | 'd' | 'e' | 'j';

type SELECTKEYS_O_EQUALS = 'a';

checks([
    check<O.SelectKeys<O, string, 'extends->'>, SELECTKEYS_O_DEFAULT, Test.Pass>(),
    check<O.SelectKeys<O, string, 'equals'>, SELECTKEYS_O_EQUALS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNDEFINABLE

type UNDEFINABLE_O_FLAT = {
    a: string | undefined;
    b: number | undefined;
    c: {a: 'a'} & {b: 'b'} | undefined;
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0 | undefined;
    g: O | undefined;
    h?: 1;
    j: 'a' | undefined;
    k: {a: {b: string}} | undefined;
    x: (() => 1) | undefined;
};

type UNDEFINABLE_O_A_FLAT = {
    a: string | undefined;
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

checks([
    check<O.Undefinable<O, keyof O, 'flat'>, UNDEFINABLE_O_FLAT, Test.Pass>(),
    check<O.Undefinable<O, 'a', 'flat'>, UNDEFINABLE_O_A_FLAT, Test.Pass>(),
    check<O.Path<O.Undefinable<O, 'g', 'deep'>, ['g', 'g']>, O.Undefinable<O, keyof O, 'deep'> | undefined, Test.Pass>(),
])

function UNDEFINABLE_GENERIC<O extends {n: number}>(o: O) {
    const v0 = o as O.Required<O, Key, 'flat'>
    const v1 = o as O.Required<O, Key, 'deep'>
    const p0: number | undefined = v0.n
    const p1: number | undefined = v1.n
}

// ---------------------------------------------------------------------------------------
// UNDEFINABLEKEYS

checks([
    check<O.UndefinableKeys<O>, 'd' | 'e' | 'h' | 'j', Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNIONIZE

type O_UNIONIZE = {
    a: 'a';
    b: 'b';
    c: never;
    d?: 1;
};

type O1_UNIONIZE = {
    a: 'b';
    b?: 'x';
    c: 42;
    d: {};
};

type UNIONIZE_O_O1 = {
    a: 'a' | 'b';
    b: 'b' | 'x' | undefined;
    c: 42;
    d?: {} | 1;
};

checks([
    check<O.Unionize<O_UNIONIZE, O1_UNIONIZE>, UNIONIZE_O_O1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNIONOF

type O_UNIONOF = {
    a: 'a';
    b: 'b';
    c: never;
    d: 1;
};

type UNIONOF_O = 'a' | 'b' | 1;

checks([
    check<O.UnionOf<O_UNIONOF>, UNIONOF_O, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UPDATE

type O_UPDATE = {
    a?: 'a';
};

type UPDATE_O = {
    a?: 'xxxx';
};

type UPDATE_O_X = {
    a?: 'a';
};

type UPDATE_O_STRING_42 = {
    [x: string]: 42;
    // @ts-ignore
    a?: 42 | undefined;
};

checks([
    check<O.Update<O_UPDATE, 'a' | 'b', 'xxxx'>, UPDATE_O, Test.Pass>(),
    check<O.Update<O_UPDATE, 'a' | 'b', A.x>, UPDATE_O_X, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// WRITABLE

type WRITABLE_O_FLAT = {
    a: string,
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    e?: 'string1';
    f: 0;
    g: O;
    h?: 1;
    j: 'a' | undefined;
    k: {a: {b: string}};
    x: () => 1;
};

type WRITABLE_O_E_FLAT = {
    a: string,
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    e?: 'string1';
    readonly f: 0;
    g: O;
    h?: 1;
    j: 'a' | undefined;
    k: {a: {b: string}};
    x: () => 1;
};

checks([
    check<O.Writable<O, keyof O, 'flat'>, WRITABLE_O_FLAT, Test.Pass>(),
    check<O.Writable<O, 'e', 'flat'>, WRITABLE_O_E_FLAT, Test.Pass>(),
    check<O.Path<O.Writable<O, 'g', 'deep'>, ['g', 'g']>, O.Writable<O, keyof O, 'deep'>, Test.Pass>(),
])

function WRITABLE_GENERIC<O extends {readonly n: number}>(o: O) {
    const v0 = o as O.Writable<O, Key, 'flat'>
    const v1 = o as O.Writable<O, Key, 'deep'>
    const p0: number = v0.n
    const p1: number = v1.n

    v0.n = 1
    v1.n = 1
}

// ---------------------------------------------------------------------------------------
// WRITABLEKEYS

checks([
    check<O.WritableKeys<O>, 'a' | 'b' | 'c' | 'd' | 'g' | 'h' | 'j' | 'k' | 'x', Test.Pass>(),
])

// ///////////////////////////////////////////////////////////////////////////////////////
// OBJECT.P //////////////////////////////////////////////////////////////////////////////

type OP = {// A binary tree
    a: {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
       };
   };
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
       };
        b: {
            a: 'bba';
            b: 'bbb';
       };
   };
    c?: string;
};

type OP_UNIONS = {
    a: {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
       };
   } | 'a';
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
       };
        b: {
            a: 'bba';
            b: 'bbb';
       };
   } | 'b';
    c?: string;
};

type OP_ARRAYS = {
    a: {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
       }[];
   }[][];
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
       }[];
        b: {
            a: 'bba';
            b: 'bbb';
       }[];
   }[];
    c?: string;
};

type OP_ARRAYS_UNIONS = {
    a: {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
       }[];
   }[][] | 'a'[];
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
       }[];
        b: {
            a: 'bba';
            b: 'bbb';
       }[];
   }[] | 'b'[][];
    c?: string;
};

// ---------------------------------------------------------------------------------------
// P.MERGE

type O_PMERGE = {
    a: {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
            x: string;
       };
   };
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
       };
        b: {
            a: 'bba';
            b: 'bbb';
            x: string;
       };
   };
    c?: string;
};

type O_PMERGE_UNIONS = {
    a: {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
            x: string;
       };
   } | 'a';
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
       };
        b: {
            a: 'bba';
            b: 'bbb';
            x: string;
       };
   } | 'b';
    c?: string;
};

checks([
    check<O.P.Merge<OP, ['a' | 'b', 'b'], {x: string}>, O_PMERGE, Test.Pass>(),
    check<O.P.Merge<OP_UNIONS, ['a' | 'b', 'b'], {x: string}>, O_PMERGE_UNIONS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.OMIT

type O_POMIT = {
    a: {
        b: {
            a: 'aba';
            b: 'abb';
       };
   };
    b?: {
        b: {
            a: 'bba';
            b: 'bbb';
       };
   };
    c?: string;
};

type O_POMIT_UNIONS = {
    a: {
        b: {
            a: 'aba';
            b: 'abb';
       };
   } | 'a';
    b?: {
        b: {
            a: 'bba';
            b: 'bbb';
       };
   } | 'b';
    c?: string;
};

checks([
    check<O.P.Omit<OP, ['a' | 'b', 'a']>, O_POMIT, Test.Pass>(),
    check<O.P.Omit<OP_UNIONS, ['a' | 'b', 'a']>, O_POMIT_UNIONS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.PICK

type O_PPICK = {
    a: {
        a: string;
    };
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
        };
    };
};

type O_PPICK_UNIONS = {
    a: {
        a: string;
    } | 'a';
    b?: {
        a: {
            a: 'baa';
            b: 'bab';
        };
    } | 'b';
};

type O_PPICK_AUTOPATH = {
    a: {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
        };
    };
} | {
    a: {
        a: string;
    };
} | {
    b?: {
        a: {
            b: 'bab';
        };
    } | undefined;
}

const o_ppick_autopath = pick({} as OP, ['a', 'a.a', 'b.a.b'])

declare function pick<T extends Record<string, any>, K extends string>(
    obj: T,
    keys: F.AutoPath<T, K>[]
): A.Compute<O.P.Pick<T, S.Split<K, '.'>>>

checks([
    check<O.P.Pick<OP, ['a' | 'b', 'a']>, O_PPICK, Test.Pass>(),
    check<O.P.Pick<OP_UNIONS, ['a' | 'b', 'a']>, O_PPICK_UNIONS, Test.Pass>(),
    check<typeof o_ppick_autopath, O_PPICK_AUTOPATH, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.READONLY

type O_PREADONLY = {
    a: {
        readonly a: string;
        b: {
            a: 'aba';
            b: 'abb';
       };
   };
    b?: {
        readonly a: {
            a: 'baa';
            b: 'bab';
       };
        b: {
            a: 'bba';
            b: 'bbb';
       };
   };
    c?: string;
};

type O_PREADONLY_UNIONS = {
    a: {
        readonly a: string;
        b: {
            a: 'aba';
            b: 'abb';
       };
   } | 'a';
    b?: {
        readonly a: {
            a: 'baa';
            b: 'bab';
       };
        b: {
            a: 'bba';
            b: 'bbb';
       };
   } | 'b';
    c?: string;
};

checks([
    check<O.P.Readonly<OP, ['a' | 'b', 'a']>, O_PREADONLY, Test.Pass>(),
    check<O.P.Readonly<OP_UNIONS, ['a' | 'b', 'a']>, O_PREADONLY_UNIONS, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.UPDATE

type O_PUPDATE = {
    a: {
        a: 'x';
        b: {
            a: 'aba';
            b: 'abb';
       };
   };
    b?: {
        a: 'x';
        b: {
            a: 'bba';
            b: 'bbb';
       };
   };
    c?: string;
};

type O_PUPDATE_UNIONS = {
    a: 'a' | {
        a: 'x';
        b: {
            a: 'aba';
            b: 'abb';
       };
   },
    b?: 'b' | {
        a: 'x';
        b: {
            a: 'bba';
            b: 'bbb';
       };
   },
    c?: string;
};

type O_PUPDATE_VPATH = {
    a: 'a' | {
        a: string;
        b: {
            a: 'aba';
            b: 'abb';
       };
   };
    b?: 'b' | {
        a: {
            a: 'baa';
            b: 'bab';
       };
        b: {
            a: 'bba';
            b: 'bbb';
       };
   };
    c?: string;
};

checks([
    check<O.P.Update<OP, ['a' | 'b', 'a'], 'x'>, O_PUPDATE, Test.Pass>(),
    check<O.P.Update<OP_UNIONS, ['a' | 'b', 'a'], 'x'>, O_PUPDATE_UNIONS, Test.Pass>(),
    check<O.P.Update<OP_UNIONS, ['a' | 'b' | 'c', 'a', 'a', 'a'], 'x'>, O_PUPDATE_VPATH, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.RECORD

type RECORD_ABCD_STRING_OPTR = {
    readonly a?: {
        readonly b?: {
            readonly d?: string;
       };
        readonly c?: {
            readonly d?: string;
       };
   };
};

type RECORD_ABCD_STRING_OPTW = {
    a?: {
        b?: {
            d?: string;
       };
        c?: {
            d?: string;
       };
   };
};

type RECORD_ABCD_STRING_REQR = {
    readonly a: {
        readonly b: {
            readonly d: string;
       };
        readonly c: {
            readonly d: string;
       };
   };
};

type RECORD_ABCD_STRING_REQW = {
    a: {
        b: {
            d: string;
       };
        c: {
            d: string;
       };
   };
};

checks([
    check<O.P.Record<['a', 'b' | 'c', 'd'], string, ['?', 'R']>, RECORD_ABCD_STRING_OPTR, Test.Pass>(),
    check<O.P.Record<['a', 'b' | 'c', 'd'], string, ['?', 'W']>, RECORD_ABCD_STRING_OPTW, Test.Pass>(),
    check<O.P.Record<['a', 'b' | 'c', 'd'], string, ['!', 'R']>, RECORD_ABCD_STRING_REQR, Test.Pass>(),
    check<O.P.Record<['a', 'b' | 'c', 'd'], string, ['!', 'W']>, RECORD_ABCD_STRING_REQW, Test.Pass>(),
])
