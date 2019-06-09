export {Merge} from './Merge'
export {Omit} from './Omit'
export {Pick} from './Pick'
export {Readonly} from './Readonly'
export {Update} from './Update'

// type t0 = Merge<O, ['a', 'a', 'a'], {c: string}>
// type t1 = Merge<O, ['a', 'a', 'a' | 'b'], {c: string}>
// type t2 = Merge<O, ['a' | 'b', 'a', 'a' | 'b'], {c: string}>

// type O = {
//   a: {
//     a: {
//       a: {
//       },
//       b: {
//       }
//     },
//     b: {
//       a: {
//       },
//       b: {
//       }
//     }
//   },
//   b: {
//     a: {
//       a: {
//       },
//       b: {
//       }
//     },
//     b: {
//       a: {
//       },
//       b: {
//       }
//     }
//   }
// }

// type User = {
//     id: number,
//     name: string,
//     address0: {
//       street: string,
//       zipcode: string,
//       geo0: {
//         lat: 'lat0',
//         lng: 'lng1',
//         lnx: 'lnxa'
//       },
//       geo1: {
//         lat: 'lat2',
//         lng: 'lng3',
//         lnx: 'lnxb'
//       },
//     },
//     address1: {
//       street: string,
//       zipcode: string,
//       geo0: {
//         lat: 'lat4',
//         lng: 'lng5',
//         lnx: 'lnxc'
//       },
//       geo1: {
//         lat: 'lat6',
//         lng: 'lng7',
//         lnx: 'lnxd'
//       },
//     },
//   };
