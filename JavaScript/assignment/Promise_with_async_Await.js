async function delayedLogSequence(messages) {
    for (const [message, delay] of messages) {
      await wait(delay);
      console.log(message);
    }
  }
  
  // Example Usage:
  const messages = [
    ['First message', 1000],
    ['Second message', 2000],
    ['Third message', 3000],
  ];
  delayedLogSequence(messages);