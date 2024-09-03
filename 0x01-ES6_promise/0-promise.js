// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve('Success');
  });
}

module.exports = {
  getResponseFromAPI,
};
