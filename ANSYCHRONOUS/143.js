///TRY CATCH AND PARALLEL


const get3Countries = async function (c1, c2, c3) {
    try {
      const data = await Promise.all([
        getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
      ]);
      console.log(data.map(d => d[0].capital));
    } catch (err) {
      console.error(err);
    }
  };
  get3Countries('portugal', 'canada', 'tanzania');
  
  