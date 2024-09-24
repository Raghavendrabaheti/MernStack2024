function countdown(number) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
          clearInterval(intervalId);
          resolve(); // Resolve the promise when the countdown completes
        }
      }, 1000);
    });
  }
  
  // Example Usage:
  countdown(5).then(() => console.log('Countdown complete!'));