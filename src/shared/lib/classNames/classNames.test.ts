import { cn } from './classNames';

describe('classNames', () => {
  test('without params', () => {
    expect(cn()).toBe(undefined);
  });

  test('with only first param', () => {
    expect(cn('someClass')).toBe('someClass');
  });

  test('with epmty params', () => {
    expect(cn('someClass', '', null, undefined)).toBe('someClass');
  });

  test('should skip false values', () => {
    const flagFalse = false;
    expect(cn('someClass', flagFalse && 'class2')).toBe('someClass');
  });
});
