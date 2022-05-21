function addOperator (firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

function subtractOperator (firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

function multiplyOperator (firstNumber, secondNumber) {
	return firstNumber * secondNumber;
};


function divideOperator (firstNumber, secondNumber) {
	return firstNumber / secondNumber;
};


function operate (callback, firstNumber, secondNumber) {
    return callback(firstNumber, secondNumber)
}



const buttonNumbers = document.querySelectorAll('button.number');

buttonNumbers.forEach((number) => {
	number.addEventListener('click', (e) => {
		console.log(e.target.value)
	})
} )