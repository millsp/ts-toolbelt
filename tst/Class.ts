import {Test, C} from '../src/ts-toolbelt'

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
    check<C.InstanceOf<typeof TestClass>,   TestClass,          Test.Pass>(TestClass),
])

// ---------------------------------------------------------------------------------------
// PARAMETERS

checks([
    check<C.Parameters<typeof TestClass>,   [string, number],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PROMISEOF

checks([
    check<C.PromiseOf<Promise<TestClass>>,  TestClass,  Test.Pass>(),
])
