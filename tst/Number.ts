import {Test, N, I} from '../src/ts-toolbelt'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// NUMBER ////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// ABSOLUTE

checks([
    check<N.Absolute<'-1px', 's', I.Maps.Pixel>,    '1px',      Test.Pass>(),
    check<N.Absolute<'0' | '-1'>,                   '0' | '1',  Test.Pass>(),
    check<N.Absolute<'0'>,                          '0',        Test.Pass>(),
    check<N.Absolute<'10'>,                         '10',       Test.Pass>(),
    check<N.Absolute<'-10'>,                        '10',       Test.Pass>(),
    check<N.Absolute<'1000'>,                       string,     Test.Pass>(),
    check<N.Absolute<string>,                       string,     Test.Pass>(),
    check<N.Absolute<any>,                          string,     Test.Pass>(),
    check<N.Absolute<never>,                        never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// GREATER

checks([
    check<N.Greater<'9px', '10px', I.Maps.Pixel>,   0,          Test.Pass>(),
    check<N.Greater<'0' | '1', '0'>,                0 | 1,      Test.Pass>(),
    check<N.Greater<'9', '10'>,                     0,          Test.Pass>(),
    check<N.Greater<'21', '13'>,                    1,          Test.Pass>(),
    check<N.Greater<'-10', '10'>,                   0,          Test.Pass>(),
    check<N.Greater<'1000', '10'>,                  0 | 1,      Test.Pass>(),
    check<N.Greater<string, '10'>,                  0 | 1,      Test.Pass>(),
    check<N.Greater<any, '10'>,                     0 | 1,      Test.Pass>(),
    check<N.Greater<never, '10'>,                   never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// GREATEREQ

checks([
    check<N.GreaterEq<'9px', '10px', I.Maps.Pixel>,     0,          Test.Pass>(),
    check<N.GreaterEq<'-1' | '1', '0'>,                 0 | 1,      Test.Pass>(),
    check<N.GreaterEq<'9', '10'>,                       0,          Test.Pass>(),
    check<N.GreaterEq<'21', '10'>,                      1,          Test.Pass>(),
    check<N.GreaterEq<'-10', '10'>,                     0,          Test.Pass>(),
    check<N.GreaterEq<'1000', '1000'>,                  1,          Test.Pass>(),
    check<N.GreaterEq<string, '10'>,                    0 | 1,      Test.Pass>(),
    check<N.GreaterEq<any, '10'>,                       0 | 1,      Test.Pass>(),
    check<N.GreaterEq<never, '10'>,                     never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISNEGATIVE

checks([
    check<N.IsNegative<'-10px', I.Maps.Pixel>,     1,          Test.Pass>(),
    check<N.IsNegative<'0' | '-1'>,                     0 | 1,      Test.Pass>(),
    check<N.IsNegative<'0'>,                            0,          Test.Pass>(),
    check<N.IsNegative<'10'>,                           0,          Test.Pass>(),
    check<N.IsNegative<'-10'>,                          1,          Test.Pass>(),
    check<N.IsNegative<'1000'>,                         0 | 1,      Test.Pass>(),
    check<N.IsNegative<string>,                         0 | 1,      Test.Pass>(),
    check<N.IsNegative<any>,                            0 | 1,      Test.Pass>(),
    check<N.IsNegative<never>,                          never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISPOSITIVE

checks([
    check<N.IsPositive<'-10px', I.Maps.Pixel>,      0,          Test.Pass>(),
    check<N.IsPositive<'-1' | '1'>,                 0 | 1,      Test.Pass>(),
    check<N.IsPositive<'0'>,                        0,          Test.Pass>(),
    check<N.IsPositive<'10'>,                       1,          Test.Pass>(),
    check<N.IsPositive<'-10'>,                      0,          Test.Pass>(),
    check<N.IsPositive<'1000'>,                     0 | 1,      Test.Pass>(),
    check<N.IsPositive<string>,                     0 | 1,      Test.Pass>(),
    check<N.IsPositive<any>,                        0 | 1,      Test.Pass>(),
    check<N.IsPositive<never>,                      never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// ISZERO

checks([
    check<N.IsZero<'0px', I.Maps.Pixel>,    1,          Test.Pass>(),
    check<N.IsZero<'0' | '-1'>,             0 | 1,      Test.Pass>(),
    check<N.IsZero<'0'>,                    1,          Test.Pass>(),
    check<N.IsZero<'10'>,                   0,          Test.Pass>(),
    check<N.IsZero<'-10'>,                  0,          Test.Pass>(),
    check<N.IsZero<'1000'>,                 0 | 1,      Test.Pass>(),
    check<N.IsZero<string>,                 0 | 1,      Test.Pass>(),
    check<N.IsZero<any>,                    0 | 1,      Test.Pass>(),
    check<N.IsZero<never>,                  never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LOWER

checks([
    check<N.Lower<'9px', '10px', I.Maps.Pixel>,     1,          Test.Pass>(),
    check<N.Lower<'-1' | '1', '0'>,                 0 | 1,      Test.Pass>(),
    check<N.Lower<'10', '11'>,                      1,          Test.Pass>(),
    check<N.Lower<'21', '20'>,                      0,          Test.Pass>(),
    check<N.Lower<'-10', '10'>,                     1,          Test.Pass>(),
    check<N.Lower<'1000', '10'>,                    0 | 1,      Test.Pass>(),
    check<N.Lower<string, '10'>,                    0 | 1,      Test.Pass>(),
    check<N.Lower<any, '10'>,                       0 | 1,      Test.Pass>(),
    check<N.Lower<never, '10'>,                     never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LOWEREQ

checks([
    check<N.LowerEq<'9px', '10px', I.Maps.Pixel>,       1,          Test.Pass>(),
    check<N.LowerEq<'0' | '1', '0'>,                    0 | 1,      Test.Pass>(),
    check<N.LowerEq<'9', '10'>,                         1,          Test.Pass>(),
    check<N.LowerEq<'21', '10'>,                        0,          Test.Pass>(),
    check<N.LowerEq<'-10', '10'>,                       1,          Test.Pass>(),
    check<N.LowerEq<'1000', '1000'>,                    1,          Test.Pass>(),
    check<N.LowerEq<string, '10'>,                      0 | 1,      Test.Pass>(),
    check<N.LowerEq<any, '10'>,                         0 | 1,      Test.Pass>(),
    check<N.LowerEq<never, '10'>,                       never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MAX

checks([
    check<N.Max<'1px' | '2px', 's', I.Maps.Pixel>,      '2px',      Test.Pass>(),
    check<N.Max<'1' | '2'>,                             '2',        Test.Pass>(),
    check<N.Max<'-1' | '9' | '10'>,                     '10',       Test.Pass>(),
    check<N.Max<string>,                                '100',      Test.Pass>(),
    check<N.Max<any>,                                   '100',      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MIN

checks([
    check<N.Min<'1px' | '2px', 's', I.Maps.Pixel>,      '1px',      Test.Pass>(),
    check<N.Min<'1' | '2'>,                             '1',        Test.Pass>(),
    check<N.Min<'1' | '9' | '-10'>,                     '-10',      Test.Pass>(),
    check<N.Min<string>,                                '-100',     Test.Pass>(),
    check<N.Min<any>,                                   '-100',     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// MINUS

checks([
    check<N.Minus<'9px', '10px', 's', I.Maps.Pixel>,    '-1px',             Test.Pass>(),
    check<N.Minus<'9' | '8', '10' | '9'>,               '-1' | '-2' | '0',  Test.Pass>(),
    check<N.Minus<'9', '10'>,                           '-1',               Test.Pass>(),
    check<N.Minus<'21', '10'>,                          '11',               Test.Pass>(),
    check<N.Minus<'-10', '10'>,                         '-20',              Test.Pass>(),
    check<N.Minus<'10', '-10'>,                         '20',               Test.Pass>(),
    check<N.Minus<'1000', '10'>,                        string,             Test.Pass>(),
    check<N.Minus<string, '10'>,                        string,             Test.Pass>(),
    check<N.Minus<any, '10'>,                           string,             Test.Pass>(),
    check<N.Minus<never, '10'>,                         never,              Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NEGATE

checks([
    check<N.Negate<'9px', 's', I.Maps.Pixel>,   '-9px',         Test.Pass>(),
    check<N.Negate<'0' | '1'>,                  '0' | '-1',     Test.Pass>(),
    check<N.Negate<'9'>,                        '-9',           Test.Pass>(),
    check<N.Negate<'21'>,                       '-21',          Test.Pass>(),
    check<N.Negate<'-10'>,                      '10',           Test.Pass>(),
    check<N.Negate<'1000'>,                     string,         Test.Pass>(),
    check<N.Negate<string>,                     string,         Test.Pass>(),
    check<N.Negate<any>,                        string,         Test.Pass>(),
    check<N.Negate<never>,                      never,          Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NUMBER

// Cannot be tested

// ---------------------------------------------------------------------------------------
// NUMBEROF

checks([
    check<N.NumberOf<0 | 1>,    '0' | '1',  Test.Pass>(),
    check<N.NumberOf<9>,        '9',        Test.Pass>(),
    check<N.NumberOf<21>,       '21',       Test.Pass>(),
    check<N.NumberOf<-10>,      '-10',      Test.Pass>(),
    check<N.NumberOf<10>,       '10',       Test.Pass>(),
    check<N.NumberOf<1000>,     '1000',     Test.Pass>(),
    check<N.NumberOf<number>,   string,     Test.Pass>(),
    check<N.NumberOf<any>,      string,     Test.Pass>(),
    check<N.NumberOf<never>,    never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PLUS

checks([
    check<N.Plus<'9px', '10px', 's', I.Maps.Pixel>,     '19px',                 Test.Pass>(),
    check<N.Plus<'9' | '8', '10' | '9'>,                '17' | '18' | '19',     Test.Pass>(),
    check<N.Plus<'9', '10'>,                            '19',                   Test.Pass>(),
    check<N.Plus<'21', '10'>,                           '31',                   Test.Pass>(),
    check<N.Plus<'-10', '10'>,                          '0',                    Test.Pass>(),
    check<N.Plus<'10', '-10'>,                          '0',                    Test.Pass>(),
    check<N.Plus<'100', '10'>,                          string,                 Test.Pass>(),
    check<N.Plus<string, '10'>,                         string,                 Test.Pass>(),
    check<N.Plus<any, '10'>,                            string,                 Test.Pass>(),
    check<N.Plus<never, '10'>,                          never,                  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RANGE

checks([
    check<N.Range<'0px', '2px', '->', 's', I.Maps.Pixel>,   ['0px', '1px', '2px'],                              Test.Pass>(),
    check<N.Range<'-3', '5', '->'>,                         ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5'],   Test.Pass>(),
    check<N.Range<'-3', '5', '<-'>,                         ['5', '4', '3', '2', '1', '0', '-1', '-2', '-3'],   Test.Pass>(),
    check<N.Range<'0', '0', '->'>,                          ['0'],                                              Test.Pass>(),
])
