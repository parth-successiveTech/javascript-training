async function getData() {
  {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve([1, 2, 3, 4, 5]);
        },

        1000
      );
    });
  }
}

getData().then((data) => {
  console.log(data);
});
