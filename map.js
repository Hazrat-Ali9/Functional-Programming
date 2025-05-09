// Using function declaration

const countries = ['America', 'Germany', 'France', 'Spain']
const newCountries = countries.map(function (country) {
    return country.toUpperCase()
})

console.log(newCountries)

// map using an arrow function call back

const countries = ['America', 'Germany', 'France', 'Spain']
const newCountries = countries.map((country) => country.toUpperCase())

console.log(newCountries) // ["America", "Germany", "France", "Spain"]


const countriesLength = countries.map(country => country.length)
console.log(countriesLength) // [7, 7, 6, 6]

const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(n => n ** 2)

console.log(squares) // [1, 4, 9, 16, 25]