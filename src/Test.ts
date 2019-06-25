import {Repeat} from './Tuple/Repeat'
import {Equals} from './Any/Equals'
import {Compute} from './Any/Compute'

export type Pass = true
export type Fail = false

export declare function check<Type, Expect, Outcome extends boolean>(debug?: Compute<Type>): Equals<Equals<Type, Expect, 'strict'>, Outcome>
export declare function checks(asserts: Partial<Repeat<true, '30'>>): void;
