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



let display = "";




const buttonNumbers = document.querySelectorAll('button.number');

buttonNumbers.forEach((number) => {
	number.addEventListener('click', (e) => {

		let stringValue = e.target.value.toString();		
		const displayNumber = document.getElementById('displayNumber');		 
		displayNumber.textContent += stringValue ;

		
	})
} )

