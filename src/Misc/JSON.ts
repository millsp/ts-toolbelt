export type Primitive = string | number | boolean | null;

export interface Object {
	[k: string]: JSON;
}

export interface List extends Array<JSON> {}

export type Value = Primitive | Object | List

export type JSON = Value
