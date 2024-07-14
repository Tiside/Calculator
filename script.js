document.addEventListener('DOMContentLoaded', function () {
    var result = document.getElementById('result').innerHTML;
    var lastnumbers = document.getElementById('lastnumbers').innerHTML;
    let currentInput = '';
    let currentOperator = '';
    let firstNumber = null;
    let secondNumber = null;
    let wynik = 0;

    function numbers(number) {
        currentInput += number;
        document.getElementById('lastnumbers').innerHTML = currentInput;
        console.log("liczba " + number);
    }

    function operators(operator) {
        if (operator == 'erase') {
            if(firstNumber != null && secondNumber == null){
                firstNumber = null
            }else{
                secondNumber = null
            }
            firstNumber = null;
            secondNumber = null;
            currentInput = '';
            document.getElementById('lastnumbers').innerHTML = '0';
        } else if (operator === 'C') {
            currentInput = '';
            firstNumber = null;
            secondNumber = null;
            wynik = 0;
            document.getElementById('lastnumbers').innerHTML = '0';
            document.getElementById('result').innerHTML = '0';
        } else if (operator === '=') {
            secondNumber = parseFloat(currentInput);
            if (currentOperator === '+') {
                wynik = firstNumber + secondNumber;
            } else if (currentOperator === '-') {
                wynik = firstNumber - secondNumber;
            } else if (currentOperator === '÷') {
                wynik = firstNumber / secondNumber;
            } else if (currentOperator === 'x') {
                wynik = firstNumber * secondNumber;
            }
            document.getElementById('result').innerHTML = wynik;
            currentInput = wynik.toString();
            firstNumber = wynik;
            secondNumber = null;
            currentOperator = '';
        } else {
            if (currentInput !== '') {
                if (currentOperator) {
                    document.getElementById('lastnumbers').innerHTML = firstNumber + ' ' + operator;
                } else {
                    firstNumber = parseFloat(currentInput);
                    currentOperator = operator;
                    currentInput = '';
                    document.getElementById('lastnumbers').innerHTML = firstNumber + ' ' + currentOperator;
                }
            } else if (currentOperator) {
                currentOperator = operator;
                document.getElementById('lastnumbers').innerHTML = firstNumber + ' ' + currentOperator;
            }
        }
        console.log(operator);
    }

    window.numbers = numbers;
    window.operators = operators;


    

});
function changeTheme() {
    document.body.classList.toggle('dark-mode-variables');
}
