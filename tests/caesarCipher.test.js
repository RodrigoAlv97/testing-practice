import { caesarCipher } from "../code/caesarCipher";



test('a to be c', () => {
    expect(caesarCipher('a' , 2)).toBe('c');
  });

  test('az to be dc', () => {
    expect(caesarCipher('az' , 3)).toBe('dc');
  });

  test('RR to be WW', () => {
    expect(caesarCipher('RR' , 5)).toBe('WW');
  });

  test('Gorz to be Ucfn', () => {
    expect(caesarCipher('Gorz' , 14)).toBe('Ucfn');
  });