"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var checks = index_1.Test.checks, check = index_1.Test.check;
// ---------------------------------------------------------------------------------------
// APPEND
checks([
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// AT
checks([
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// CONCAT
checks([
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// DIFF
checks([
    check(),
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// DROP
checks([
    check(),
    check(),
    check(),
]);
// -------------------------------------------------------------------------------------
// EXCLUDE
checks([
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
]);
// -------------------------------------------------------------------------------------
// EXCLUDEKEYS
checks([
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
]);
// -------------------------------------------------------------------------------------
// EXTRACT
checks([
    check(),
    check(),
]);
// checks([
//     check<T.Filter<T, number, 'default'>,  FILTER_T_NUMBER_EXTENDS,    Test.Pass>(),
//     check<T.Filter<T, number, 'extends'>,  FILTER_T_NUMBER_EXTENDS,    Test.Pass>(),
//     check<T.Filter<T, number, ''>,  FILTER_T_NUMBER,    Test.Pass>(),
//     check<T.Filter<T, number, 'extends'>,  FILTER_T_NUMBER,    Test.Pass>(),
//     check<,,    Test.Pass>(),
// ])
// // ---------------------------------------------------------------------------------------
// // BLANK
// checks([
//     check<,,    Test.Pass>(),
//     check<,,    Test.Pass>(),
// ])
