import React from "react";

const Issue01 = () => {
  function searchElement(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }

    return -1;
  }

  let arr = [4, 2, 0, 10, 8, 30];

  console.log(searchElement(arr, 4));

  return (
    <div>
      Write a function that searches for an element in an array and returns the
      index, if the elements is not present then just return -1
      <br />
      <p> Completed in 3:16.92 seconds</p>
    </div>
  );
};

export default Issue01;
