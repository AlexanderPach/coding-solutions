function res(x) {
    while (x != 1) {
        console.log(x);
        if (x % 2 == 0) {
            x = x / 2;
        } else {
            x = (x*3) + 1
        }
    }
    console.log(1);

}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(``, input => {
    res(input)
    readline.close();
  });
