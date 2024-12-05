const Request = require('supertest');

const App = require('../index');

let payload;
let endpoint;

describe('Basic Addition', () => {
  beforeEach(() => {
    endpoint = '/basic/addition';
    payload = {
      numA: 1,
      numB: 2
    };
  });

  test('Status 200: Successfully Added 2 Numbers', async () => {
    await Request(App)
      .post(endpoint)
      .send(payload)
      .expect(200)
      .then((res) => {
        expect(res.body.data.result).toBe(3);
      });
  });

  test('Status 400: Missing numA Payload', async () => {
    delete payload.numA;

    await Request(App)
      .post(endpoint)
      .send(payload)
      .expect(400);
  });

  test('Status 400: Missing numB Payload', async () => {
    delete payload.numB;

    await Request(App)
      .post(endpoint)
      .send(payload)
      .expect(400);
  });

  test('Status 400: numA is NaN', async () => {
    payload.numA = '1';

    await Request(App)
      .post(endpoint)
      .send(payload)
      .expect(400);
  });

  test('Status 400: numB is NaN', async () => {
    payload.numB = '2';

    await Request(App)
      .post(endpoint)
      .send(payload)
      .expect(400);
  });

  test('Status 400: numA and numB are NaN', async () => {
    payload.numA = '1';
    payload.numB = '2';

    await Request(App)
      .post(endpoint)
      .send(payload)
      .expect(400);
  });
});