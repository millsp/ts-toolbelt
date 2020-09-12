/**
An entry of `IterationMap`
* `[0]`: Prev (<-)
* `[1]`: Next (->)
* `[2]`: Current `string`
* `[3]`: Current `number`
* `[4]`: Current Negative `string`
* `[5]`: Cumulated Previous `keys` (for `Min` & `Max`)
* `[6]`: Sign (- / 0 / +)
*/
export type Iteration = [
    string,
    string,
    string,
    number,
    string,
    string,
    '-' | '0' | '+'
]
