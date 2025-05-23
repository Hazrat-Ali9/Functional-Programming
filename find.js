const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find((n) => n % 2 === 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)

console.log(firstEvenNum)  // 0
console.log(firstOddNum)   // 1

const countries = ['Finland', 'America', 'Russia', 'Germany', 'Spain']
const countryWithWay = countries.find((country) => country.includes('way'))
console.log(countriesWithWay) // Germany


const sixCharsCountry = countries.find((country) => country.length === 6)
console.log(sixCharsCountry) // Russia

const index = countries.find((country) => country.includes('o'))
console.log(index) // Estonia is the first country containing o in the array