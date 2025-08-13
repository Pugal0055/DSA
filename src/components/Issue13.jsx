const Issue13 = () => {
  let n = 6;
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let start = "";

    for (let j = 0; j <= i; j++) {
      if (toggle === 1) {
        start = start + 1;
        toggle = 0;
      } else {
        start = start + 0;
        toggle = 1;
      }
    }

    console.log(start);
  }

  return (
    <div>
      Start Pattern
      <pre>
        {`
1        
01
010 
1010
10101
010101
`}
      </pre>
      <br />
      Same pattern but toggle will not refresh
      <p> Completed in 04:00:15 seconds</p>
    </div>
  );
};

export default Issue13;
