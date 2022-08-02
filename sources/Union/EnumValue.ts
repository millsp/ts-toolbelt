import { StringNumToNum } from "../String/StringNumToNum";

export type EnumValue<T> = T extends infer TUn
  ? TUn extends string
    ? `${TUn}`
    : TUn extends number
    ? `${TUn}` extends infer TunItem
      ? TunItem extends string
        ? StringNumToNum<TunItem>
        : never
      : never
    : never
  : never;
