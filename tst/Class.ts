/* tslint:disable */

import {Test, C} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// CLASS /////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// INSTANCEOF

class TestClass {
    constructor(a: string, b: number) {}
}

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
