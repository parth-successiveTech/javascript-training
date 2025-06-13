function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printing weather data");
      resolve(200);
    }, 5000);
  });
}
function climate() {
  console.log("printing climate data");
}
async function WeatherData() {
  await api();
  climate();
}

WeatherData();
