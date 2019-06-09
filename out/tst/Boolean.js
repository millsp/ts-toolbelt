"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var checks = index_1.Test.checks, check = index_1.Test.check;
// ///////////////////////////////////////////////////////////////////////////////////////
// BOOLEAN ///////////////////////////////////////////////////////////////////////////////
// ---------------------------------------------------------------------------------------
// AND
checks([
    check(true && true),
    check(true && false),
    check(false && true),
    check(false && false),
    check(true && (true && false)),
    check((true && false) && false),
    check(false && (true && false)),
    check((false && false) && false),
    check(),
    check(),
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// NEGATE
checks([
    check(!true),
    check(!false),
    check(!(true && false)),
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// NOT
checks([
    check(!true),
    check(!false),
    check(!(true && false)),
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// NUMBEROF
checks([
    check(),
    check(),
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// OR
checks([
    check(true || true),
    check(true || false),
    check(false || true),
    check(false || false),
    check(true || (true && false)),
    check((true && false) || false),
    check(false || (true && false)),
    check((false && false) || false),
    check(),
    check(),
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// STRINGOF
checks([
    check(),
    check(),
    check(),
    check(),
    check(),
]);
// ---------------------------------------------------------------------------------------
// XOR
checks([
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
    check(),
]);
