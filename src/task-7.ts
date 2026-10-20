// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from TS");
//     }, 1000);
//   });
// }

// getMessage().then((result) => console.log(result));

const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 1000);
  });
};

getData().then((result) => console.log(result)); // "Hello, TypeScript!"
