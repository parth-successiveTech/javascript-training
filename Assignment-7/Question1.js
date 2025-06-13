let doWork = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(
          fetch("https://fake-json-api.mock.beeceptor.com/users").then(
            (response) => response.json()
          )
        );
      }, 5000);
    } else {
      reject("taken so much time");
    }
    console.log("hello mister");
  });
};
doWork()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error("error has encountered");
  });
