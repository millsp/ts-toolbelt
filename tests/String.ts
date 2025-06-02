import { Test, S } from "../sources";

const { checks, check } = Test;

// ///////////////////////////////////////////////////////////////////////////////////////
// STRING ////////////////////////////////////////////////////////////////////////////////

type S = "hola" | "ciao!";

// ---------------------------------------------------------------------------------------
// AT

checks([
  check<S.At<S, 1 | 2>, "o" | "l" | "i" | "a", Test.Pass>(),
  check<S.At<S, 20>, undefined, Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// JOIN

checks([check<S.Join<S.Split<S, "">>, S, Test.Pass>()]);

// ---------------------------------------------------------------------------------------
// LENGTH

checks([check<S.Length<S>, 4 | 5, Test.Pass>()]);

// ---------------------------------------------------------------------------------------
// REPLACE

checks([
  check<
    S.Replace<"$1 is nice. $1 is good.", "$1", "Jane">,
    "Jane is nice. Jane is good.",
    Test.Pass
  >(),
]);

// ---------------------------------------------------------------------------------------
// SPLIT

checks([
  check<
    S.Split<S>,
    ["h", "o", "l", "a"] | ["c", "i", "a", "o", "!"],
    Test.Pass
  >(),
  check<S.Split<"a.b.c", ".">, ["a", "b", "c"], Test.Pass>(),
  check<S.Split<"a.b.c.", ".">, ["a", "b", "c", ""], Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// StringNumToNum

checks([
  check<S.StringNumToNum<"0">, 0, Test.Pass>(),
  check<S.StringNumToNum<"1">, 1, Test.Pass>(),
  check<S.StringNumToNum<"63">, 63, Test.Pass>(),
  check<S.StringNumToNum<"64">, 64, Test.Fail>(),
]);
