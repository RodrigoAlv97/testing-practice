import { capitalize } from "../code/capitalize";

test('Be a string' , () => {
    expect(typeof 'value').toBe('string');
});

test('Capitalized' , () => {
    expect(capitalize('gorz')).toBe('Gorz');
});

test('Accept empty strings' , () => {
    expect(capitalize('')).toBe('');
});

test('Accept Numbers' , () => {
    expect(capitalize(15)).toBe('15');
});