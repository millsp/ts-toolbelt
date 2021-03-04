import {Boolean} from '../Boolean/_Internal'

export type If<B extends Boolean, Then, Else = never> =
    B extends 1
    ? Then
    : Else
