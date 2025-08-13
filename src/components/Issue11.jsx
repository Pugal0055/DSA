const Issue11 = () => {
  let n = 5;

  for (let i = 0; i < n; i++) {
    let start = "";

    for (let j = 1; j < n - i; j++) {
      //for (let j = 0; j < n - (i + 1); j++) {
      start = start + "-";
    }

    for (let k = 0; k <= i; k++) {
      start = start + "*";
    }
    console.log(start);
  }

  return (
    <div>
      Start Pattern
      <pre>
        {`
----*
---** 
--***
-****
*****
`}
      </pre>
      <br />
      <p> Completed in 14:00:25 seconds</p>
    </div>
  );
};

export default Issue11;

/* 

This both will work fine

 for (let j = 1; j < n - i; j++) {
 for (let j = 0; j < n - (i + 1); j++) {

*/
