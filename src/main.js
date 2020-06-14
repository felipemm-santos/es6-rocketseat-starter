const myPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK');
    }, 2000);
  });

// Normal way
// myPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function executePromise() {
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
}

executePromise();

