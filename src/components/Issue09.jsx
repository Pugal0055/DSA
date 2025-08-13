const Issue09 = () => {
  let n = 5;

  for (let i = 0; i < n; i++) {
    let start = "";

    for (let j = 0; j <= i; j++) {
      start = start + (i + 1);
    }
    console.log(start);
  }

  return (
    <div>
      Start Pattern
      <pre>
        {`
1
22 
333
4444
55555`}
      </pre>
      <br />
      <p> Completed in 30 seconds</p>
    </div>
  );
};

export default Issue09;

/* 

if i and j = 0 is confuze use this

 for (let i = 1; i <= 5; i++) {
    let start = "";

    for (let j = 1; j <= i; j++) {
      start = start + i ;
    }
    console.log(start);
  }



*/
