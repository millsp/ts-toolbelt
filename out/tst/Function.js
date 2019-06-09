"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable fp/no-class */
/* eslint-disable no-implicit-coercion */
var index_1 = require("../src/index");
var checks = index_1.Test.checks, check = index_1.Test.check;
// ///////////////////////////////////////////////////////////////////////////////////////
// FUNCTION //////////////////////////////////////////////////////////////////////////////
var FN = function (a, b, c) { return true; };
// ---------------------------------------------------------------------------------------
// ARROW
checks([
    check(),
]);
// ---------------------------------------------------------------------------------------
// CLASSOF
checks([
    check(),
]);
var composed = compose(function (message) { return ({}); }, // receive previous return
function (info) { return "Welcome, " + info.name; }, // receive previous return
function (name, age) { return ({ name: name, age: age }); });
checks([
    check(),
]);
var __ = {};
var toCurry = function (name, age, single) {
    var nicknames = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        nicknames[_i - 3] = arguments[_i];
    }
    return true;
};
var curried = curry(toCurry);
var test00 = curried(__, 26)(__, true, 'JJ', __)('Jane', 'Jini'); // boolean
var test01 = curried('Jane', 26, true, __)('JJ', __)('Jini'); // boolean
checks([
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// PARAMSOF
checks([
    check(),
]);
var piped = pipe(function (name, age) { return ({ name: name, age: age }); }, // receive parameters
function (info) { return "Welcome, " + info.name; }, // receive previous return
function (message) { return ({}); });
checks([
    check(),
]);
// ---------------------------------------------------------------------------------------
// RETURNOF
checks([
    check(),
]);
// ---------------------------------------------------------------------------------------
// UNCURRY
// checks([
//     check<F.UnCurry<F.Curry<typeof FN>>,    typeof FN,  Test.Pass>(),
// ])
