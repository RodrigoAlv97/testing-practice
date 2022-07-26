import { add , subtract , divide , multiply } from "../code/calculator";

//---------------------------------------------

test('add 2 numbers', () => {
    expect(add(11, 3)).toBe(14);
  });

test('add strings too' , () => {
    expect(add('11' , '3')).toBe(14);
});

test('add strings and numbers' , () => {
    expect(add('11' , 3)).toBe(14);
});

test('Error if not numbers' , () => {
    expect(add('11' , 'gorz')).toBe('ERROR');
});

//---------------------------------------------

test('subtract 2 numbers', () => {
    expect(subtract(11, 3)).toBe(8);
  });

test('subtract strings too' , () => {
    expect(subtract('11' , '3')).toBe(8);
});

test('subtract strings and numbers' , () => {
    expect(subtract('11' , 3)).toBe(8);
});

test('Error if not numbers' , () => {
    expect(subtract('11' , 'gorz')).toBe('ERROR');
});

//---------------------------------------------

test('divide 2 numbers', () => {
    expect(divide(16, 2)).toBe(8);
  });

  test('divide strings too', () => {
    expect(divide('16', '2')).toBe(8);
  });

  test('divide strings and numbers', () => {
    expect(divide(16, '2')).toBe(8);
  });

  test('Error if not numbers', () => {
    expect(divide(16, 'gorz')).toBe('ERROR');
  });

  test('Error if y = 0', () => {
    expect(divide(16, 0)).toBe('Error');
  });

//---------------------------------------------

test('multiply 2 numbers', () => {
    expect(multiply(14, 2)).toBe(28);
  });

test('multiply strings too' , () => {
    expect(multiply('14' , '2')).toBe(28);
});

test('multiply strings and numbers' , () => {
    expect(multiply('14' , 2)).toBe(28);
});

test('Error if not numbers' , () => {
    expect(multiply('14' , 'gorz')).toBe('ERROR');
});
