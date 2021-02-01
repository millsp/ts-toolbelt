import {Boolean} from '../Boolean/_Internal'

export type If<B extends Boolean, Then, Else = never> = {
    0: Else
    1: Then
}[B]
