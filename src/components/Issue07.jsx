const Issue07 = () => {
  let n = 4;

  for (let i = 0; i < n; i++) {
    let start = "";

    for (let j = 0; j <= i; j++) {
      start = start + "*";
    }
    console.log(start);
  }

  return (
    <div>
      Start Pattern
      <pre>
        {`
*
** 
***
****`}
      </pre>
      <br />
      <p> Completed in 37.07 seconds</p>
    </div>
  );
};

export default Issue07;
