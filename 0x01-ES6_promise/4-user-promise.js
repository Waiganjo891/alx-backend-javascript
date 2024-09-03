// signUpUser function returns a resolved Promise
function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

module.exports = { signUpUser };
