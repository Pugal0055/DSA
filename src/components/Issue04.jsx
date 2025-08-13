import React from "react";

const Issue04 = () => {
  function findSmallest(arr) {
    let smallestNumber = Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallestNumber) {
        smallestNumber = arr[i];
      }
    }

    return smallestNumber;
  }

  let arr = [-5, -19, -3];

  console.log(findSmallest(arr));

  return (
    <div>
      Write a function that returns the smallest number in array
      <br />
      <p> Completed in 5:39.11 seconds</p>
    </div>
  );
};

export default Issue04;
