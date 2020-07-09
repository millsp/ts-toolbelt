import {Test, S} from '../src/ts-toolbelt'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// STRING ////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// FORMAT

checks([
    check<S.Format<'xxxx', 'b'>,    1,          Test.Pass>(),
    check<S.Format<'false', 'b'>,   0,          Test.Pass>(),
    check<S.Format<'xxxx', 'n'>,    number,     Test.Pass>(),
    check<S.Format<'10', 'n'>,      10,         Test.Pass>(),
    check<S.Format<'100', 's'>,     '100',      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// STRING

// Cannot be tested
