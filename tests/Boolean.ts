import {Test, B} from '../sources'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// BOOLEAN ///////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// AND

checks([
    check<B.And<1, 1>, 1, Test.Pass>(),
    check<B.And<1, 0>, 0, Test.Pass>(),
    check<B.And<0, 1>, 0, Test.Pass>(),
    check<B.And<0, 0>, 0, Test.Pass>(),
    check<B.And<0 | 1, 0>, 0, Test.Pass>(),
    check<B.And<0, 0 | 1>, 0, Test.Pass>(),
    check<B.And<0 | 1, 1>, 0 | 1, Test.Pass>(),
    check<B.And<1, 0 | 1>, 0 | 1, Test.Pass>(),
    check<B.And<0 | 1, 0 | 1>, 0 | 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NOT

checks([
    check<B.Not<1>, 0, Test.Pass>(),
    check<B.Not<0>, 1, Test.Pass>(),
    check<B.Not<1 | 0>, 1 | 0, Test.Pass>(),
    check<B.Not<1 | 0>, 0 | 1, Test.Pass>(),
    check<B.Not<0 | 1>, 0 | 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// OR

checks([
    check<B.Or<1, 1>, 1, Test.Pass>(),
    check<B.Or<1, 0>, 1, Test.Pass>(),
    check<B.Or<0, 1>, 1, Test.Pass>(),
    check<B.Or<0, 0>, 0, Test.Pass>(),
    check<B.Or<0 | 1, 1>, 1, Test.Pass>(),
    check<B.Or<1, 0 | 1>, 1, Test.Pass>(),
    check<B.Or<0 | 1, 0>, 0 | 1, Test.Pass>(),
    check<B.Or<0, 0 | 1>, 0 | 1, Test.Pass>(),
    check<B.Or<0 | 1, 0 | 1>, 0 | 1, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// XOR

checks([
    check<B.Xor<1, 1>, 0, Test.Pass>(),
    check<B.Xor<1, 0>, 1, Test.Pass>(),
    check<B.Xor<0, 1>, 1, Test.Pass>(),
    check<B.Xor<0, 0>, 0, Test.Pass>(),
    check<B.Xor<0 | 1, 1>, 0 | 1, Test.Pass>(),
    check<B.Xor<1, 0 | 1>, 0 | 1, Test.Pass>(),
    check<B.Xor<0 | 1, 0>, 0 | 1, Test.Pass>(),
    check<B.Xor<0, 0 | 1>, 0 | 1, Test.Pass>(),
    check<B.Xor<0 | 1, 0 | 1>, 0 | 1, Test.Pass>(),
])
