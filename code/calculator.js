 function add(a, b) {
    let x = Number(a);
    let y = Number(b);

    if ( isNaN(x) || isNaN(y) ) {
        return 'ERROR'
    } else {
        return x + y
    }
}

function subtract(a, b) {
    let x = Number(a);
    let y = Number(b);

    if ( isNaN(x) || isNaN(y) ) {
        return 'ERROR'
    } else {
        return x - y
    }
}

function divide(a, b) {

    let x = Number(a);
    let y = Number(b);

    if ( isNaN(x) || isNaN(y) ) {
        return 'ERROR'
    } else if ( y == 0) {
        return 'Error'
    } else {
        return x / y
    }
}

function multiply(a, b) {
    let x = Number(a);
    let y = Number(b);

    if ( isNaN(x) || isNaN(y) ) {
        return 'ERROR'
    } else {
        return x * y
    }
}

export {add , subtract , divide , multiply}