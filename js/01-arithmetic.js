    const arrayOfDifferentTypes = [ 'Apple', { name: 'John' }, true, 2, 3, 4];

    const arithmeticMeanNumberElements = function () {
        const numbersOnly = arrayOfDifferentTypes.filter( (element) =>  typeof element === "number");
        const sum = numbersOnly.reduce((total, num) => total + num, 0);
        const arithmeticMean = sum / numbersOnly.length
        alert(arithmeticMean)
    }

    arithmeticMeanNumberElements()