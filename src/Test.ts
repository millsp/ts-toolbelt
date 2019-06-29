import {Repeat} from './Tuple/Repeat'
import {Equals} from './Any/Equals'
import {Compute} from './Any/Compute'
import {True, False, Boolean} from './Boolean/_Boolean'

export type Pass = True
export type Fail = False

export declare function check<Type, Expect, Outcome extends Boolean>(debug?: Compute<Type>): Equals<Equals<Type, Expect, 'strict'>, Outcome>
export declare function checks(asserts: Partial<Repeat<Pass, '30'>>): void;
