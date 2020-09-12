import {List} from '../List/List'

/**
 * Alias to create/describe a `class`
 * @param P its constructor parameters
 * @param R the object it constructs
 * @returns `class`
 */
export type Class<P extends List = any[], R extends object = object> = {
    new (...args: P): R
}
