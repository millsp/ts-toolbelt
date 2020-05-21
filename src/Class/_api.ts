/** @ignore *//** */

export {Class} from './Class'
export {InstanceOf} from './InstanceOf'
export {Parameters} from './Parameters'
export {Promise} from './Promise'
export {PromiseOf} from './PromiseOf'

interface OPromise<T> {
    a: 1
}

type Promiser<T> =
	T extends OPromise<any>
	? T
    : OPromise<T>

type t0 = Promiser<1>                     // Promise<1>
type t1 = Promiser<Promise<1>>            // Promise<1>
type t2 = Promiser<Promiser<Promiser<1>>> // Promise<1>
