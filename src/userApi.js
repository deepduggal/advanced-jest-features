const { fetchData } = require("./dataFetcher");

/**
 * Fetches user data from a placeholder API
 * @returns 
 */
async function getUser() {
  return await (await fetchData('https://jsonplaceholder.typicode.com/users/1')).json();
}

module.exports = { getUser };