/* eslint-disable fp/no-class */

/** Get the instance type of a **`class`** from a class object
 * @param C **`typeof`** **`class`**
 * @returns **`class`**
 * @example
 * ```ts
 * /// `create` takes an instance constructor and creates an instance of it
 * declare function create<C extends (new (...args: any[]) => any)>(c: C): InstanceOf<C>
 *
 * class A {}
 * class B {}
 *
 * let a = create(A) // A
 * let b = create(B) // B
 * ```
 */
export type InstanceOf<C extends new (...args: any[]) => any> =
    InstanceType<C>
