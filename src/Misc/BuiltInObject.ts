/**
 * @hidden
 */
type Errors =
    | Error
    | EvalError
    | RangeError
    | ReferenceError
    | SyntaxError
    | TypeError
    | URIError

/**
 * @hidden
 */
type Numeric =
    | Number
    // | BigInt // not needed
    | Math
    | Date

/**
 * @hidden
 */
type Textual =
    | String
    | RegExp

/**
 * @hidden
 */
type Arrays =
    | Array<any>
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array
    // | BigInt64Array
    // | BigUint64Array

/**
 * @hidden
 */
type Maps =
    | Map<any, any>
    | Set<any>
    | WeakMap<any, any>
    | WeakSet<any>

/**
 * @hidden
 */
type Structures =
    | ArrayBuffer
    // | SharedArrayBuffer
    // | Atomics
    | DataView
    | JSON

/**
 * @hidden
 */
type Abstractions =
    | Function
    | Promise<any>
    | Generator
    | GeneratorFunction

/**
 * @hidden
 */
type WebAssembly = never

/**
 * Built-in standard library objects
 */
export type BuiltInObject =
    | Errors
    | Numeric
    | Textual
    | Arrays
    | Maps
    | Structures
    | Abstractions
    | WebAssembly
