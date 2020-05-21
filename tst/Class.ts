import {Test, C} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// CLASS /////////////////////////////////////////////////////////////////////////////////

class TestClass {
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
// PROMISE

checks([
    check<C.Promise<Promise<1>>,  C.Promise<1>,  Test.Pass>(),
])


// ---------------------------------------------------------------------------------------
// PROMISEOF

checks([
    check<C.PromiseOf<Promise<TestClass>>,  TestClass,  Test.Pass>(),
])
