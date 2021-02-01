import {Test, Community} from '../sources'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// COMMUNITY /////////////////////////////////////////////////////////////////////////////

type O = {
    a: string,
    b: number;
    c: {a: 'a'} & {b: 'b'};
    d?: 'string0';
    readonly e?: 'string1';
    readonly f: 0;
    g: O; // recursion
    h?: 1;
    j: 'a' | undefined;
    k: {a: {b: string}};
};

type O1 = {
    a: string | number;
    b: object;
    c: {a: 'a'} & {b: 'b'};
    d?: never;
    readonly e?: 'string1';
    readonly f: 0;
    g: O1; // recursion
    h: never;
    i: {a: string};
    j: 'a' | undefined;
    k: {a: {b: string, c: 0}};
}

// ---------------------------------------------------------------------------------------
// INCLUDESDEEP

type O_INCLUDESDEEP = {
    a: {
        b: {
            x: number;
       };
   };
}

checks([
    check<Community.IncludesDeep<O_INCLUDESDEEP, number, 'default', 3>, 1, Test.Pass>(),
    check<Community.IncludesDeep<O_INCLUDESDEEP, number, 'default', 0>, 0, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISLITERAL

checks([
    check<Community.IsLiteral<1 | 2>, 1, Test.Pass>(),
    check<Community.IsLiteral<1 | '2'>, 0 | 1, Test.Pass>(),
    check<Community.IsLiteral<'x', string>, 1, Test.Pass>(),
    check<Community.IsLiteral<1 | 'x', number>, 0 | 1, Test.Pass>(),
    check<Community.IsLiteral<number, number>, 0, Test.Pass>(),
    check<Community.IsLiteral<string, string>, 0, Test.Pass>(),
])
