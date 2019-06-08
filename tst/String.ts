import {Test, S} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// STRING ////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// BOOLEANOF

checks([
    check<S.BooleanOf<'false'>,             false,      Test.Pass>(),
    check<S.BooleanOf<'true'>,              true,       Test.Pass>(),
    check<S.BooleanOf<'false' | 'true'>,    boolean,    Test.Pass>(),
    check<S.BooleanOf<string>,              boolean,    Test.Pass>(),
    check<S.BooleanOf<'xxxx'>,              true,       Test.Pass>(),
    check<S.BooleanOf<never>,               never,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NUMBEROF

checks([
    check<S.NumberOf<'420'>,        number,     Test.Pass>(),
    check<S.NumberOf<'-20'>,        -20,        Test.Pass>(),
    check<S.NumberOf<'12' | '-1'>,  12 | -1,    Test.Pass>(),
    check<S.NumberOf<string>,       number,     Test.Pass>(),
    check<S.NumberOf<'xxxx'>,       number,     Test.Pass>(),
    check<S.NumberOf<never>,        never,      Test.Pass>(),
])
