//STICKYN NAVIGATION PART 2

const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
      console.log(entry);
    });
  };
  
  const obsOptions = {
    root: null,
    threshold: [0, 0.2],
  };
  
  const observer = new IntersectionObserver(obsCallback, obsOptions);
  observer.observe(section1);
  