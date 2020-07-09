import {Test, Community} from '../src/ts-toolbelt'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// COMMUNITY /////////////////////////////////////////////////////////////////////////////

type O = {
         a : string,
         b : number
         c : {a: 'a'} & {b: 'b'}
         d?: 'string0'
readonly e?: 'string1'
readonly f : 0
         g : O // recursion
         h?: 1
         j : 'a' | undefined
         k : {a: {b: string}}
}

type O1 = {
         a : string | number
         b : object
         c : {a: 'a'} & {b: 'b'}
         d?: never
readonly e?: 'string1'
readonly f : 0
         g : O1 // recursion
         h : never
         i : {a: string}
         j : 'a' | undefined
         k : {a: {b: string, c: 0}}
};

// ---------------------------------------------------------------------------------------
// INCLUDESDEEP

type O_INCLUDESDEEP = {
    a: {
        b: {
            x: number
        }
    }
};

checks([
    check<Community.IncludesDeep<O_INCLUDESDEEP, number, 'default', '3'>,   1,          Test.Pass>(),
    check<Community.IncludesDeep<O_INCLUDESDEEP, number, 'default', '2'>,   0,          Test.Pass>(),
])
