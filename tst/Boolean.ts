import {Test, B} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// BOOLEAN ///////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// AND

checks([
    check<B.And<B.True, B.True>,            1,          Test.Pass>(1 && 1),
    check<B.And<B.True, B.False>,           0,          Test.Pass>(1 && 0),
    check<B.And<B.False, B.True>,           0,          Test.Pass>(0 && 1),
    check<B.And<B.False, B.False>,          0,          Test.Pass>(0 && 0),
    check<B.And<B.Boolean, B.False>,        0,          Test.Pass>(),
    check<B.And<B.False, B.Boolean>,        0,          Test.Pass>(),
    check<B.And<B.Boolean, B.True>,         0 | 1,      Test.Pass>(),
    check<B.And<B.True, B.Boolean>,         0 | 1,      Test.Pass>(),
    check<B.And<B.Boolean, B.Boolean>,      0 | 1,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NOT

checks([
    check<B.Not<B.True>,                0,          Test.Pass>(),
    check<B.Not<B.False>,               1,          Test.Pass>(),
    check<B.Not<B.True | B.False>,      1 | 0,      Test.Pass>(),
    check<B.Not<B.True | B.False>,      0 | 1,      Test.Pass>(),
    check<B.Not<B.Boolean>,             0 | 1,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OR

checks([
    check<B.Or<B.True, B.True>,         1,          Test.Pass>(1 || 1),
    check<B.Or<B.True, B.False>,        1,          Test.Pass>(1 || 0),
    check<B.Or<B.False, B.True>,        1,          Test.Pass>(0 || 1),
    check<B.Or<B.False, B.False>,       0,          Test.Pass>(0 || 0),
    check<B.Or<B.Boolean, B.True>,      1,          Test.Pass>(),
    check<B.Or<B.True, B.Boolean>,      1,          Test.Pass>(),
    check<B.Or<B.Boolean, B.False>,     0 | 1,      Test.Pass>(),
    check<B.Or<B.False, B.Boolean>,     0 | 1,      Test.Pass>(),
    check<B.Or<B.Boolean, B.Boolean>,   0 | 1,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// STRINGOF

checks([
    check<B.StringOf<B.True>,           'true',             Test.Pass>(),
    check<B.StringOf<B.False>,          'false',            Test.Pass>(),
    check<B.StringOf<B.False | B.True>, 'true' | 'false',   Test.Pass>(),
    check<B.StringOf<B.Boolean>,        'true' | 'false',   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// XOR

checks([
    check<B.Xor<B.True, B.True>,            0,          Test.Pass>(),
    check<B.Xor<B.True, B.False>,           1,          Test.Pass>(),
    check<B.Xor<B.False, B.True>,           1,          Test.Pass>(),
    check<B.Xor<B.False, B.False>,          0,          Test.Pass>(),
    check<B.Xor<B.Boolean, B.True>,         0 | 1,      Test.Pass>(),
    check<B.Xor<B.True, B.Boolean>,         0 | 1,      Test.Pass>(),
    check<B.Xor<B.Boolean, B.False>,        0 | 1,      Test.Pass>(),
    check<B.Xor<B.False, B.Boolean>,        0 | 1,      Test.Pass>(),
    check<B.Xor<B.Boolean, B.Boolean>,      0 | 1,      Test.Pass>(),
])
