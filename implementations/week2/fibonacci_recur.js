let readline = require('readline')

let calcFib = (x) => x < 2 ? x : calcFib(x - 1) + calcFib(x - 2)

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter a small number: ', (num) => {
  console.log(calcFib(parseInt(num, 10)))
  rl.close()
})
