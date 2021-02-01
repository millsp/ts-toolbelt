import {Test, N} from '../sources'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// NUMBER ////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// ABSOLUTE

checks([
    check<N.Absolute<0 | -1>, 0 | 1, Test.Pass>(),
    check<N.Absolute<0>, 0, Test.Pass>(),
    check<N.Absolute<10>, 10, Test.Pass>(),
    check<N.Absolute<-10>, 10, Test.Pass>(),
    check<N.Absolute<1000>, number, Test.Pass>(),
    check<N.Absolute<number>, number, Test.Pass>(),
    check<N.Absolute<any>, number, Test.Pass>(),
    check<N.Absolute<never>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ADD

checks([
    check<N.Add<9 | 8, 10 | 9>, 17 | 18 | 19, Test.Pass>(),
    check<N.Add<9, 10>, 19, Test.Pass>(),
    check<N.Add<21, 10>, 31, Test.Pass>(),
    check<N.Add<-10, 10>, 0, Test.Pass>(),
    check<N.Add<10, -10>, 0, Test.Pass>(),
    check<N.Add<100, 10>, number, Test.Pass>(),
    check<N.Add<number, 10>, number, Test.Pass>(),
    check<N.Add<any, 10>, number, Test.Pass>(),
    check<N.Add<never, 10>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// GREATER

checks([
    check<N.Greater<0 | 1, 0>, 0 | 1, Test.Pass>(),
    check<N.Greater<9, 10>, 0, Test.Pass>(),
    check<N.Greater<21, 13>, 1, Test.Pass>(),
    check<N.Greater<-10, 10>, 0, Test.Pass>(),
    check<N.Greater<1000, 10>, 0 | 1, Test.Pass>(),
    check<N.Greater<number, 10>, 0 | 1, Test.Pass>(),
    check<N.Greater<any, 10>, 0 | 1, Test.Pass>(),
    check<N.Greater<never, 10>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// GREATEREQ

checks([
    check<N.GreaterEq<-1 | 1, 0>, 0 | 1, Test.Pass>(),
    check<N.GreaterEq<9, 10>, 0, Test.Pass>(),
    check<N.GreaterEq<21, 10>, 1, Test.Pass>(),
    check<N.GreaterEq<-10, 10>, 0, Test.Pass>(),
    check<N.GreaterEq<1000, 1000>, 1, Test.Pass>(),
    check<N.GreaterEq<number, 10>, 0 | 1, Test.Pass>(),
    check<N.GreaterEq<any, 10>, 0 | 1, Test.Pass>(),
    check<N.GreaterEq<never, 10>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISNEGATIVE

checks([
    check<N.IsNegative<0 | -1>, 0 | 1, Test.Pass>(),
    check<N.IsNegative<0>, 0, Test.Pass>(),
    check<N.IsNegative<10>, 0, Test.Pass>(),
    check<N.IsNegative<-10>, 1, Test.Pass>(),
    check<N.IsNegative<1000>, 0 | 1, Test.Pass>(),
    check<N.IsNegative<number>, 0 | 1, Test.Pass>(),
    check<N.IsNegative<any>, 0 | 1, Test.Pass>(),
    check<N.IsNegative<never>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISPOSITIVE

checks([
    check<N.IsPositive<-1 | 1>, 0 | 1, Test.Pass>(),
    check<N.IsPositive<0>, 0, Test.Pass>(),
    check<N.IsPositive<10>, 1, Test.Pass>(),
    check<N.IsPositive<-10>, 0, Test.Pass>(),
    check<N.IsPositive<1000>, 0 | 1, Test.Pass>(),
    check<N.IsPositive<number>, 0 | 1, Test.Pass>(),
    check<N.IsPositive<any>, 0 | 1, Test.Pass>(),
    check<N.IsPositive<never>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISZERO

checks([
    check<N.IsZero<0 | -1>, 0 | 1, Test.Pass>(),
    check<N.IsZero<0>, 1, Test.Pass>(),
    check<N.IsZero<10>, 0, Test.Pass>(),
    check<N.IsZero<-10>, 0, Test.Pass>(),
    check<N.IsZero<1000>, 0 | 1, Test.Pass>(),
    check<N.IsZero<number>, 0 | 1, Test.Pass>(),
    check<N.IsZero<any>, 0 | 1, Test.Pass>(),
    check<N.IsZero<never>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LOWER

checks([
    check<N.Lower<-1 | 1, 0>, 0 | 1, Test.Pass>(),
    check<N.Lower<10, 11>, 1, Test.Pass>(),
    check<N.Lower<21, 20>, 0, Test.Pass>(),
    check<N.Lower<-10, 10>, 1, Test.Pass>(),
    check<N.Lower<1000, 10>, 0 | 1, Test.Pass>(),
    check<N.Lower<number, 10>, 0 | 1, Test.Pass>(),
    check<N.Lower<any, 10>, 0 | 1, Test.Pass>(),
    check<N.Lower<never, 10>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LOWEREQ

checks([
    check<N.LowerEq<0 | 1, 0>, 0 | 1, Test.Pass>(),
    check<N.LowerEq<9, 10>, 1, Test.Pass>(),
    check<N.LowerEq<21, 10>, 0, Test.Pass>(),
    check<N.LowerEq<-10, 10>, 1, Test.Pass>(),
    check<N.LowerEq<1000, 1000>, 1, Test.Pass>(),
    check<N.LowerEq<number, 10>, 0 | 1, Test.Pass>(),
    check<N.LowerEq<any, 10>, 0 | 1, Test.Pass>(),
    check<N.LowerEq<never, 10>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NEGATE

checks([
    check<N.Negate<0 | 1>, 0 | -1, Test.Pass>(),
    check<N.Negate<9>, -9, Test.Pass>(),
    check<N.Negate<21>, -21, Test.Pass>(),
    check<N.Negate<-10>, 10, Test.Pass>(),
    check<N.Negate<1000>, number, Test.Pass>(),
    check<N.Negate<number>, number, Test.Pass>(),
    check<N.Negate<any>, number, Test.Pass>(),
    check<N.Negate<never>, never, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RANGE

checks([
    check<N.Range<-3, 5, '->'>, [-3, -2, -1, 0, 1, 2, 3, 4, 5], Test.Pass>(),
    check<N.Range<-3, 5, '<-'>, [5, 4, 3, 2, 1, 0, -1, -2, -3], Test.Pass>(),
    check<N.Range<0, 0, '->'>, [0], Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// SUB

checks([
    check<N.Sub<9 | 8, 10 | 9>, -1 | -2 | 0, Test.Pass>(),
    check<N.Sub<9, 10>, -1, Test.Pass>(),
    check<N.Sub<21, 10>, 11, Test.Pass>(),
    check<N.Sub<-10, 10>, -20, Test.Pass>(),
    check<N.Sub<10, -10>, 20, Test.Pass>(),
    check<N.Sub<1000, 10>, number, Test.Pass>(),
    check<N.Sub<number, 10>, number, Test.Pass>(),
    check<N.Sub<any, 10>, number, Test.Pass>(),
    check<N.Sub<never, 10>, never, Test.Pass>(),
])
