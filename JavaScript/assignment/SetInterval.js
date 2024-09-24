function countdown(number) {
    const intervalId = setInterval(() => {
      console.log(number);
      number--;
      if (number < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  // Example Usage:
  countdown(5);