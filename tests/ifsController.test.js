const { checkCondition } = require('../server/controllers/ifsController');

// Mock de response object para Jest
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('IfsController - checkCondition', () => {
  test('debería retornar "a es mayor" cuando a > b', () => {
    const req = { body: { a: 5, b: 3 } };
    const res = mockResponse();

    checkCondition(req, res);

    expect(res.json).toHaveBeenCalledWith({ result: 'a es mayor' });
  });

  test('debería retornar "b es mayor" cuando a < b', () => {
    const req = { body: { a: 2, b: 7 } };
    const res = mockResponse();

    checkCondition(req, res);

    expect(res.json).toHaveBeenCalledWith({ result: 'b es mayor' });
  });

  test('debería retornar "a y b son iguales" cuando a == b', () => {
    const req = { body: { a: 4, b: 4 } };
    const res = mockResponse();

    checkCondition(req, res);

    expect(res.json).toHaveBeenCalledWith({ result: 'a y b son iguales' });
  });

  test('debería retornar error cuando los valores no son números', () => {
    const req = { body: { a: 'texto', b: 3 } };
    const res = mockResponse();

    checkCondition(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Los valores a y b deben ser números'
    });
  });
}); 