// File: 2-then.js

function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      return {};
    });
}

module.exports = handleResponseFromAPI;
