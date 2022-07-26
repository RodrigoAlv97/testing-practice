import {reverseString} from "../code/reverseString"

test('Reversed' , () => {
    expect(reverseString('gorz')).toBe('zrog');
});

test('Accept empty strings' , () => {
    expect(reverseString('')).toBe('');
});

test('Accept Numbers' , () => {
    expect(reverseString(14)).toBe('41');
});