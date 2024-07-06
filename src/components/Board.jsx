export default function Board({
    // Function to reset the calculator
    onReset,
    // Function to handle when a number is inputted
    onInputNumbers,
    // Function to handle when the decimal button is clicked
    onAddDecimal,
    // Function to handle when the plus/minus button is clicked
    onAddPlusMinus,
    // Function to handle when an operator is clicked
    onOperators,
    // Function to handle when the calculate button is clicked
    onCalculation,
    // Function to handle when the division button is clicked
    onDiviser,
    // The numbers that are currently being displayed on the board
    numbers,
    // Whether or not the board is currently displaying 0
    onZero,
    // Whether or not the calculator is currently disabled
    onDisable,
  }) {
    // Define CSS classes for button styling
    const cssClassBlack =
      "h-20 w-20 bg-zinc-900 text-white rounded-full text-2xl font-semibold m-2 hover:bg-zinc-500 transition-colors duration-300 ease-in-out";
    const cssClassOrange =
      "h-20 w-20 bg-orange-400 rounded-full text-4xl text-white font-semibold m-1 hover:bg-slate-50 transition-colors duration-300 ease-in-out hover:text-orange-400";
    const cssClassGray =
      "h-20 w-20 bg-gray-400 rounded-full text-2xl font-semibold m-1 hover:bg-slate-50 transition-colors duration-300 ease-in-out";

    return (
      <>
        <div className="pt-5 px-5 h-1/3">
          {/* The current number on the board is displayed in this paragraph */}
          <p className="bg-black h-full w-full text-right pt-32 text-5xl font-thin text-white">
            {numbers}
          </p>
        </div>
        <div>
          {/* Row 1 */}
          <div className="flex justify-around">
            {/* Reset button */}
            <button className={cssClassGray} onClick={onReset}>
              {onZero}
            </button>
            {/* Plus/minus button */}
            <button className={cssClassGray} onClick={onAddPlusMinus}>
              +/-
            </button>
            {/* Division button */}
            <button className={cssClassGray} onClick={onDiviser}>
              %
            </button>
            {/* Division operator button */}
            <button
              className={cssClassOrange}
              onClick={() => onOperators("÷")}
            >
              ÷
            </button>
          </div>
          {/* Row 2 */}
          <div className="flex justify-around">
            {/* 7 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(7)}>
              7
            </button>
            {/* 8 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(8)}>
              8
            </button>
            {/* 9 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(9)}>
              9
            </button>
            {/* Multiplication operator button */}
            <button
              className={cssClassOrange}
              onClick={() => onOperators("x")}
            >
              x
            </button>
          </div>
  
          {/* Row 3 */}
          <div className="flex justify-around">
            {/* 4 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(4)}>
              4
            </button>
            {/* 5 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(5)}>
              5
            </button>
            {/* 6 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(6)}>
              6
            </button>
            {/* Subtraction operator button */}
            <button
              className={cssClassOrange}
              onClick={() => onOperators("-")}
            >
              -
            </button>
          </div>
  
          {/* Row 4 */}
          <div className="flex justify-around">
            {/* 1 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(1)}>
              1
            </button>
            {/* 2 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(2)}>
              2
            </button>
            {/* 3 button */}
            <button className={cssClassBlack} onClick={() => onInputNumbers(3)}>
              3
            </button>
            {/* Addition operator button */}
            <button
              className={cssClassOrange}
              onClick={() => onOperators("+")}
            >
              +
            </button>
          </div>
  
          {/* Row 5 */}
          <div className="flex justify-around">
            {/* 0 button */}
            <button
              disabled={onDisable}
              className={`${cssClassBlack} pr-36 pl-8 text-left`}
              onClick={() => onInputNumbers(0)}
            >
              0
            </button>
            {/* Decimal button */}
            <button className={cssClassBlack} onClick={() => onAddDecimal(".")}>
              .
            </button>
            {/* Calculate button */}
            <button
              className={cssClassOrange}
              onClick={onCalculation}
            >
              =
            </button>
          </div>
        </div>
      </>
    );
  }
  