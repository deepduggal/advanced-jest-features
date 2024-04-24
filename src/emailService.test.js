const { sendEmail } = require('./emailService');

describe('sendEmail', () => {
  it('should mock sending an email', () => {
    const sendEmail = jest.fn((to, subject, body) => `Email sent to ${to}`)
    expect(sendEmail('Bill', 'A subject', 'A body')).toBe('Email sent to Bill');
  });
});