function api1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printing weather data");
      resolve(200);
    }, 2000);
  });
}
function api2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printing traffic data");
      resolve(300);
    }, 5000);
  });
}
let [result1, result2] = await Promise.all([api1(), api2()]);
console.log(result1);
console.log(result2);
