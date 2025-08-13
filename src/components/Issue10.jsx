const Issue10 = () => {
  let n = 5;

  for (let i = 0; i < n; i++) {
    let start = "";

    for (let j = 1; j <= n - i; j++) {
      start = start + j;
    }
    console.log(start);
  }

  return (
    <div>
      Start Pattern
      <pre>
        {`
12345
1234 
123
12
1`}
      </pre>
      <br />
      <p> Completed in 04::53 seconds</p>
    </div>
  );
};

export default Issue10;
