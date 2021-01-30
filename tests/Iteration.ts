import {Test, I} from '../sources'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// ITERATION /////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// ITERATION

// Cannot be tested

// ---------------------------------------------------------------------------------------
// ITERATIONOF

// No test needed

// ---------------------------------------------------------------------------------------
// KEY

checks([
    check<I.Key<I.IterationOf<3 | 4>>, '3' | '4', Test.Pass>(),
    check<I.Key<I.IterationOf<3>>, '3', Test.Pass>(),
    check<I.Key<I.IterationOf<-4>>, '-4', Test.Pass>(),
    check<I.Key<I.IterationOf<-1000>>, `${number}`, Test.Pass>(),
    check<I.Key<I.IterationOf<1000>>, `${number}`, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// NEXT

checks([
    check<I.Pos<I.Next<I.IterationOf<3 | 4>>>, 4 | 5, Test.Pass>(),
    check<I.Pos<I.Next<I.IterationOf<3>>>, 4, Test.Pass>(),
    check<I.Pos<I.Next<I.IterationOf<-4>>>, -3, Test.Pass>(),
    check<I.Pos<I.Next<I.IterationOf<-1000>>>, number, Test.Pass>(),
    check<I.Pos<I.Next<I.IterationOf<1000>>>, number, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// POS

checks([
    check<I.Pos<I.IterationOf<3 | 4>>, 3 | 4, Test.Pass>(),
    check<I.Pos<I.IterationOf<3>>, 3, Test.Pass>(),
    check<I.Pos<I.IterationOf<-4>>, -4, Test.Pass>(),
    check<I.Pos<I.IterationOf<-1000>>, number, Test.Pass>(),
    check<I.Pos<I.IterationOf<1000>>, number, Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// PREV

checks([
    check<I.Pos<I.Prev<I.IterationOf<3 | 4>>>, 2 | 3, Test.Pass>(),
    check<I.Pos<I.Prev<I.IterationOf<3>>>, 2, Test.Pass>(),
    check<I.Pos<I.Prev<I.IterationOf<-4>>>, -5, Test.Pass>(),
    check<I.Pos<I.Prev<I.IterationOf<-1000>>>, number, Test.Pass>(),
    check<I.Pos<I.Prev<I.IterationOf<1000>>>, number, Test.Pass>(),
])
