function addOperator (firstNumber, secondNumber) {
	return display = firstNumber + secondNumber
};

function subtractOperator (firstNumber, secondNumber) {
	return display = firstNumber - secondNumber;
};

function multiplyOperator (firstNumber, secondNumber) {
	return display = firstNumber * secondNumber;
};


function divideOperator (firstNumber, secondNumber) {
	return display =  firstNumber / secondNumber;
};


function operate (firstNumber, secondNumber) {

	if (operatorId == "plus") {
		addOperator (firstNumber, secondNumber)
	} else if ( operatorId == "minus" ) {
		subtractOperator (firstNumber, secondNumber)
	} else if ( operatorId == "multiply") {
		multiplyOperator (firstNumber, secondNumber)
	} else if ( operatorId == "divide") {
		divideOperator (firstNumber, secondNumber)
	}
    

}



let display = "";

let firstNumber = 0;

let secondNumber = 0;

let operatorId = "";




const buttonNumbers = document.querySelectorAll('button.number');
buttonNumbers.forEach((number) => {
	number.addEventListener('click', (e) => {
		if (display == "0" ) {
			display = "";
		} 

		let stringValue = e.target.value.toString();

		console.log(typeof(stringValue))
		display += stringValue;
		const displayNumber = document.getElementById('displayNumber');		 
		displayNumber.textContent = display ;

		
	});
} );

const buttonOperators = document.querySelectorAll('.operator');
buttonOperators.forEach((operator) => {
	operator.addEventListener('click', (e) => {
		

		
		let numberValue = Number(display);

		if ( firstNumber == 0 ){
			firstNumber = numberValue;
		} else if ( secondNumber == 0 ){
			secondNumber = numberValue; 
			operate(firstNumber, secondNumber);
			const displayNumber = document.getElementById('displayNumber');	 
			displayNumber.textContent = display;
			firstNumber = display;
			secondNumber = 0;
		} 
			
		operatorId = e.target.id;
		
	
		 display = "";
		

		
	});
});


const zeroButton = document.getElementById('zero');
zeroButton.addEventListener('click', (e) => {


	let stringValue = e.target.value.toString();


	function zeroAdder () {
	display += stringValue;
	const displayNumber = document.getElementById('displayNumber');		 
	displayNumber.textContent = display ;}

	if (operatorId == "divide"){
		alert("dont divide with zero!!")
	}
	else if (display == "") {
		zeroAdder()
	} else if (display == "0") {
		display = "0";
	} else {
		zeroAdder();
	}
});

const dotButton = document.getElementById('dot')
dotButton.addEventListener( 'click', () => {


		const displayNumber = document.getElementById('displayNumber');	
		display += "."	 
		displayNumber.textContent = display ;
 

})




const equalButton = document.getElementById('equal')
equalButton.addEventListener('click', () => {
	if ( firstNumber == 0 ){
		alert("there is no operation");
	} else if ( secondNumber == 0 ){
		secondNumber = +display; 
		operate(firstNumber, secondNumber);
		const displayNumber = document.getElementById('displayNumber');	 
		displayNumber.textContent = display;
		firstNumber = display;
		secondNumber = 0;
	} 
		
});


const acButton = document.getElementById('ac');
acButton.addEventListener('click', () => {
 	display = "";

	firstNumber = 0;

	secondNumber = 0;

	operatorId = "";

	const displayNumber = document.getElementById('displayNumber');	 
	displayNumber.textContent = "";
})