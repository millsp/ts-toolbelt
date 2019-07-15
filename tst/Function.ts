/* eslint-disable fp/no-class */
/* eslint-disable no-implicit-coercion */
import {Test, F} from '../src/index'
import {Arrow} from '../src/Function/Arrow'
import {Curry} from '../src/Function/Curry'
import {x} from '../src/Any/x'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// FUNCTION //////////////////////////////////////////////////////////////////////////////

const FN = (a: string, b: number, c: object) => true

// ---------------------------------------------------------------------------------------
// ARROW

checks([
    check<F.Arrow<[string, number, object], boolean>,   typeof FN,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CLASSOF

checks([
    check<F.ClassOf<typeof FN>, new(a: string, b: number, c: object) => boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPOSE

declare function compose<Fns extends F.Arrow[]>(...args: F.Composer<Fns>): F.Composed<Fns>

const composed = compose(
    (message: string)                   => false,                   // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (name: string, age: number)         => ({name, age}),           // receive parameters
)

checks([
    check<(typeof composed),    (name: string, age: number) => boolean,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// CURRY

// Not testable
declare function curry<F extends Arrow>(f: F): Curry<F>

const __ = {} as x

const toCurry = (name: string, age: number, single: true, ...nicknames: string[]) => true
const curried = curry(toCurry)

const t = curried()

const test00 = curried(__, 26)(__, true, 'JJ', __)('Jane', 'Jini') // boolean
const test01 = curried('Jane', 26, true, __)('JJ', __)('Jini')     // boolean

checks([
    check<typeof test00,        boolean,                                Test.Pass>(),
    check<typeof test01,        boolean,                                Test.Pass>(),
])


// ---------------------------------------------------------------------------------------
// PARAMSOF

checks([
    check<F.ParamsOf<typeof FN>,    [string, number, object],   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// LENGTHOF

checks([
    check<F.LengthOf<typeof FN>,                     3,        Test.Pass>(),
    check<F.LengthOf<(a1: any, a2?: any) => any>,    1 | 2,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PIPE

declare function pipe<Fns extends F.Arrow[]>(...args: F.Piper<Fns>): F.Piped<Fns>

const piped = pipe(
    (name: string, age: number)         => ({name, age}),           // receive parameters
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                   => false,                   // receive previous return
)

checks([
    check<(typeof piped),   (name: string, age: number) => boolean,  Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// RETURNOF

checks([
    check<F.ReturnOf<typeof FN>,    boolean,    Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// UNCURRY

// checks([
//     check<F.UnCurry<typeof curried>,    typeof FN,  Test.Pass>(),
// ])
