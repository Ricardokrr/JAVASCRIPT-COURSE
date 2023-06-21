// Consuming Promises with Async/Await


const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  
  const whereAmI = async function () {
    try {
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;
      const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      if (!resGeo.ok) throw new Error('Problem getting location data');
  
      const dataGeo = await resGeo.json();
      console.log(dataGeo);
  
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
      );

      if (!res.ok) throw new Error('Problem getting country');
  
      const data = await res.json();
      console.log(data);
      renderCountry(data[0]);
    } catch (err) {
      console.error(`${err} 💥`);
      renderError(`💥 ${err.message}`);
    }
  };
  whereAmI();
  whereAmI();
  whereAmI();
  console.log('FIRST');

  