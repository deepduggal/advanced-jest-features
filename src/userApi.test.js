const { getUser } = require('./userApi');

describe('getting user data', () => {
  // Mocked Tests
  it('successful request', async () => {
    const getUser = jest.fn(() => Promise.resolve({
      id: 1,
      name: 'Leanne Graham'
    }));
    const user = await getUser();
    expect(user.id).toBe(1);
    expect(user.name).toBe('Leanne Graham');
  });

  it('request with network issue', async () => {
    // mock the fetchData function to simulate a network issue
    const getUser = jest.fn(() => Promise.reject('Network error'));
    await expect(getUser()).rejects.toMatch('Network error');
  });
});