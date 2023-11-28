// Homework 5

// Function 1 Lottery draw - Then & catch

const lotteryPromise = new Promise(function(resolve, reject) {
  console.log("Lottery draw is going on!")
  setTimeout(() => {
    if(Math.random() >= 0.5) {
      resolve("You Win :)");
    } else {
      reject(new Error("You Lose :("));
    }  
  }, 2000)
});

lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally; setTimeout( ()=> {
    console.log("Were you lucky?")
  }, 3000);

//  Function 2 get data on country - with then - catch

const getCountryData = function(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((response) => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
      .finally; setTimeout( ()=> {
        console.log("Finished getting country Data")
      }, 4000);
};
  
getCountryData(`canada`)


// Function 3 get data on country - with async - await

const whereAmI = async function (country) {
  const location = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await location.json();
  console.log(data);
}

whereAmI('germany');

// Function 4 get data on geolocated country using the Geolocation function

const getPosition = function() {
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAreYou = async function () {
  //GeoLocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  //Geolocation data
  const resGeo = await fetch (`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();  
  console.log(dataGeo);

  //Country Data
  const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
  const data = await res.json();
  console.log(data);
}

whereAreYou();

// //Function 5 try - catch block on geolocation data using the geolocation function from Func 4

const whereIsAnna = async function () {
  try {
    //GeoLocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
  
    //Geolocation data
    const resGeo = await fetch (`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();  
    console.log(dataGeo);
  
    //Country Data
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`)

    const data = await res.json();
    console.log(data);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`
  } catch (err) {
    console.error("Something went wrong!")    
  }
}

whereIsAnna()
  .then(city => console.log(city))
  .catch(err => console.error(`${err.message}`))
  .finally(()=> console.log("Finished Getting Location"));
