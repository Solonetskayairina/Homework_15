    let x;
    let znak;
    let y;

    do {
        x = +prompt('Enter the first number');
    } while ( isNaN(x) || !x );

    do {
        znak = prompt('Select an operation: +, -, *, /, %, ^');
    } while ( !znak || !/^[+\-*/%^]+$/.test(znak) );

    do {
        y = +prompt('Enter the second number');
    } while ( isNaN(y) || !y );

    function doMath(x, znak, y) {
        switch (znak) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                if (y !== 0) {
                    return x / y;
                }
            case '%':
                return x % y;
            case '^':
                return Math.pow(x, y);
        }
    }

    const result = doMath(x, znak, y);
    alert(`Result: ${result}`)