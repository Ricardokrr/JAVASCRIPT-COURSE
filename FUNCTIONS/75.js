//IMMEDIATELY INVOKED FUNCTIONS

const runOnce = function () {
    console.log('This will never run again');
  };
  runOnce();
  
  (function () {
    console.log('This will never run again');
    const isPrivate = 23;
  })();
  

  
  (() => console.log('This will ALSO never run again'))();
  
  {
    const isPrivate = 23;
    var notPrivate = 46;
  }
  console.log(notPrivate);
  
  