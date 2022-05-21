function addOperator (firstNumber, secondNumber) {
	let addValue = firstNumber + secondNumber
	;
	display = addValue;
	;
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

let firstNumber = 0;

let secondNumber = 0;




const buttonNumbers = document.querySelectorAll('button.number');
buttonNumbers.forEach((number) => {
	number.addEventListener('click', (e) => {

		let stringValue = e.target.value.toString();
		display += stringValue;
		const displayNumber = document.getElementById('displayNumber');		 
		displayNumber.textContent = display ;

		
	});
} );

const buttonOperators = document.querySelectorAll('.operator');
buttonOperators.forEach((operator) => {
	operator.addEventListener('click', () => {
		
		let numberValue = Number(display);

		if ( firstNumber == 0 ){
			firstNumber = numberValue;
		} else if ( secondNumber == 0 ){
			secondNumber = numberValue; 
			addOperator(firstNumber, secondNumber);
			const displayNumber = document.getElementById('displayNumber');	 
			displayNumber.textContent = display;
			firstNumber = display;
			secondNumber = 0;
		} 
			
		
	
		 display = "";
		

		
	})
} )


