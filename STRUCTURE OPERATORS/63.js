//LOGICA OPERATOR

const rest1 = {
    name: 'Capri',
 
    numGuests: 0,
  };
  
  const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
  };
  


  rest1.numGuests ??= 10;
  rest2.numGuests ??= 10;

  rest1.owner &&= '<ANONYMOUS>';
  rest2.owner &&= '<ANONYMOUS>';
  
  console.log(rest1);
  console.log(rest2);
  
  

  restaurant.numGuests = 0;
  const guests = restaurant.numGuests || 10;
  console.log(guests);
  
  const guestCorrect = restaurant.numGuests ?? 10;
  console.log(guestCorrect);

  
  console.log('---- OR ----');

  console.log(3 || 'Jonas');
  console.log('' || 'Jonas');
  console.log(true || 0);
  console.log(undefined || null);
  
  console.log(undefined || 0 || '' || 'Hello' || 23 || null);
  
  restaurant.numGuests = 0;
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1);
  
  const guests2 = restaurant.numGuests || 10;
  console.log(guests2);
  
  console.log('---- AND ----');
  console.log(0 && 'Jonas');
  console.log(7 && 'Jonas');
  
  console.log('Hello' && 23 && null && 'jonas');

  if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
  }
  
  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
  
  