import {Test, C} from '../sources'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// CLASS /////////////////////////////////////////////////////////////////////////////////

class TestClass {
    // @ts-ignore
    constructor(a: string, b: number) {}
}

// ---------------------------------------------------------------------------------------
// CLASS

// Cannot be tested

// ---------------------------------------------------------------------------------------
// INSTANCEOF

checks([
    check<C.Instance<typeof TestClass>, TestClass, Test.Pass>(TestClass),
])

// ---------------------------------------------------------------------------------------
// PARAMETERS

checks([
    check<C.Parameters<typeof TestClass>, [string, number], Test.Pass>(),
])
