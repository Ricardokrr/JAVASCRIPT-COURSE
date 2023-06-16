
//INTRODUCTION TO OBJECTS

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  
//SIMILAR EXAMPLE
const jonas1 = {
    firstName: 'Jonas1',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  console.log(jonas1);
  console.log(jonas1.lastName);
  console.log(jonas1['lastName']);
  
  const nameKey = 'Name';
  console.log(jonas1['first' + nameKey]);
  console.log(jonas1['last' + nameKey]);

  
  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  if (jonas1[interestedIn]) {
    console.log(jonas1[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }
  
  jonas1.location = 'Portugal';
  jonas1['twitter'] = '@jonasschmedtman';
  console.log(jonas1);
  console.log(`${jonas1.firstName} has ${jonas1.friends.length} friends, and his best friend is called ${jonas1.friends[0]}`);
  