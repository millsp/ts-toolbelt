import {Repeat} from './Tuple/Repeat'
import {Equals} from './Any/Equals'

export type Pass = true
export type Fail = false

export declare function check<Type, Expect, Outcome extends boolean>(debug?: Type): Equals<Equals<Type, Expect, 'equals'>, Outcome>
export declare function checks(asserts: Partial<Repeat<true, '30'>>): void;
