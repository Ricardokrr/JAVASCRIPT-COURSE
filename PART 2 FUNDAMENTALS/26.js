///EXERCISE ARRAY BASIC

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const years = [1990, 1967, 2002, 2010, 2018];
  
  const age1 = calcAge(years[0]);
  const age2 = calcAge(years[1]);
  const age3 = calcAge(years[years.length - 1]);
  console.log(age1, age2, age3);
  
  const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
  console.log(ages);
  
  
