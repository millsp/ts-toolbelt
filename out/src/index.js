"use strict";
// todo merge common names and do smart detect to know what to do (eg Diff, Filter...)
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Mention to TS team to use it as tests // no, publish on definitely typed
// Higher type safety for TypeScript
// Help you to get more done
// Build types that suit your project and enforce higher type safety
// And bring the most out of TypeScript with highly dynamic features
// Bring your types to a new level + 2 examples
// All of the types are tested, benchmarked & ready for production
// You need a type that's missing? Fund it (faster) or open an issue
// todo community types with issue hunt -> fit into a category or MISC
// re-type + TDD = <3 // ts-beast
// re-type is also a type testing tool, get it into your workflow
// Design your types easily with the powerful type matching system
// How does it work?
// It trades extra CPU & memory to perform more powerful type checks
// & each type is optimized for performance, not to bloat TypeScript
// Drawbacks
// - **Number**
// Numbers are not unlimited, they will overflow out of -40 to 40
// In this case a number is either narrowed to `string` or `number`
// For optimization reasons, numbers have to be used as `string`s
// However, they can easily be converted to a `number` (& back)
// - **Tuple**
// Similarly, the maximum size that can be handled is limited to 40
//
// Best practices
// Keep your types readible, when you combine, create a subtype
// type Z<i> = X<Y<i>>
// What's next?
// Integrate these tests to the workflow of TS
// Could create more types if TS was more perf
// Learn how to ?
// -> Link article
// Goals
// Create (more) Path types for all the ones of Object
// Need a type?
// -> Open an issue (+fund it)
var Test = tslib_1.__importStar(require("./Test"));
exports.Test = Test;
var A = tslib_1.__importStar(require("./Any/_api"));
exports.A = A;
var B = tslib_1.__importStar(require("./Boolean/_api"));
exports.B = B;
var C = tslib_1.__importStar(require("./Class/_api"));
exports.C = C;
var F = tslib_1.__importStar(require("./Function/_api"));
exports.F = F;
var I = tslib_1.__importStar(require("./Iteration/_api"));
exports.I = I;
var N = tslib_1.__importStar(require("./Number/_api"));
exports.N = N;
var O = tslib_1.__importStar(require("./Object/_api"));
exports.O = O;
var S = tslib_1.__importStar(require("./String/_api"));
exports.S = S;
var T = tslib_1.__importStar(require("./Tuple/_api"));
exports.T = T;
var U = tslib_1.__importStar(require("./Union/_api"));
exports.U = U;
