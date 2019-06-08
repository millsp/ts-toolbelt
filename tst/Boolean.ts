import {Test, B} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// BOOLEAN ///////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// AND

checks([
    check<B.And<true, true>,            true,       Test.Pass>(true && true),
    check<B.And<true, false>,           false,      Test.Pass>(true && false),
    check<B.And<false, true>,           false,      Test.Pass>(false && true),
    check<B.And<false, false>,          false,      Test.Pass>(false && false),
    check<B.And<true, true & false>,    false,      Test.Pass>(true && (true && false)),
    check<B.And<true & false, false>,   false,      Test.Pass>((true && false) && false),
    check<B.And<false, true & false>,   false,      Test.Pass>(false && (true && false)),
    check<B.And<false & false, false>,  false,      Test.Pass>((false && false) && false),
    check<B.And<boolean, false>,        false,      Test.Pass>(),
    check<B.And<false, boolean>,        false,      Test.Pass>(),
    check<B.And<boolean, true>,         boolean,    Test.Pass>(),
    check<B.And<true, boolean>,         boolean,    Test.Pass>(),
    check<B.And<boolean, boolean>,      boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NEGATE

checks([
    check<B.Negate<true>,           false,          Test.Pass>(!true),
    check<B.Negate<false>,          true,           Test.Pass>(!false),
    check<B.Negate<true & false>,   true,           Test.Pass>(!(true && false)),
    check<B.Negate<true | false>,   true | false,   Test.Pass>(),
    check<B.Negate<true | false>,   boolean,        Test.Pass>(),
    check<B.Negate<boolean>,        boolean,        Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NOT

checks([
    check<B.Not<true>,          false,          Test.Pass>(!true),
    check<B.Not<false>,         true,           Test.Pass>(!false),
    check<B.Not<true & false>,  true,           Test.Pass>(!(true && false)),
    check<B.Not<true | false>,  true | false,   Test.Pass>(),
    check<B.Not<true | false>,  boolean,        Test.Pass>(),
    check<B.Not<boolean>,       boolean,        Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NUMBEROF

checks([
    check<B.NumberOf<true>,         1,      Test.Pass>(),
    check<B.NumberOf<false>,        0,      Test.Pass>(),
    check<B.NumberOf<true & false>, 0,      Test.Pass>(),
    check<B.NumberOf<true | false>, 0 | 1,  Test.Pass>(),
    check<B.NumberOf<boolean>,      0 | 1,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OR

checks([
    check<B.Or<true, true>,             true,       Test.Pass>(true || true),
    check<B.Or<true, false>,            true,       Test.Pass>(true || false),
    check<B.Or<false, true>,            true,       Test.Pass>(false || true),
    check<B.Or<false, false>,           false,      Test.Pass>(false || false),
    check<B.Or<true, true & false>,     true,       Test.Pass>(true || (true && false)),
    check<B.Or<true & false, false>,    false,      Test.Pass>((true && false) || false),
    check<B.Or<false, true & false>,    false,      Test.Pass>(false || (true && false)),
    check<B.Or<false & false, false>,   false,      Test.Pass>((false && false) || false),
    check<B.Or<boolean, true>,          true,       Test.Pass>(),
    check<B.Or<true, boolean>,          true,       Test.Pass>(),
    check<B.Or<boolean, false>,         boolean,    Test.Pass>(),
    check<B.Or<false, boolean>,         boolean,    Test.Pass>(),
    check<B.Or<boolean, boolean>,       boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// STRINGOF

checks([
    check<B.StringOf<true>,         'true',             Test.Pass>(),
    check<B.StringOf<false>,        'false',            Test.Pass>(),
    check<B.StringOf<false & true>, 'false',            Test.Pass>(),
    check<B.StringOf<false | true>, 'true' | 'false',   Test.Pass>(),
    check<B.StringOf<boolean>,      'true' | 'false',   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// XOR

checks([
    check<B.Xor<true, true>,            false,      Test.Pass>(),
    check<B.Xor<true, false>,           true,       Test.Pass>(),
    check<B.Xor<false, true>,           true,       Test.Pass>(),
    check<B.Xor<false, false>,          false,      Test.Pass>(),
    check<B.Xor<true, true & false>,    true,       Test.Pass>(),
    check<B.Xor<true & false, false>,   true,       Test.Pass>(),
    check<B.Xor<false, true & false>,   true,       Test.Pass>(),
    check<B.Xor<false & false, false>,  false,      Test.Pass>(),
    check<B.Xor<boolean, true>,         boolean,    Test.Pass>(),
    check<B.Xor<true, boolean>,         boolean,    Test.Pass>(),
    check<B.Xor<boolean, false>,        boolean,    Test.Pass>(),
    check<B.Xor<false, boolean>,        boolean,    Test.Pass>(),
    check<B.Xor<boolean, boolean>,      boolean,    Test.Pass>(),
])
