/* 
Corner cases

1. Array is empty

2. Array has negative number

3. Array has duplicate


*/

const Issue05 = () => {
  function secondLargest(arr) {
    if (arr.length < 2) {
      return null;
    }

    let fistLargest = -Infinity;
    let secondLarge = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > fistLargest) {
        secondLarge = fistLargest;
        fistLargest = arr[i];
      } else if (arr[i] > secondLarge && arr[i] != fistLargest) {
        secondLarge = arr[i];
      }
    }
    return secondLarge;
  }

  let arr = [4, 0, 2, 11, 9];
  let arr1 = [5, 6, 4, 3, 2, 1];
  let arr2 = [5, 6, 4, 3, 20, 22];
  let arr3 = [5];
  let arr4 = [4, 0, 2, 11, 9, 11];

  console.log(secondLargest(arr));
  console.log(secondLargest(arr1));
  console.log(secondLargest(arr2));
  console.log(secondLargest(arr3));
  console.log(secondLargest(arr4));
  return (
    <div>
      Find the second largest number in an array
      <br />
      <p> Completed in 8:31.53 seconds</p>
    </div>
  );
};

export default Issue05;
