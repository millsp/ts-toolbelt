/*
 * type Errors =
 * | Error
 * | EvalError
 * | RangeError
 * | ReferenceError
 * | SyntaxError
 * | TypeError
 * | URIError
 */

/*
 * type Numeric =
 * | Number
 * | BigInt // not needed
 * | Math
 * | Date
 */

/*
 * type Textual =
 * | String
 * | RegExp
 */

/*
 * type Arrays =
 * | Array<unknown>
 * | ReadonlyArray<unknown>
 * | Int8Array
 * | Uint8Array
 * | Uint8ClampedArray
 * | Int16Array
 * | Uint16Array
 * | Int32Array
 * | Uint32Array
 * | Float32Array
 * | Float64Array
 * | BigInt64Array
 * | BigUint64Array
 */

/*
 * type Maps =
 * | Map<unknown, unknown>
 * | Set<unknown>
 * | ReadonlyMap<unknown, unknown>
 * | ReadonlySet<unknown>
 * | WeakMap<object, unknown>
 * | WeakSet<object>
 */

/*
 * type Structures =
 * | ArrayBuffer
 * | SharedArrayBuffer
 * | Atomics
 * | DataView
 * | JSON
 */

/*
 * type Abstractions =
 * | Function
 * | Promise<unknown>
 * | Generator
 * | GeneratorFunction
 */


/**
 * @hidden
 */
// type WebAssembly = never

export type BuiltIn =
    | Function
    | Error
    | Date
    | {readonly [Symbol.toStringTag]: string}
    | RegExp
    | Generator
