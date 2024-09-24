function countdown(number, callback) {
    const intervalId = setInterval(() => {
      console.log(number);
      number--;
      if (number < 0) {
        clearInterval(intervalId);
        if (callback) callback();  // Call the callback when countdown reaches 0
      }
    }, 1000);
  }
  
  // Example Usage:
  countdown(5, () => console.log('Countdown complete!'));