const { fetchData } = require("./dataFetcher");

describe("fetchData", () => {
  it('with promise syntax', () => {
    return fetchData('http://example.com/')
      .then(response => response.text())
      .then(data => expect(data.charAt(0)).toBe('<'));
  });

  it('with async/await syntax', async () => {
    const response = await fetchData('http://example.com/');
    const htmlString = await response.text();
    expect(htmlString.charAt(0)).toBe('<')
  });
});