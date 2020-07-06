import {OptionalPart} from './Optional'
import {Depth} from './_Internal'

/**
Partial is an alias for Optional with a simpler syntax. Just like the native `Partial` it makes a type's fields optional, but accepts one extra param to choose between 'flat' or 'deep'.
@param O the type to make its fields optional
@param depth (?=`'flat'`) to do it deep
@returns [[Object]]
@example Partial<MyType>
@example Partial<MyType, 'deep'>
 */
export type Partial<O extends object, depth extends Depth = 'flat'> = OptionalPart<O, depth>
