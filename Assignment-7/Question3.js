function fetchPromiseData() {
  return new Promise((resolve, reject) => {
    fetchData((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
fetchDataPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
