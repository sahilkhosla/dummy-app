'>>>>>>>>>>>>>>>>>>>>>'
// 1. Callbacks
'>>>>>>>>>>>>>>>>>>>>>'

'---------------------'
// second before first :(
'---------------------'

// long running function
function first() {
  setTimeout(() => {
    console.log(1)
  }, 500);
}

function second() {
  console.log(2);
}

first();
second(); 

'---------------------'
// accept callback
'---------------------'

function first(callback) {
  console.log(`first initiated..`);
  
  setTimeout(() => {
    console.log(1)
    callback();
  }, 500);
}

function second() {
  console.log(2);
}

first(second);
console.log('moving on to other things..');

'---------------------'
// callback hell
'---------------------'

function xhrWithCallback(url, callback) {
  const xhr = new XMLHttpRequest();    
    xhr.open('GET', url);
    xhr.setRequestHeader('app-id', APP_ID);

    xhr.onload = () => {
      if (xhr.status === 200) {
        callback(xhr.response)
      } else {
        callback({}, {
          status: xhr.status,
          statusText: xhr.statusText
        })
      }
    };

    xhr.onerror = () => {
      callback({}, {
        status: xhr.status,
        statusText: xhr.statusText
      })
    };

    xhr.send();
}

// fetch 20 profiles
xhrWithCallback(`${BASE_URL}/user`, function(response, error) {
  if (!error) {
    const parsedResponse = JSON.parse(response);
    console.log(`users:`,parsedResponse);    
    const userId = parsedResponse.data[0].id;
    console.log(`first userId: ${userId}`);

    // todo: fetch details of first profile 
    

  } else {
    console.log(error.status);
  }
});

'>>>>>>>>>>>>>>>>>>>>>'
// 2. Promises
'>>>>>>>>>>>>>>>>>>>>>'

const dummyUrl = `${BASE_URL}/user`;

const flex = (url) => {
  // todo: xhr with promise
}

const p = flex(dummyUrl); // returns a promise
console.log(p);

'---------------------'
// then/catch
'---------------------'

flex(dummyUrl) 
  .then(response => {
    console.log(JSON.parse(response));    
  })
  .catch(error => {
    console.log(error.status)
  })

console.log('moved on to other things')

'---------------------'
// promise hell?
'---------------------'

flex(dummyUrl) 
  .then(response => {
    const parsedResponse = JSON.parse(response);
    console.log(parsedResponse);
    const userId = parsedResponse.data[0].id;
    console.log(userId)
    // todo: get details of user with userId
  })
  .catch(error => {
    console.log(error.status)
  })

console.log('moved on to other things')

'---------------------'
// sequence (fixed with magic - chaining)
'---------------------'
    
// todo: fix above code with chaining

'---------------------'
// finally
'---------------------'

// todo: add finally to the code above

'>>>>>>>>>>>>>>>>>>>>>'
// 3. Async/Await
'>>>>>>>>>>>>>>>>>>>>>'

'---------------------'
// setup
'---------------------'

const getFirstUserDetails = () => {
  let profiles = flex(dummyUrl);
  let firstUserId = JSON.parse(profiles).data[0].id;
  let firstUser = flex(`${dummyUrl}/${firstUserId}`);
  console.log(JSON.parse(firstUser));
  console.log('fetched profiles and details of first user');
}

getFirstUserDetails();

'---------------------'
// async/await
'---------------------'

// TODO: use async/await
// note: only works if the long running function returns a promise

'---------------------'
// async/await - error handling
'---------------------'

// todo: add error handling to code above

'---------------------'
// parallel - async/await + all
'---------------------'

const getFirstFiveUserDetails = async () => {
  try {
    let profiles = await flex(dummyUrl);
    const parsedProfiles = JSON.parse(profiles);
        
    const userRequests = [];
    for (let i = 0; i < 5; i++) {
      const id = parsedProfiles.data[i].id;
      userRequests.push(flex(`${dummyUrl}/${id}`));      
    }

    Promise.all(userRequests)
      .then((users) => {        
        users.forEach(user => {
          console.log(JSON.parse(user));  
        })
        console.log('fetched profiles and details of first user');
      })
      .catch(error => {
        console.log(error);
      })
    
  } catch (error) {
    console.log(error);
  }  
}

getFirstFiveUserDetails();

'>>>>>>>>>>>>>>>>>>>>>'
// 4. Job Queue
'>>>>>>>>>>>>>>>>>>>>>'

const jobQueue = () => {
  console.log(`begin script`);
  setTimeout(() => {
    console.log(`callback...`);
  }, 0);
  new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    console.log(`then...`)
  })
  console.log(`end script`);
}

jobQueue();

// -----------------------------------
// Fetch

console.log('public...')
const request = new Request(`${BASE_URL}/user`, {
  headers: {
    'app-id': APP_ID
  }
});

fetch(request)
  .then(response => {
    if (response.ok !== true) {
      console.error(`there was an error while trying to fetch: ${response.status}`)
    } else {
      response.json()
        .then(data => {
          console.log(data);
        })
    }
  })
  .catch(error => {
    console.error(`there was an exception while trying to fetch: ${error}`)
  })