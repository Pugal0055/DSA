const Issue06 = () => {
  let n = 4;

  for (let i = 0; i < n; i++) {
    let start = "";

    for (let j = 0; j < n; j++) {
      start = start + "*";
    }
    console.log(start);
  }

  return (
    <div>
      Start Pattern
      <pre>
        {`
****
**** 
****
****`}
      </pre>
      <br />
      <p> Completed in 06:28.22 seconds</p>
    </div>
  );
};

export default Issue06;

/* 

n = 4

 i = 0  j = 0    start = **** 
 i = 1  j = 1    start = **** 
 i = 2  j = 2    start = **** 
 i = 3  j = 3    start = **** 
 
 End of the day we get start partten
 
 i is responsible for row
 j is responsible for column

 if we change the i loop length it will increase the row 
 if we change the j loop length it will increase the column
 

*/
