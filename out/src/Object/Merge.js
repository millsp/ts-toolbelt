"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exclude O out of O1 to avoid `Merge<{a?: number}, {a: string}>`
// In such case `_Merge` loses the `?` of `O` which has priority
// This happens when we do `keyof (O & O1)` and the keys overlap
// So we prevent overlapping first by excluding `O` out of `O1`
