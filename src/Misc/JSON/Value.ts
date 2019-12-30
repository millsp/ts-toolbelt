import {Primitive} from './Primitive'
import {List} from './Array'
import {Object} from './Object'

/**
Any JSON data/value
*/
export type Value = Primitive | Object | List
