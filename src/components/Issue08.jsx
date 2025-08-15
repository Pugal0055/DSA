const Issue08 = () => {
  let n = 5;

  for (let i = 0; i < n; i++) {
    let start = "";

    for (let j = 0; j <= i; j++) {
      start = start + (j + 1);
    }
    console.log(start);
  }

  return (
    <div>
      Start Pattern
      <pre>
        {`
1
12 
123
1234
12345`}
      </pre>
      <br />
      <p> Completed in 37.07 seconds</p>
    </div>
  );
};

export default Issue08;
