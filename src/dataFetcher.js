async function fetchData(url) {
  return await fetch(url);
}

module.exports = { fetchData };