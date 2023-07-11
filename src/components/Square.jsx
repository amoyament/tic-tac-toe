import React from "react";
import { useState } from "react";

// Update the Square component to read the value prop that you’ll pass from the Board
// Let’s fill the Square component with an X when you click it. Declare a function called handleClick inside of the Square. Then, add onClick to the props of the button JSX element returned from the Square
// As a next step, you want the Square component to “remember” that it got clicked, and fill it with an “X” mark. To “remember” things, components use state.
// useState that you can call from your component to let it “remember” things. Let’s store the current value of the Square in state, and change it when the Square is clicked.
// edit the Square component to receive the value prop from the Board component. This will require removing the Square component’s own stateful tracking of value and the button’s onClick prop

const Square = ({ value, onSquareClick }) => {
  // Remove the value prop from the Square component. Instead, add a new line at the start of the Square that calls useState. Have it return a state variable called value
  // value stores the value and setValue is a function that can be used to change the value. The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null.
  // const [value, setValue] = useState(null);
  //Now you’ll change Square to display an “X” when clicked. Replace the console.log("clicked!"); event handler with setValue('X')
  // By calling this set function from an onClick handler, you’re telling React to re-render that Square whenever its <button> is clicked. After the update, the Square’s value will be 'X', so you’ll see the “X” on the game board.
  // const handleClick = () => {
  //   setValue("X");
  // };
  // return (
  //   <div>
  //     {/* // function Square({ value }) indicates the Square component can be passed a prop called value. */}
  //     <button className="square" onClick={handleClick}>
  //       {value}
  //     </button>
  //   </div>
  // );
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
