    let outputLine;
    let charactersToDelete;

    do {
        outputLine = prompt('Enter а sentence:');
    } while ( !outputLine || /^\d+$/.test(outputLine) );

    do {
        charactersToDelete = prompt('Enter characters to delete:');
    } while ( !charactersToDelete || /^\d+$/.test(charactersToDelete) );
    function removesCharacters (outputLine, charactersToDelete) {
        const charArray = outputLine.split('');

        const charactersToDeleteSet = new Set(charactersToDelete);
        const hasCharactersToDelete = charArray.some(char => charactersToDeleteSet.has(char));

        if (hasCharactersToDelete) {
            for (let i = 0; i < charArray.length; i++) {
                if ( charArray[i] !== ' ' && charactersToDelete.includes(charArray[i]) ) {
                    charArray[i] = '';
                }
            }
        } else {
            alert('No characters to delete found in the input string');
        }
        return charArray.join('');
    }

    const result = removesCharacters(outputLine, charactersToDelete);
    alert(result);