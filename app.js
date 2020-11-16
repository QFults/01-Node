// const a = parseInt(process.argv[2])
// const b = parseInt(process.argv[3])

// console.log(a + b)


const op = process.argv[2]
const a = parseInt(process.argv[3])
const b = parseInt(process.argv[4])

switch (op) {
  case 'add':
    console.log(a + b)
    break
  case 'subtract':
    console.log(a - b)
    break
  case 'multiply':
    console.log(a * b)
    break
  case 'divide':
    console.log(a / b)
    break
}
