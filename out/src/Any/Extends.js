"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Comes from the fact that `never` is a fall-through type that we want to
// narrow down to `false`. So it means that `Extends<never, never>` is false
