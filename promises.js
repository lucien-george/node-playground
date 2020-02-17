// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([1, 4, 7]);
//     reject('Things went wrong');
//   }, 2000)
// });

// doWorkPromise.then((result) => {
//   console.log('Success!', result);
// }).catch((error) => {
//   console.log('Error!', error);
// })

// //
// //                              fullfilled (resolve)
// //                            /
// // Promise    -- pending -->
// //                            \
// //                              rejected (reject)
// //

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  })
};

// add(1, 2).then((sum) => {
//   console.log(sum);
//   add(sum, 5).then((sum2) => {
//     console.log(sum2);
//   }).catch((e) => {
//     console.error(e);
//   })
// }).catch((e) => {
//   console.error(e);
// });

// promise chaining
add(1, 1).then((sum) => {
  console.log(sum)
  return add(sum, 4);
}).then((sum2) => {
  console.log(sum2);
}).catch((e) => {
  console.error(e);
})
