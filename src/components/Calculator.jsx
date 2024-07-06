import {useState} from 'react';
import Board from './Board';

// This is the main Calculator component
export default function Calculator() {

  // Set the initial state for the calculator
  const [numbers, setNumbers] = useState([0]) // The numbers that are currently being displayed on the board
  const [isZero, setIsZero] = useState(true) // Whether or not the board is currently displaying 0
  const [isDecimal, setIsDecimal] = useState(false) // Whether or not a decimal has been added to the board
  const [result, setResult] = useState() // The result of the calculation
  const [operator, setOperator] = useState() // The operator that was last selected

  // Function to reset the calculator
  const handleReset = () => {
    setNumbers([0]) // Set the board to display 0
    setIsZero(true) // Set the board to display 0
    setIsDecimal(false) // Set the board to not display a decimal
  }

  // Function to handle when a number is inputted
  const handleInputNumbers = (number) => {
    // If the board is currently displaying 0, replace it with the inputted number
    if(isZero){
      setNumbers([number]);
      setIsZero(false)
    } else {
      // If the board is not displaying 0, add the inputted number to the end of the board
      setNumbers([
        ...numbers, 
        number
      ]);
    }
  }

  // Function to handle when the plus/minus button is clicked
  const handleAddPlusMinus = () => {
    // Get the current number on the board
    let currentNumber = parseFloat(numbers.join(''));
    // Multiply the current number by -1 to flip its sign
    currentNumber = -currentNumber;
    // Set the board to display the flipped number
    setNumbers([currentNumber]);
    // setNumbers('-' + parseFloat(numbers.join('')) || ''); // Alternate way of flipping the sign
  };
    
  // Function to handle when an operator is clicked
  function handleOperators(operator){
    // If the board is currently displaying 0, do nothing
    if(isZero){
      return
    } else {
      // Clear the board of any numbers
      setNumbers([]);
      // Set the result to the current number on the board
      setResult(parseFloat(numbers.join('')))
      // Set the operator to the selected operator
      setOperator(operator)
      // Set the board to not display a decimal
      setIsDecimal(false)
    }
  }

  // Function to handle when the calculate button is clicked
  function handleCalculation(){
    // Get the current number on the board
    const newNumber = parseFloat(numbers.join(''));
    let finalNumber;
    // If the board is not currently displaying 0
    if(numbers !== 0){
      // Use a switch statement to handle the different operators
      switch(operator){
        case '+':
          finalNumber = result + newNumber;
          break;
        case '-':
          finalNumber = result - newNumber;
          break;
        case 'x':
          finalNumber = result * newNumber;
          break;
        case '÷':
            finalNumber = result / newNumber;
          break;
            default:
              return   
      }
      // Set the board to display the final result
      setNumbers([finalNumber]);
    }
    // Set the operator to null
    setOperator(null);
    // Set the board to not display a decimal
    setIsDecimal(false)
  }

  // Function to handle when the division button is clicked
  function handleDiviser(){
    // Get the current number on the board
    const diviser = parseFloat(numbers.join(''))/ 100;
    // Format the current number to 1 decimal place
    const formattedDiviser = diviser.toPrecision(1);
    // Set the board to display the formatted number
    setNumbers([formattedDiviser]);
  }

  // Function to handle when the decimal button is clicked
  function handleAddDecimal(decimal){
    // If the board does not currently display a decimal
    if (!isDecimal) {
      // Add the decimal to the end of the board
      setNumbers([...numbers, decimal]);
      // Set the board to display a decimal
      setIsDecimal(true);
      // Set the board to not display 0
      setIsZero(false);
    }
  }

  // Determine if the disable button should be disabled
  const disableBtn = isZero && 'disabled'
 
  // Render the Calculator component
  return (
    <div className="h-4/5 w-96 bg-black rounded-3xl overflow-hidden shadow-2xl">
    <Board 
      onReset={handleReset}
      onInputNumbers={handleInputNumbers}
      onAddDecimal={handleAddDecimal}
      onAddPlusMinus={handleAddPlusMinus}
      onOperators={handleOperators}
      onCalculation={handleCalculation}
      onDiviser={handleDiviser}
      numbers={numbers}
      onDisable={disableBtn}
      onZero={isZero ? 'AC' : 'C'}
    />
    </div>
  );
}
  