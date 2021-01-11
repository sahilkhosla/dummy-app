// lib
const unlock = (unlockEventOptions) => {

  // check if it's an array and not empty
  if (!Array.isArray(unlockEventOptions) || unlockEventOptions.length === 0) {
    console.log('no events provided');
    return;
  }

  // initiate an array for unlock event promises
  const unlockEventPromises = [];

  // todo: add event listener for each option and push to array
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

  // return promise.all
  return Promise.all(unlockEventPromises)
}

export {
  unlock
}

// usage
import { unlock } from "@sahilkhosla/unlock-js";
import axios from 'axios';

const unlockEventOptions = ['scroll', 'click', 'keypress', 'mouseout'];

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5ff3d03fb69c062d1c393c39';

//initiate network call
const requestData = () => {
  return axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
}

//wait for network call to finish and print data
const parseData = async () => {
  const response = await requestData();
  console.log(response.data);
}

unlock(unlockEventOptions).then(parseData);