function delayedLogSequence(messages) {
    messages.reduce((promiseChain, [message, delay]) => {
      return promiseChain.then(() => wait(delay).then(() => console.log(message)));
    }, Promise.resolve());
  }
  
  // Example Usage:
  const messages = [
    ['First message', 1000],
    ['Second message', 2000],
    ['Third message', 3000],
  ];
  delayedLogSequence(messages);