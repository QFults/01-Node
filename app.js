// let person = require('./person.js')

// console.log(person)
const fs = require('fs')
const movies = require('./movies.js')
const songs = require('./songs.js')
const foods = require('./foods.js')
const games = require('./games.js')

fs.writeFile('favorites.txt', `
  ${movies.join(', ')}, ${songs.join(', ')}, ${foods.join(', ')}, ${games.join(', ')}
`, (err) => {
  if (err) { console.log(err) }
})
