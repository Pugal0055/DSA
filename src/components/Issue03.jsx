const Issue03 = () => {
  function findLargest(arr) {
    let largestNumer = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestNumer) {
        largestNumer = arr[i];
      }
    }

    return largestNumer;
  }

  let arr = [-50, -57484, -1001];

  console.log(findLargest(arr));

  return (
    <div>
      Write a function that retruns the largest number in an array
      <br />
      <p> Completed in 4:06.11 seconds</p>
    </div>
  );
};

export default Issue03;
