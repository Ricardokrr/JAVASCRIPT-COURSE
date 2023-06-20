
// Setters and Getters
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
  
    get latest() {
      return this.movements.slice(-1).pop();
    },
  
    set latest(mov) {
      this.movements.push(mov);
    },
  };
  
  console.log(account.latest);
  
  account.latest = 50;
  console.log(account.movements);
  
  

  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven = Object.create(PersonProto);
  console.log(steven);
  steven.name = 'Steven';
  steven.birthYear = 2002;
  steven.calcAge();
  
  console.log(steven.__proto__ === PersonProto);
  
  const sarah = Object.create(PersonProto);
  sarah.init('Sarah', 1979);
  sarah.calcAge();
  
  