    let lengthOfTheMainArray;
    let lengthOfInternalArray;

    do {
        lengthOfTheMainArray = +prompt('Enter the length of the main array');
    } while ( isNaN(lengthOfTheMainArray) || !lengthOfTheMainArray );

    do {
        lengthOfInternalArray = +prompt('Enter the length of internal array');
    } while ( isNaN(lengthOfInternalArray) || !lengthOfInternalArray );

    function twoDimensionalArray(mainLength, innerLength) {

        const twoDArray =  [];

        for (let i = 0; i < mainLength; i++) {
            const innerArray = [];

            for (let j = 0; j < innerLength; j++) {
                let value = +prompt(`Enter value for string ${i}, column ${j}`);
                if (!value || isNaN(value)) {
                    alert('Sorry, enter try again please')
                }
                innerArray.push(value);
            }
            twoDArray.push(innerArray);
        }
        return twoDArray;
    }

    const userArray = twoDimensionalArray(lengthOfTheMainArray, lengthOfInternalArray);
    alert('twoDArray:\n' + userArray.map(row => row.join(' ')).join('\n'));