function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
      const intervalId = setInterval(action, interval);
      setTimeout(() => {
        clearInterval(intervalId);
        resolve(); // Resolve the promise after the duration is complete
      }, duration);
    });
  }
  
  // Example Usage:
  repeatAction(() => console.log('Repeating action'), 1000, 5000)
    .then(() => console.log('Action repeated for 5 seconds and stopped'));