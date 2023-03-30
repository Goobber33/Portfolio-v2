const request = require('supertest');
const app = require('./server.js');

let server;

beforeAll(() => {
  server = app.listen();
});

afterAll((done) => {
  server.close(done);
});

describe('POST /send-email', () => {
  test('returns status code 200 when email is sent successfully', async () => {
    const mockReqBody = { name: 'John', email: 'john@example.com', message: 'Hello' };

    const response = await request(app)
      .post('/send-email')
      .send(mockReqBody);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Email sent successfully!');
  });

  test('returns status code 500 when email sending fails', async () => {
    const mockReqBody = { name: 'John', email: 'john@example.com', message: 'Hello' };

    // Modify the process.env.EMAIL_USER and/or process.env.APP_PASSWORD to intentionally cause an error
    const env = process.env;
    process.env.EMAIL_USER = 'invaliduser';
    process.env.APP_PASSWORD = 'invalidpassword';

    const response = await request(app)
      .post('/send-email')
      .send(mockReqBody);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('An error occurred while sending the email.');

    // Reset the process.env variables to their original values
    process.env = env;
  });
});
