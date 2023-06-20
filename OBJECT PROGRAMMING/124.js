// Class expression

class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }

    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }

    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }

    static hey() {
      console.log('Hey there ');
      console.log(this);
    }
  }
  
  const jessica = new PersonCl('Jessica Davis', 1996);
  console.log(jessica);
  jessica.calcAge();
  console.log(jessica.age);
  
  console.log(jessica.__proto__ === PersonCl.prototype);

  jessica.greet();
  const walter = new PersonCl('Walter White', 1965);
 
  