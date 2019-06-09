"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable fp/no-class */
/* eslint-disable no-implicit-coercion */
var index_1 = require("../src/index");
var checks = index_1.Test.checks, check = index_1.Test.check;
// ///////////////////////////////////////////////////////////////////////////////////////
// CLASS /////////////////////////////////////////////////////////////////////////////////
// ---------------------------------------------------------------------------------------
// INSTANCEOF
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    return TestClass;
}());
checks([
    check(TestClass),
    check(new TestClass()),
    check(TestClass),
]);
// ---------------------------------------------------------------------------------------
// PROMISEOF
checks([
    check(),
]);
