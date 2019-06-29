import {Test, B} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// BOOLEAN ///////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// AND

checks([
    check<B.And<B.True, B.True>,            true,       Test.Pass>(true && true),
    check<B.And<B.True, B.False>,           false,      Test.Pass>(true && false),
    check<B.And<B.False, B.True>,           false,      Test.Pass>(false && true),
    check<B.And<B.False, B.False>,          false,      Test.Pass>(false && false),
    check<B.And<B.Boolean, B.False>,        false,      Test.Pass>(),
    check<B.And<B.False, B.Boolean>,        false,      Test.Pass>(),
    check<B.And<B.Boolean, B.True>,         boolean,    Test.Pass>(),
    check<B.And<B.True, B.Boolean>,         boolean,    Test.Pass>(),
    check<B.And<B.Boolean, B.Boolean>,      boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NEGATE

checks([
    check<B.Negate<B.True>,             false,          Test.Pass>(!true),
    check<B.Negate<B.False>,            true,           Test.Pass>(!false),
    check<B.Negate<B.True | B.False>,   true | false,   Test.Pass>(),
    check<B.Negate<B.True | B.False>,   boolean,        Test.Pass>(),
    check<B.Negate<B.Boolean>,          boolean,        Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NOT

checks([
    check<B.Not<B.True>,            false,          Test.Pass>(!true),
    check<B.Not<B.False>,           true,           Test.Pass>(!false),
    check<B.Not<B.True | B.False>,  true | false,   Test.Pass>(),
    check<B.Not<B.True | B.False>,  boolean,        Test.Pass>(),
    check<B.Not<B.Boolean>,         boolean,        Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OR

checks([
    check<B.Or<B.True, B.True>,             true,       Test.Pass>(true || true),
    check<B.Or<B.True, B.False>,            true,       Test.Pass>(true || false),
    check<B.Or<B.False, B.True>,            true,       Test.Pass>(false || true),
    check<B.Or<B.False, B.False>,           false,      Test.Pass>(false || false),
    check<B.Or<B.Boolean, B.True>,          true,       Test.Pass>(),
    check<B.Or<B.True, B.Boolean>,          true,       Test.Pass>(),
    check<B.Or<B.Boolean, B.False>,         boolean,    Test.Pass>(),
    check<B.Or<B.False, B.Boolean>,         boolean,    Test.Pass>(),
    check<B.Or<B.Boolean, B.Boolean>,       boolean,    Test.Pass>(),
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
    check<B.Xor<B.True, B.True>,            false,      Test.Pass>(),
    check<B.Xor<B.True, B.False>,           true,       Test.Pass>(),
    check<B.Xor<B.False, B.True>,           true,       Test.Pass>(),
    check<B.Xor<B.False, B.False>,          false,      Test.Pass>(),
    check<B.Xor<B.Boolean, B.True>,         boolean,    Test.Pass>(),
    check<B.Xor<B.True, B.Boolean>,         boolean,    Test.Pass>(),
    check<B.Xor<B.Boolean, B.False>,        boolean,    Test.Pass>(),
    check<B.Xor<B.False, B.Boolean>,        boolean,    Test.Pass>(),
    check<B.Xor<B.Boolean, B.Boolean>,      boolean,    Test.Pass>(),
])
