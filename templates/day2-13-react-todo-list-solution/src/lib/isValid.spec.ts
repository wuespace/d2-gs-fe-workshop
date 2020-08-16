import isValid from "./isValid";

it('should compare floating point numbers', () => {
  // expect(10.0 / 3.0).toBe(3.3333333333); // Problem
  expect(10.0 / 3.0).toBeCloseTo(3.33, 2);
});

describe('isValid()', () => {
  it('should return true on valid input', () => {
    expect(isValid('Irgendwas')).toBe(true);
  });

  it('should return false on invalid input', () => {
    expect(isValid('')).toBeFalsy();
  });

  it('should throw on non iterables', () => {
    const handler = () => {
      // @ts-ignore
      isValid({ 'hehe': 'hehe' });
    };
    expect(handler).toThrow();
  });
});
