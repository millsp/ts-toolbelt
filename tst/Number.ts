// /* eslint-disable fp/no-class */
// /* eslint-disable no-implicit-coercion */
import {Test, N} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// NUMBER ////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// ABSOLUTE

checks([
    check<N.Absolute<'0'>,      '0',    Test.Pass>(),
    check<N.Absolute<'10'>,     '10',   Test.Pass>(),
    check<N.Absolute<'-10'>,    '10',   Test.Pass>(),
    check<N.Absolute<'100'>,    string, Test.Pass>(),
    check<N.Absolute<string>,   string, Test.Pass>(),
    check<N.Absolute<any>,      any,    Test.Pass>(),
    check<N.Absolute<never>,    never,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// BOOLEANOF

checks([
    check<N.BooleanOf<'0'>,     false,      Test.Pass>(),
    check<N.BooleanOf<'10'>,    true,       Test.Pass>(),
    check<N.BooleanOf<'-10'>,   true,       Test.Pass>(),
    check<N.BooleanOf<'100'>,   boolean,    Test.Pass>(),
    check<N.BooleanOf<string>,  boolean,    Test.Pass>(),
    check<N.BooleanOf<any>,     boolean,    Test.Pass>(),
    check<N.BooleanOf<never>,   false,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CLAMP

checks([
    check<N.Clamp<'9', '10', '20'>,     '10',   Test.Pass>(),
    check<N.Clamp<'21', '10', '20'>,    '20',   Test.Pass>(),
    check<N.Clamp<'-10', '10', '20'>,   '10',   Test.Pass>(),
    check<N.Clamp<'100', '10', '20'>,   string, Test.Pass>(),
    check<N.Clamp<string, '10', '20'>,  string, Test.Pass>(),
    check<N.Clamp<any, '10', '20'>,     any,    Test.Pass>(),
    check<N.Clamp<never, '10', '20'>,   '10',   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// GREATER

checks([
    check<N.Greater<'9', '10'>,     false,      Test.Pass>(),
    check<N.Greater<'21', '13'>,    true,       Test.Pass>(),
    check<N.Greater<'-10', '10'>,   false,      Test.Pass>(),
    check<N.Greater<'100', '10'>,   boolean,    Test.Pass>(),
    check<N.Greater<string, '10'>,  boolean,    Test.Pass>(),
    check<N.Greater<any, '10'>,     boolean,    Test.Pass>(),
    check<N.Greater<never, '10'>,   false,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// GREATEREQ

checks([
    check<N.GreaterEq<'9', '10'>,       false,      Test.Pass>(),
    check<N.GreaterEq<'21', '10'>,      true,       Test.Pass>(),
    check<N.GreaterEq<'-10', '10'>,     false,      Test.Pass>(),
    check<N.GreaterEq<'100', '100'>,    true,       Test.Pass>(),
    check<N.GreaterEq<string, '10'>,    boolean,    Test.Pass>(),
    check<N.GreaterEq<any, '10'>,       boolean,    Test.Pass>(),
    check<N.GreaterEq<never, '10'>,     false,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISNEGATIVE

checks([
    check<N.IsNegative<'0'>,    false,      Test.Pass>(),
    check<N.IsNegative<'10'>,   false,      Test.Pass>(),
    check<N.IsNegative<'-10'>,  true,       Test.Pass>(),
    check<N.IsNegative<'100'>,  boolean,    Test.Pass>(),
    check<N.IsNegative<string>, boolean,    Test.Pass>(),
    check<N.IsNegative<any>,    boolean,    Test.Pass>(),
    check<N.IsNegative<never>,  false,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISPOSITIVE

checks([
    check<N.IsPositive<'0'>,    false,      Test.Pass>(),
    check<N.IsPositive<'10'>,   true,       Test.Pass>(),
    check<N.IsPositive<'-10'>,  false,      Test.Pass>(),
    check<N.IsPositive<'100'>,  boolean,    Test.Pass>(),
    check<N.IsPositive<string>, boolean,    Test.Pass>(),
    check<N.IsPositive<any>,    boolean,    Test.Pass>(),
    check<N.IsPositive<never>,  false,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISZERO

checks([
    check<N.IsZero<'0'>,    true,       Test.Pass>(),
    check<N.IsZero<'10'>,   false,      Test.Pass>(),
    check<N.IsZero<'-10'>,  false,      Test.Pass>(),
    check<N.IsZero<'100'>,  boolean,    Test.Pass>(),
    check<N.IsZero<string>, boolean,    Test.Pass>(),
    check<N.IsZero<any>,    boolean,    Test.Pass>(),
    check<N.IsZero<never>,  false,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LOWER

checks([
    check<N.Lower<'10', '11'>,      true,       Test.Pass>(),
    check<N.Lower<'21', '20'>,      false,      Test.Pass>(),
    check<N.Lower<'-10', '10'>,     true,       Test.Pass>(),
    check<N.Lower<'100', '10'>,     boolean,    Test.Pass>(),
    check<N.Lower<string, '10'>,    boolean,    Test.Pass>(),
    check<N.Lower<any, '10'>,       boolean,    Test.Pass>(),
    check<N.Lower<never, '10'>,     true,       Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LOWEREQ

checks([
    check<N.LowerEq<'9', '10'>,     true,       Test.Pass>(),
    check<N.LowerEq<'21', '10'>,    false,      Test.Pass>(),
    check<N.LowerEq<'-10', '10'>,   true,       Test.Pass>(),
    check<N.LowerEq<'100', '100'>,  true,       Test.Pass>(),
    check<N.LowerEq<string, '10'>,  boolean,    Test.Pass>(),
    check<N.LowerEq<any, '10'>,     boolean,    Test.Pass>(),
    check<N.LowerEq<never, '10'>,   true,       Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MAX

checks([
    check<N.Max<'-1' | '9' | '10'>,     '10',   Test.Pass>(),
    check<N.Max<'-1' | '9' | 'xxxx'>,   string, Test.Pass>(),
    check<N.Max<string>,                string, Test.Pass>(),
    check<N.Max<any>,                   any,    Test.Pass>(),
    check<N.Max<never>,                 '-1',   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MIN

checks([
    check<N.Min<'1' | '9' | '-10'>,     '-10',  Test.Pass>(),
    check<N.Min<'-1' | '9' | 'xxxx'>,   string, Test.Pass>(),
    check<N.Min<string>,                string, Test.Pass>(),
    check<N.Min<any>,                   any,    Test.Pass>(),
    check<N.Min<never>,                 '1',    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MINUS

checks([
    check<N.Minus<'9', '10'>,       '-1',   Test.Pass>(),
    check<N.Minus<'21', '10'>,      '11',   Test.Pass>(),
    check<N.Minus<'-10', '10'>,     '-20',  Test.Pass>(),
    check<N.Minus<'10', '-10'>,     '20',   Test.Pass>(),
    check<N.Minus<'100', '10'>,     string, Test.Pass>(),
    check<N.Minus<string, '10'>,    string, Test.Pass>(),
    check<N.Minus<any, '10'>,       any,    Test.Pass>(),
    check<N.Minus<never, '10'>,     never,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NEGATE

checks([
    check<N.Negate<'9'>,    '-9',   Test.Pass>(),
    check<N.Negate<'21'>,   '-21',  Test.Pass>(),
    check<N.Negate<'-10'>,  '10',   Test.Pass>(),
    check<N.Negate<'100'>,  string, Test.Pass>(),
    check<N.Negate<string>, string, Test.Pass>(),
    check<N.Negate<any>,    any,    Test.Pass>(),
    check<N.Negate<never>,  '0',    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PLUS

checks([
    check<N.Plus<'9', '10'>,    '19',   Test.Pass>(),
    check<N.Plus<'21', '10'>,   '31',   Test.Pass>(),
    check<N.Plus<'-10', '10'>,  '0',    Test.Pass>(),
    check<N.Plus<'10', '-10'>,  '0',    Test.Pass>(),
    check<N.Plus<'100', '10'>,  string, Test.Pass>(),
    check<N.Plus<string, '10'>, string, Test.Pass>(),
    check<N.Plus<any, '10'>,    any,    Test.Pass>(),
    check<N.Plus<never, '10'>,  never,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RANGE

checks([
    check<N.Range<'-3', '5', '->'>, ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5'],   Test.Pass>(),
    check<N.Range<'-3', '5', '<-'>, ['5', '4', '3', '2', '1', '0', '-1', '-2', '-3'],   Test.Pass>(),
    check<N.Range<'0', '0', '->'>,  ['0'],                                              Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// STRINGOF

checks([
    check<N.StringOf<9>,        '9',    Test.Pass>(),
    check<N.StringOf<21>,       '21',   Test.Pass>(),
    check<N.StringOf<-10>,      '-10',  Test.Pass>(),
    check<N.StringOf<10>,       '10',   Test.Pass>(),
    check<N.StringOf<100>,      string, Test.Pass>(),
    check<N.StringOf<number>,   string, Test.Pass>(),
    check<N.StringOf<any>,      string, Test.Pass>(),
    check<N.StringOf<never>,    never,  Test.Pass>(),
])
