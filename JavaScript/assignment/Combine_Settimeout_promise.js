function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 to 5 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, randomDelay);
    });
  }
  
  // Example Usage:
  randomDelayMessage('This message appears after a random delay');