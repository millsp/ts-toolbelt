import {Split} from './Split'

import {At as LAt} from '../List/At'

export type At<S extends string, K extends number> =
    LAt<Split<S, ''>, K>
