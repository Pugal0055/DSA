import React from "react";

const Issue02 = () => {
  function countNegatives(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        sum++;
      }
    }
    return sum;
  }

  let arr = [2, -9, -17, 0, -1, -10, -4, 8];

  console.log(countNegatives(arr));

  return (
    <div>
      Write a function that retruns the number of negative numbers in an array
      <br />
      <p> Completed in 2:00.38 seconds</p>
    </div>
  );
};

export default Issue02;
