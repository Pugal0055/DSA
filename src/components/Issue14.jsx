/* 
Corner cases

1. start with zero
2. start with  negative number


*/

const Issue14 = () => {
  function conuntDigits(n) {
    if (n == 0) return 1;
    if (n < 0) return 1;

    n = Math.abs(n); // this help to change negative number to pasitive number

    let count = 0;
    let nValue = n;

    while (nValue > 0) {
      nValue = Math.floor(nValue / 10);
      count++;
    }

    return count;
  }

  let num = 25056159;

  console.log(conuntDigits(num));

  return (
    <div>
      Write a function that returns the count of digits in a number
      <br />
      <br />
      <p> Completed in 09:08.11 seconds</p>
    </div>
  );
};

export default Issue14;

/* 
   Math.floor(x) → Rounds down to the nearest integer (toward −∞).

   Math.round(x) → Rounds to the nearest integer (0.5 and above go up, below
      0.5 go down).

   Math.abs(x) → Returns the absolute value (removes the sign). or if u have
      minus value it will remove the miuns symbol
 

    Math.ceil(x) → Rounds up to the nearest integer always goes up.

*/
