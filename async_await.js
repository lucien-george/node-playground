
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non-negative');
      }
      resolve(a + b);
    }, 2000);
  })
};

// async functions always return a Promise
const doWork = async () => {
  // throw new Error('Something went wrong'); // throws an error and goes to the catch call
  // return 'Lucien' // goes to the then call
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await add(sum2, -3);
  return sum3;
};

// console.log(doWork()); // undefined returned if we don't explicitely return something

doWork().then((result) => {
  console.log(result);
}).catch((e) => {
  console.error(e);
});
