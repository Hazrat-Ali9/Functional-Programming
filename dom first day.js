// DOM => Document Object Model

// How create an element

const body = document.body

const h1 = document.createElement('h1')

console.log(h1)
h1.textContent = 'JavaScript'
h1.style.color = 'Green'
body.appendChild(h1)

const names = ['Bill', 'Mark', 'Jobs', 'Mask', 'Buffet', 'Rock', 'Cena']

const ul = document.createElement('ul')

for (const name of names) {
  let li = document.createElement('li')
  li.textContent = name
  if (name.length == 4) {
    li.style.color = 'green'
  }
  ul.appendChild(li)
}

body.appendChild(ul)

const countryDiv = document.createElement('div')

const countryList = document.createElement('ul')

for (const name of countries) {
  let country = document.createElement('li')
  country.textContent = name
  if (name.includes('land')) {
    country.style.color = 'green'
    
  }
  countryList.appendChild(country)
}

countryDiv.append(countryList)

body.appendChild(countryDiv)
