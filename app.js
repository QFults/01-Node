const fs = require('fs')

// fs.writeFile('example.txt', 'Hello World!', (err) => {
//   if (err) { console.log(err) }
// })

fs.writeFile('arr.js', '[1,2,3,4,5]', (err) => {
  if (err) { console.log(err) }

  fs.writeFile('arr.js', '["a","b","c"]', (err) => {
    if (err) { console.log(err) }
  })
})

