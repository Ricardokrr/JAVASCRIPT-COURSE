// Returning Values from Async Functions


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
  
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
      );
      if (!resGeo.ok) throw new Error('Problem getting country');
      const data = await res.json();
      renderCountry(data[0]);
  
      return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
      console.error(`${err} `);
      renderError(` ${err.message}`);
  
      throw err;
    }
  };
  
  console.log('1: Will get location');

  (async function () {
    try {
      const city = await whereAmI();
      console.log(`2: ${city}`);
    } catch (err) {
      console.error(`2: ${err.message} 💥`);
    }
    console.log('3: Finished getting location');
  })();
  