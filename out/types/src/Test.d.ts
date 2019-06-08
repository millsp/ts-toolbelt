import { Repeat } from './Tuple/Repeat';
import { Equals } from './Any/Equals';
export declare type Pass = true;
export declare type Fail = false;
export declare function check<Type, Expect, Outcome extends boolean>(debug?: Type): Equals<Equals<Type, Expect, 'equals'>, Outcome>;
export declare function checks(asserts: Partial<Repeat<true, '30'>>): void;
