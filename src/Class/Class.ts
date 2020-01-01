import {List} from '../List/List'

/**
Alias to create/describe a [[Class]]
@param P its constructor parameters
@param R the object it constructs
*/
export type Class<P extends List = any, R extends object = any> =
    new (...args: P) => R
