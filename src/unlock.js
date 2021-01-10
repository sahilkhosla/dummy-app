export default (unlockEventOptions) => {
  const unlockEventPromises = [];

  unlockEventOptions.forEach(unlockEventOption => {
    const eventPromise = new Promise((resolve, reject) => {
      try {
        window.addEventListener(unlockEventOption, () => {        
          resolve();
        })
      } catch (error) {
        console.log(error);
      }
    });

    unlockEventPromises.push(eventPromise);
  });

  console.log(unlockEventOptions);

  Promise.all(unlockEventPromises).then(() => {
    console.log('unlocked...');
  });
}