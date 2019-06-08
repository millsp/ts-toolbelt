/* eslint-disable fp/no-class */
/* eslint-disable no-implicit-coercion */
import {Test, C} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// CLASS /////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// INSTANCEOF

class TestClass {}

checks([
    check<C.InstanceOf<typeof TestClass>,   TestClass,          Test.Pass>(TestClass),
    check<C.InstanceOf<typeof TestClass>,   TestClass,          Test.Pass>(new TestClass()),
    check<typeof TestClass,                 typeof TestClass,   Test.Pass>(TestClass),
])

// ---------------------------------------------------------------------------------------
// PROMISEOF

checks([
    check<C.PromiseOf<Promise<TestClass>>,  TestClass,  Test.Pass>(),
])
