import { greet } from './index';

describe('index.ts', () => {
  describe('Given main is imported directly', () => {
    describe('When the function is invoked', () => {
      let returnValue: string;
      const input = { name: 'ovidb ' };
      beforeAll(() => {
        returnValue = greet(input);
      });
      describe('Then the returned value', () => {
        it('should greet with the name', () => {
          expect(returnValue).toBe(`Hello ${input.name}`);
        });
      });
    });
  });
});
