/* tslint:disable */

import {Test, O, A, T} from '../src/index'
import {False} from '../src/Boolean/Boolean'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// OBJECT ////////////////////////////////////////////////////////////////////////////////

type O = {
         a : string,
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O // recursion
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
}

type O1 = {
         a : string | number
         b : object
         c : {a: 'a'} & {b: 'b'}
         d?: never
readonly e?: 'string1'
readonly f : 0
         g : O1 // recursion
         h : never
         i : {a: string}
         j : 'a' | undefined
         k : {a: {b: string, c: 0}}
};

// ---------------------------------------------------------------------------------------
// ASSIGN

type O_ASSIGN  = {readonly a: 1}
type Os_ASSIGN = [{a: 2, readonly b: 1}, {a: 3, c?: 1}]

type ASSIGN_O_Os = {a: 3, readonly b: 1, c?: 1};

checks([
    check<O.Assign<O_ASSIGN, Os_ASSIGN>,    ASSIGN_O_Os,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ASSIGNUP

type O_ASSIGNUP  = {readonly a: 1, c: 2}
type Os_ASSIGNUP = [{a: 2, readonly b: 1}, {a: 3, c?: 1}]

type ASSIGNUP_O_Os = {readonly a: 3, readonly b: 1, c: 1 | 2};

checks([
    check<O.AssignUp<O_ASSIGNUP, Os_ASSIGNUP>,    ASSIGNUP_O_Os,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// AT

checks([
    check<O.At<O, 'a'>,                         string,                 Test.Pass>(),
    check<O.At<O, 'c'>,                         {a: 'a'} & {b: 'b'},    Test.Pass>(),
    check<O.At<O, 'g'>,                         O,                      Test.Pass>(),
    check<O.At<{a: 1, b: 2, 0: 3}, string, 0>,  1 | 2,                  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPULSORY

type COMPULSORY_O = {
         a: string,
         b: number
         c: {a: 'a'} & {b: 'b'}
         d: 'string0'
readonly e: 'string1'
readonly f: 0
         g: O // recursion
         h: 1
         j: 'a'
         k: {a: {b: string}}
};

checks([
    check<O.Compulsory<O>,  COMPULSORY_O,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPULSORYKEYS

type COMPULSORYKEYS_O = 'a' | 'b' | 'c' | 'f' | 'g' | 'k';

checks([
    check<O.CompulsoryKeys<O>,  COMPULSORYKEYS_O,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// DIFF

type DIFF_O_O1_DEFAULT = {
    i: {a: string}
}

type DIFF_O_O1_EQUALS = {
    a : string
    b : number
    d?: 'string0'
    g : O
    h?: 1
    i : {a: string}
    k : {a: {b: string}}
};

checks([
    check<O.Diff<O, O1, 'default'>, DIFF_O_O1_DEFAULT,  Test.Pass>(),
    check<O.Diff<O, O1, 'equals'>,  DIFF_O_O1_EQUALS,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------

type DIFF_O1_O_DEFAULT = {
    i: {a: string}
}

type DIFF_O1_O_EQUALS = {
    a : string | number
    b : object
    d?: never
    g : O1
    h : never
    i : {a: string}
    k : {a: {b: string, c: 0}}
};

checks([
    check<O.Diff<O1, O, 'default'>, DIFF_O1_O_DEFAULT,  Test.Pass>(),
    check<O.Diff<O1, O, 'equals'>,  DIFF_O1_O_EQUALS,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EITHER

type O_EITHER = {
         a : string
         b?: number
readonly c?: object
}

type EITHER_O_AB_TRUE = {
    a: string;
    b?: undefined;
    readonly c?: object;
} | {
    a?: undefined;
    b?: number;
    readonly c?: object;
}

type EITHER_O_AB_FALSE = {
    a: string;
    readonly c?: object;
} | {
    b?: number;
    readonly c?: object;
};

checks([
    check<O.Either<O_EITHER, 'a' | 'b'>,            EITHER_O_AB_TRUE,       Test.Pass>(),
    check<O.Either<O_EITHER, 'a' | 'b', False>,     EITHER_O_AB_FALSE,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXCLUDE

type EXCLUDE_O_O1_DEFAULT = {}

type EXCLUDE_O_O1_EQUALS = {
    a : string
    b : number
    d?: 'string0'
    g : O
    h?: 1
    k : {a: {b: string}}
};

checks([
    check<O.Exclude<O, O1, 'default'>,  EXCLUDE_O_O1_DEFAULT,   Test.Pass>(),
    check<O.Exclude<O, O1, 'equals'>,   EXCLUDE_O_O1_EQUALS,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------

type EXCLUDE_O1_O_DEFAULT = {
    i: {a: string}
}

type EXCLUDE_O1_O_EQUALS = {
    a : string | number
    b : object
    d?: never
    g : O1
    h : never
    i : {a: string}
    k : {a: {b: string, c: 0}}
};

checks([
    check<O.Exclude<O1, O, 'default'>,  EXCLUDE_O1_O_DEFAULT,   Test.Pass>(),
    check<O.Exclude<O1, O, 'equals'>,   EXCLUDE_O1_O_EQUALS,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXCLUDEKEYS

type EXCLUDEKEYS_O_DEFAULT = never

type EXCLUDEKEYS_O_EQUALS = 'a' | 'b' | 'd' | 'g' | 'h' | 'k';

checks([
    check<O.ExcludeKeys<O, O1, 'default'>,  EXCLUDEKEYS_O_DEFAULT,  Test.Pass>(),
    check<O.ExcludeKeys<O, O1, 'equals'>,   EXCLUDEKEYS_O_EQUALS,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------

type EXCLUDEKEYS_O1_DEFAULT = 'i'

type EXCLUDEKEYS_O1_EQUALS = 'a' | 'b' | 'd' | 'g' | 'h' | 'i' | 'k';

checks([
    check<O.ExcludeKeys<O1, O, 'default'>,  EXCLUDEKEYS_O1_DEFAULT, Test.Pass>(),
    check<O.ExcludeKeys<O1, O, 'equals'>,   EXCLUDEKEYS_O1_EQUALS,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// FILTER

type FILTER_O_DEFAULT = {
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
}

type FILTER_O_EQUALS = {
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
};

checks([
    check<O.Filter<O, string, 'extends->'>,     FILTER_O_DEFAULT,   Test.Pass>(),
    check<O.Filter<O, string, 'equals'>,        FILTER_O_EQUALS,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// FILTERKEYS

type FILTERKEYS_O_DEFAULT = 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'j' | 'k'

type FILTERKEYS_O_EQUALS = 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'j' | 'k';

checks([
    check<O.FilterKeys<O, string, 'extends->'>,     FILTERKEYS_O_DEFAULT,   Test.Pass>(),
    check<O.FilterKeys<O, string, 'equals'>,        FILTERKEYS_O_EQUALS,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// HAS

checks([
    check<O.Has<O, 'X', string | number, 'extends->'>,              0,      Test.Pass>(),

    check<O.Has<O, 'c', string, 'extends->'>,                       0,      Test.Pass>(),
    check<O.Has<O, 'c', {a: 'a'} & {b: 'b'}, 'equals'>,             1,      Test.Pass>(),

    check<O.Has<O, 'd', string | undefined, 'extends->'>,           1,      Test.Pass>(),
    check<O.Has<O, 'd', 'string0' | undefined, 'equals'>,           1,      Test.Pass>(),

    check<O.Has<O, 'd', string, 'extends->'>,                       0 | 1,  Test.Pass>(),
    check<O.Has<O, 'd', 'string0', 'equals'>,                       0,      Test.Pass>(),

    check<O.Has<O, 'd', undefined, 'extends->'>,                    0 | 1,  Test.Pass>(),
    check<O.Has<O, 'd', 'string0', 'equals'>,                       0,      Test.Pass>(),
    check<O.Has<O1, 'a', string, 'extends->'>,                      0 | 1,  Test.Pass>(),

    check<O.Has<O, 'f', 0 | undefined | 'a', 'extends->'>,          1,      Test.Pass>(),
    check<O.Has<O, 'f', 0 | undefined | 'a', 'equals'>,             0,      Test.Pass>(),

    check<O.Has<O, 'a' | 'd', string, 'extends->'>,                 0 | 1,  Test.Pass>(),

    check<O.Has<O, 'a' | 'd', string | undefined, 'extends->'>,     1,      Test.Pass>(),
    check<O.Has<O, 'x' | 'd', string | undefined, 'extends->'>,     1,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// HASPATH

checks([
    check<O.HasPath<O, ['g', 'g', 'g'], object, 'extends->'>,       1,      Test.Pass>(),
    check<O.HasPath<O, ['g', 'g', 'g'], O, 'equals'>,               1,      Test.Pass>(),

    check<O.HasPath<O, ['g', 'g', 'g', 'a'], string, 'extends->'>,  1,      Test.Pass>(),
    check<O.HasPath<O, ['g', 'x', 'g'], object, 'extends->'>,       0,      Test.Pass>(),

    check<O.HasPath<O, [], any, 'extends->'>,                       1,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INCLUDES

checks([
    check<O.Includes<O, 'xxxx', 'extends->'>,   0,      Test.Pass>(),
    check<O.Includes<O, 'xxxx', 'equals'>,      0,      Test.Pass>(),

    check<O.Includes<O, string, 'extends->'>,   1,      Test.Pass>(),
    check<O.Includes<O, string, 'equals'>,      1,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INTERSECT

type INTERSECT_O_O1_DEFAULT = O

type INTERSECT_O_O1_EQUALS = {
         c : {a: 'a'} & {b: 'b'};
readonly e?: 'string1';
readonly f : 0;
         j : 'a' | undefined
};

checks([
    check<O.Intersect<O, O1, 'default'>,    INTERSECT_O_O1_DEFAULT, Test.Pass>(),
    check<O.Intersect<O, O1, 'equals'>,     INTERSECT_O_O1_EQUALS,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INTERSECTKEYS

type INTERSECTKEYS_O_DEFAULT = keyof O

type INTERSECTKEYS_O_EQUALS = 'c' | 'e' | 'f' | 'j';

checks([
    check<O.IntersectKeys<O, O1, 'default'>,    INTERSECTKEYS_O_DEFAULT,    Test.Pass>(),
    check<O.IntersectKeys<O, O1, 'equals'>,     INTERSECTKEYS_O_EQUALS,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// INVERT

const INVERT_SYM = Symbol('')

type O_INVERT = {
    A: 'Av',
    B: typeof INVERT_SYM,
    C: 42
}

type INVERT_O = {
    Av          : 'A';
    [INVERT_SYM]: 'B';
    42          : 'C';
};

checks([
    check<O.Invert<O_INVERT>,   INVERT_O,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// KEYS

checks([
    check<O.Keys<O>,    keyof O,    Test.Pass>(),
    check<O.Keys<O1>,   keyof O1,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MERGE

type MERGE_O_O1 = {
         a : string
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1;
         i : {a: string}
         j : 'a' | undefined
         k : {a: {b: string}}
}

type MERGE_O1_O = {
         a : string | number
         b : object
         c : {a: 'a'} & {b: 'b'}
         d?: never
readonly e?: 'string1'
readonly f : 0
         g : O1
         h : never
         i : {a: string}
         j : 'a' | undefined
         k : {a: {b: string, c: 0}}
};

type MERGE_O_O1_DEEP = {
         a : string
         b : number
         c : {a: 'a', b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O.Merge<O, O1, 'deep'>
         h?: 1
         i : {a: string}
         j : 'a' | undefined
         k : {a: {b: string, c: 0}}
};

checks([
    check<O.Merge<O, O1>,           MERGE_O_O1,         Test.Pass>(),
    check<O.Merge<O1, O>,           MERGE_O1_O,         Test.Pass>(),
    check<O.Merge<O, O1, 'deep'>,   MERGE_O_O1_DEEP,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MERGEUP

type O_MERGEUP = {
    a?: string
    c: {
        a?: string
        b?: number
    }
    d: 'hello' | undefined
    e: number
    f?: {
        a : string
        b?: number
    },
    g?: {
        a?: string
        b?: number
    }
    h: {
        a: number
    } | undefined
    i: {
        a: string
    } | undefined
    j: {
        a: {
            b?: {}
        }
    },
    k?: {[k: string]: string}
}

type O1_MERGEUP = {
    a: object | undefined
    b: number
    c: {
        a : object
        b?: object
        c : object
    }
    d: 'goodbye'
    e: string
    f?: {
        a : object
        b?: object
        c : object
    }
    h: {
        a: string
    }
    i: {
        a: number
    } | undefined
    j?: {
        a: {
            b?: {
                c: 1
            }
        }
    }
    k: {}
}

type MERGEUP_O_O1 = {
    a : string | object | undefined
    b : number
    c : {
        a?: string
        b?: number
    }
    d : 'hello' | undefined
    e : number
    f?: {
        a : string
        b?: number
    } | {
        a : object
        b?: object
        c : object
    },
    g?: {
        a?: string
        b?: number
    }
    h: {
        a: number
    } | undefined
    i: {
        a: string
    } | undefined
    j: {
        a: {
            b?: {}
        }
    },
    k: {} | {[k: string]: string}
};

type MERGEUP_O_O1_DEEP = {
    a : string | object | undefined
    b : number
    c : {
        a : string | object
        b?: number | object
        c : object
    }
    d : 'hello' | undefined
    e : number
    f?: {
        a : string | object;
        b?: number | object;
        c : object
    }
    g?: {
        a?: string
        b?: number
    }
    h: {
        a: number
    } | undefined
    i: {
        a: string
    } | undefined
    j: {
        a: {
            b?: {
                c: 1
            }
        }
    },
    k: {[k: string]: string}
};

checks([
    check<O.MergeUp<O_MERGEUP, O1_MERGEUP>,             MERGEUP_O_O1,       Test.Pass>(),
    check<O.MergeUp<O_MERGEUP, O1_MERGEUP, 'deep'>,     MERGEUP_O_O1_DEEP,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MODIFY

checks([
    check<O.Modify<{a?: string}, {a: A.x, b: 9}>,   {a: string, b: 9},  Test.Pass>(),
    check<O.Modify<{}, {a: A.x, b: 9}>,             {a: never, b: 9},   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NONNULLABLE

type NONNULLABLE_O_FLAT = {
         a : string
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a'
         k : {a: {b: string}}
}

type NONNULLABLE_O_J_FLAT = {
         a : string
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a'
         k : {a: {b: string}}
};

checks([
    check<O.NonNullable<O, keyof O, 'flat'>,                    NONNULLABLE_O_FLAT,                 Test.Pass>(),
    check<O.NonNullable<O, 'j', 'flat'>,                        NONNULLABLE_O_J_FLAT,               Test.Pass>(),
    check<O.Path<O.NonNullable<O, 'g', 'deep'>, ['g', 'g']>,    O.NonNullable<O, keyof O, 'deep'>,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NONNULLABLEKEYS

checks([
    check<O.NonNullableKeys<O>, 'a' | 'b' | 'c' | 'f' | 'g' | 'k',    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NULLABLE

type NULLABLE_O_FLAT = {
         a : string | undefined
         b : number | undefined
         c : {a: 'a'} & {b: 'b'} | undefined
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0 | undefined
         g : O | undefined
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}} | undefined
}

type NULLABLE_O_A_FLAT = {
         a : string | undefined
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
};

checks([
    check<O.Nullable<O, keyof O, 'flat'>,                   NULLABLE_O_FLAT,                Test.Pass>(),
    check<O.Nullable<O, 'a', 'flat'>,                       NULLABLE_O_A_FLAT,              Test.Pass>(),
    check<O.Path<O.Nullable<O, 'g', 'deep'>, ['g', 'g']>,   O.Nullable<O, keyof O, 'deep'>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NULLABLEKEYS

checks([
    check<O.NullableKeys<O>,    'd' | 'e' | 'h' | 'j',    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OMIT

type OMIT_O_DEH = {
    a: string
    b: number
    c: {a: 'a'} & {b: 'b'}
    readonly f: 0
    g: O
    j: 'a' | undefined
    k: {a: {b: string}}
};

checks([
    check<O.Omit<O, 'd' | 'e' | 'h'>,   OMIT_O_DEH, Test.Pass>(),
    check<O.Omit<O, keyof O>,           {},         Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OPTIONAL

type OPTIONAL_O_FLAT = {
         a?: string,
         b?: number
         c?: {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f?: 0
         g?: O
         h?: 1
         j?: 'a'
         k?: {a: {b: string}}
}

type OPTIONAL_O_A_FLAT = {
         a?: string
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
};

checks([
    check<O.Optional<O, keyof O, 'flat'>,                   OPTIONAL_O_FLAT,                Test.Pass>(),
    check<O.Optional<O, 'a', 'flat'>,                       OPTIONAL_O_A_FLAT,              Test.Pass>(),
    check<O.Path<O.Optional<O, 'g', 'deep'>, ['g', 'g']>,   O.Optional<O, keyof O, 'deep'>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OPTIONALKEYS

checks([
    check<O.OptionalKeys<O>,    'd' | 'e' | 'h',    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OVERWRITE

checks([
    check<O.Overwrite<{a: string}, {a: number, b: any}>,    {a: number},    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PATH

checks([
    check<O.Path<O, ['g', 'g', 'g']>,       O['g'], Test.Pass>(),
    check<O.Path<O, ['g', 'g', 'g', 'a']>,  string, Test.Pass>(),
    check<O.Path<O, ['g', 'x', 'g']>,       never,  Test.Pass>(),
    check<O.Path<O, []>,                    O,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PATHS

type O_PATHS = {
    a: {
        a: boolean
    }
    b: {
        a: {
            a: {}
        }
        b: {}
    }
};

type Index = (string | number | symbol);

checks([
    check<O.Paths<any>,     Index[],                                                            Test.Pass>(),
    check<O.Paths<O_PATHS>, T.NonNullable<['a'?, 'a'?] | ['b'?, 'a'?, 'a'?] | ['b'?, 'b'?]>,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PATHUP

type O_PATHUP = {
    b: {
        c: {
            d: 'bcd'
        }
        b: 'bb'
    }
} | {
    a: {
        b: boolean | {
            c: 'abc'
        }
    }
};

checks([
    check<O.PathUp<O_PATHUP, ['b', 'c', 'x']>,      never,                          Test.Pass>(),
    check<O.PathUp<O_PATHUP, ['b', 'c', 'd']>,      'bcd',                          Test.Pass>(),
    check<O.PathUp<O_PATHUP, ['a', 'b', 'c']>,      'abc',                          Test.Pass>(),
    check<O.PathUp<O_PATHUP, ['a' | 'b', 'b']>,     boolean | 'bb' | {c: 'abc'},    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PATHVALID

type O_PATHVALID = {
    a: {
        a: {}
    }
    b: {
        a: {
            a: {}
        }
        b: string[]
    }
};

checks([
    check<O.PathValid<any,          ['a', 'a']>,        ['a', 'a'],         Test.Pass>(),
    check<O.PathValid<O_PATHVALID,  ['a', 'a']>,        ['a', 'a'],         Test.Pass>(),
    check<O.PathValid<O_PATHVALID,  ['a', 'x']>,        ['a', never],       Test.Pass>(),
    check<O.PathValid<O_PATHVALID,  ['b', 'a', 'a']>,   ['b', 'a', 'a'],    Test.Pass>(),
    check<O.PathValid<O_PATHVALID,  ['b', 'b', 0]>,     ['b', 'b', 0],      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PICK

type PICK_O_DEF = {
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
};

checks([
    check<O.Pick<O, 'd' | 'e' | 'f'>,   PICK_O_DEF, Test.Pass>(),
    check<O.Pick<O, keyof O>,           O,          Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// READONLY

type READONLY_O_FLAT = {
readonly a : string,
readonly b : number
readonly c : {a: 'a'} & {b: 'b'}
readonly d?: 'string0'
readonly e?: 'string1'
readonly f : 0
readonly g : O
readonly h?: 1
readonly j : 'a' | undefined
readonly k : {a: {b: string}}
}

type READONLY_O_A_FLAT = {
readonly a : string,
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
};

checks([
    check<O.Readonly<O, keyof O, 'flat'>,                   READONLY_O_FLAT,                Test.Pass>(),
    check<O.Readonly<O, 'a', 'flat'>,                       READONLY_O_A_FLAT,              Test.Pass>(),
    check<O.Path<O.Readonly<O, 'g', 'deep'>, ['g', 'g']>,   O.Readonly<O, keyof O, 'deep'>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// READONLYKEYS

checks([
    check<O.ReadonlyKeys<O>,    'e' | 'f',  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RECORD

type RECORD_AB_A_OPTR = {
    readonly a?: string
    readonly b?: string
}

type RECORD_AB_A_OPTW = {
    a?: string
    b?: string
}

type RECORD_AB_A_REQR = {
    readonly a: string
    readonly b: string
}

type RECORD_AB_A_REQW = {
    a: string
    b: string
};

checks([
    check<O.Record<'a' | 'b', string, ['?', 'R']>,  RECORD_AB_A_OPTR,   Test.Pass>(),
    check<O.Record<'a' | 'b', string, ['?', 'W']>,  RECORD_AB_A_OPTW,   Test.Pass>(),
    check<O.Record<'a' | 'b', string, ['!', 'R']>,  RECORD_AB_A_REQR,   Test.Pass>(),
    check<O.Record<'a' | 'b', string, ['!', 'W']>,  RECORD_AB_A_REQW,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REPLACE

type REPLACE_STRING_NUMBER = {
    a: number
    b: number
    c: {a: 'a'} & {b: 'b'}
    d?: 'string0'
    readonly e?: 'string1'
    readonly f: 0
    g: O
    h?: 1
    j: 'a' | undefined
    k: {
        a: {
            b: string
        };
    } | undefined
};

checks([
    check<O.Replace<O, string, number>, REPLACE_STRING_NUMBER,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REQUIRED

type REQUIRED_O_FLAT = {
         a: string,
         b: number
         c: {a: 'a'} & {b: 'b'}
         d: 'string0'
readonly e: 'string1'
readonly f: 0
         g: O
         h: 1
         j: 'a' | undefined
         k: {a: {b: string}}
}

type REQUIRED_O_D_FLAT = {
         a : string,
         b : number
         c : {a: 'a'} & {b: 'b'}
         d : 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
};

checks([
    check<O.Required<O, keyof O, 'flat'>,                   REQUIRED_O_FLAT,                Test.Pass>(),
    check<O.Required<O, 'd', 'flat'>,                       REQUIRED_O_D_FLAT,              Test.Pass>(),
    check<O.Path<O.Required<O, 'g', 'deep'>, ['g', 'g']>,   O.Required<O, keyof O, 'deep'>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// REQUIREDKEYS

checks([
    check<O.RequiredKeys<O>,    'a' | 'b' | 'c' | 'f' | 'g' | 'j' | 'k',    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SELECT

type SELECT_O_DEFAULT = {
         a: string
         d?: 'string0'
readonly e?: 'string1'
         j: 'a' | undefined
}

type SELECT_O_EQUALS = {
         a : string,
};

checks([
    check<O.Select<O, string, 'extends->'>,     SELECT_O_DEFAULT,   Test.Pass>(),
    check<O.Select<O, string, 'equals'>,        SELECT_O_EQUALS,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SELECTKEYS

type SELECTKEYS_O_DEFAULT = 'a' | 'd' | 'e' | 'j'

type SELECTKEYS_O_EQUALS = 'a';

checks([
    check<O.SelectKeys<O, string, 'extends->'>,     SELECTKEYS_O_DEFAULT,  Test.Pass>(),
    check<O.SelectKeys<O, string, 'equals'>,        SELECTKEYS_O_EQUALS,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LISTOF

type O_LISTOF = {
    '0': 1
    '2': 3
    '3': never
    '5': 5
    '6': 6
}

type LISTOF_O = [1, 3, never, 5, 6];

checks([
    check<O.ListOf<O_LISTOF>,    LISTOF_O,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNIONIZE

type O_UNIONIZE = {
    a : 'a'
    b : 'b'
    c : never
    d?: 1
}

type O1_UNIONIZE = {
    a : 'b'
    b?: 'x'
    c : 42
    d : {}
}

type UNIONIZE_O_O1 = {
    a : 'a' | 'b';
    b : 'b' | 'x' | undefined;
    c : 42;
    d?: {} | 1;
};

checks([
    check<O.Unionize<O_UNIONIZE, O1_UNIONIZE>,  UNIONIZE_O_O1,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNIONOF

type O_UNIONOF = {
    a: 'a'
    b: 'b'
    c: never
    d: 1
}

type UNIONOF_O = 'a' | 'b' | 1;

checks([
    check<O.UnionOf<O_UNIONOF>, UNIONOF_O,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UPDATE

type O_UPDATE = {
    a?: 'a'
}

type UPDATE_O = {
    a?: 'xxxx'
    b : 'xxxx'
};

type UPDATE_O_X = {
    a?: 'a'
    b : never
};

checks([
    check<O.Update<O_UPDATE, 'a' | 'b', 'xxxx'>,    UPDATE_O,       Test.Pass>(),
    check<O.Update<O_UPDATE, 'a' | 'b', A.x>,       UPDATE_O_X,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// WRITABLE

type WRITABLE_O_FLAT = {
    a : string,
    b : number
    c : {a: 'a'} & {b: 'b'}
    d?: 'string0'
    e?: 'string1'
    f : 0
    g : O
    h?: 1
    j : 'a' | undefined
    k : {a: {b: string}}
}

type WRITABLE_O_E_FLAT = {
    a : string,
    b : number
    c : {a: 'a'} & {b: 'b'}
    d?: 'string0'
    e?: 'string1'
readonly f : 0
    g : O
    h?: 1
    j : 'a' | undefined
    k : {a: {b: string}}
};

checks([
    check<O.Writable<O, keyof O, 'flat'>,                   WRITABLE_O_FLAT,                Test.Pass>(),
    check<O.Writable<O, 'e', 'flat'>,                       WRITABLE_O_E_FLAT,              Test.Pass>(),
    check<O.Path<O.Writable<O, 'g', 'deep'>, ['g', 'g']>,   O.Writable<O, keyof O, 'deep'>, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// WRITABLEKEYS

checks([
    check<O.WritableKeys<O>,    'a' | 'b' | 'c' | 'd' | 'g' | 'h' | 'j' | 'k',  Test.Pass>(),
])

// ///////////////////////////////////////////////////////////////////////////////////////
// OBJECT.P //////////////////////////////////////////////////////////////////////////////

type OP = { // A binary tree
    a: {
        a: string
        b: {
            a: 'aba'
            b: 'abb'
        }
    }
    b?: {
        a: {
            a: 'baa'
            b: 'bab'
        }
        b: {
            a: 'bba'
            b: 'bbb'
        }
    }
    c?: string
};

type OP_UNIONS = {
    a: {
        a: string
        b: {
            a: 'aba'
            b: 'abb'
        }
    } | 'a'
    b?: {
        a: {
            a: 'baa'
            b: 'bab'
        }
        b: {
            a: 'bba'
            b: 'bbb'
        }
    } | 'b'
    c?: string
};

// ---------------------------------------------------------------------------------------
// P.MERGE

type O_PMERGE = {
    a: {
        a: string
        b: {
            a: 'aba'
            b: 'abb'
            x: string
        }
    }
    b?: {
        a: {
            a: 'baa'
            b: 'bab'
        }
        b: {
            a: 'bba'
            b: 'bbb'
            x: string
        }
    }
    c?: string
};

type O_PMERGE_UNIONS = {
    a: {
        a: string
        b: {
            a: 'aba'
            b: 'abb'
            x: string
        }
    } | 'a'
    b?: {
        a: {
            a: 'baa'
            b: 'bab'
        }
        b: {
            a: 'bba'
            b: 'bbb'
            x: string
        }
    } | 'b'
    c?: string
};

checks([
    check<O.P.Merge<OP, ['a' | 'b', 'b'], {x: string}>,             O_PMERGE,           Test.Pass>(),
    check<O.P.Merge<OP_UNIONS,  ['a' | 'b', 'b'], {x: string}>,     O_PMERGE_UNIONS,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.OMIT

type O_POMIT = {
    a: {
        b: {
            a: 'aba'
            b: 'abb'
        }
    }
    b?: {
        b: {
            a: 'bba'
            b: 'bbb'
        }
    }
    c?: string
};

type O_POMIT_UNIONS = {
    a: {
        b: {
            a: 'aba'
            b: 'abb'
        }
    } | 'a'
    b?: {
        b: {
            a: 'bba'
            b: 'bbb'
        }
    } | 'b'
    c?: string
};

checks([
    check<O.P.Omit<OP, ['a' | 'b', 'a']>,           O_POMIT,            Test.Pass>(),
    check<O.P.Omit<OP_UNIONS,   ['a' | 'b', 'a']>,  O_POMIT_UNIONS,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.PICK

type O_PPICK = {
    a: {
        a: string
    }
    b?: {
        a: {
            a: 'baa'
            b: 'bab'
        }
    }
};

type O_PPICK_UNIONS = {
    a: {
        a: string
    } | 'a'
    b?: {
        a: {
            a: 'baa'
            b: 'bab'
        }
    } | 'b'
};

checks([
    check<O.P.Pick<OP, ['a' | 'b', 'a']>,           O_PPICK,            Test.Pass>(),
    check<O.P.Pick<OP_UNIONS,   ['a' | 'b', 'a']>,  O_PPICK_UNIONS,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.READONLY

type O_PREADONLY = {
    a: {
        readonly a: string
        b: {
            a: 'aba'
            b: 'abb'
        }
    }
    b?: {
        readonly a: {
            a: 'baa'
            b: 'bab'
        }
        b: {
            a: 'bba'
            b: 'bbb'
        }
    }
    c?: string
};

type O_PREADONLY_UNIONS = {
    a: {
        readonly a: string
        b: {
            a: 'aba'
            b: 'abb'
        }
    } | 'a'
    b?: {
        readonly a: {
            a: 'baa'
            b: 'bab'
        }
        b: {
            a: 'bba'
            b: 'bbb'
        }
    } | 'b'
    c?: string
};

checks([
    check<O.P.Readonly<OP, ['a' | 'b', 'a']>,           O_PREADONLY,            Test.Pass>(),
    check<O.P.Readonly<OP_UNIONS, ['a' | 'b', 'a']>,    O_PREADONLY_UNIONS,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// P.UPDATE

type O_PUPDATE = {
    a: {
        a: 'x'
        b: {
            a: 'aba'
            b: 'abb'
        }
    }
    b?: {
        a: 'x'
        b: {
            a: 'bba'
            b: 'bbb'
        }
    }
    c?: string
};

type O_PUPDATE_UNIONS = {
    a: {
        a: 'x'
        b: {
            a: 'aba'
            b: 'abb'
        }
    } | 'a'
    b?: {
        a: 'x'
        b: {
            a: 'bba'
            b: 'bbb'
        }
    } | 'b'
    c?: string
};

checks([
    check<O.P.Update<OP, ['a' | 'b', 'a'], 'x'>,            O_PUPDATE,          Test.Pass>(),
    check<O.P.Update<OP_UNIONS, ['a' | 'b', 'a'], 'x'>,     O_PUPDATE_UNIONS,   Test.Pass>(),
])
