//FUNCTIONS AND OTHERS 


const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  
    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);
  
    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;
  

    return new Intl.DateTimeFormat(locale).format(date);
  };
  
  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };
  
  const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = "";
  
    const movs = sort
      ? acc.movements.slice().sort((a, b) => a - b)
      : acc.movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? "deposit" : "withdrawal";
  
      const date = new Date(acc.movementsDates[i]);
      const displayDate = formatMovementDate(date, acc.locale);
  
      const formattedMov = formatCur(mov, acc.locale, acc.currency);
  
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
      `;
  
      containerMovements.insertAdjacentHTML("afterbegin", html);
    });
  };
  
  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
  };
  
  const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter((mov) => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  
    const out = acc.movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);
  
    const interest = acc.movements
      .filter((mov) => mov > 0)
      .map((deposit) => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
     
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
  };
  
  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join("");
    });
  };
  createUsernames(accounts);
  
  const updateUI = function (acc) {
 
    displayMovements(acc);
    calcDisplayBalance(acc);
  

    calcDisplaySummary(acc);
  };
  
  const startLogOutTimer = function () {
    const tick = function () {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);
  
     
      labelTimer.textContent = `${min}:${sec}`;
  
 
      if (time === 0) {
        clearInterval(timer);
        labelWelcome.textContent = "Log in to get started";
        containerApp.style.opacity = 0;
      }
  
     
      time--;
    };
  
   
    let time = 120;

    tick();
    const timer = setInterval(tick, 1000);
  
    return timer;
  };