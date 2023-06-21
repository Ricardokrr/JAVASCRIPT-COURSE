//COUNTRY

const getCountryData = function (country) {

    getJSON(
      `https://restcountries.eu/rest/v2/name/${country}`,
      'Country not found'
    )
      .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
  
        if (!neighbour) throw new Error('No neighbour found!');
  
        return getJSON(
          `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
          'Country not found'
        );
      })
  
      .then(data => renderCountry(data, 'neighbour'))
      .catch(err => {
        console.error(`${err} `);
        renderError(`Something went wrong  ${err.message}. Try again!`);
      })
      .finally(() => {
        countriesContainer.style.opacity = 1;
      });
  };
  
  btn.addEventListener('click', function () {
    getCountryData('portugal');
  });
  

  