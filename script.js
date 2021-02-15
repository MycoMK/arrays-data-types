console.log('connected')

const cities = [
    {name:'LA', population: '250'},
    {name:'Boston', population: '200'},
    {name:'NewYork', population: '5'},
    {name:'Chicago', population: '500'},
    {name:'Houston', population: '100'},
    {name:'Washington', population: '25'},
]
// filther-method 


//  const pickedcities = cities.filter((cities) =>{
//      return cities.population <= 100
//  })
//   console.log(pickedcities)



// .map-Method

// const pickedcities = cities.map((cities)=>{
//     return cities.name
// })

// console.log(pickedcities)

// find-Method

// const pickedcities = cities.find((cities)=>{
//     return cities.population === 100
// })

// console.log(pickedcities)

// for-each-method

// cities.forEach((cities)=>{
//     console.log(cities.name)
//     console.log(cities.population)
// })

// some-method
// const lessPopulatedCities = cities.some((cities)=>{
//     return cities.population <= 200
// })

// console.log(lessPopulatedCities)

// every-method

const lessPopulatedCities = cities.every((cities)=>{
    return cities.population <= 100
})

console.log(lessPopulatedCities)

// reduce-method

const totalPopulation = cities.reduce((currentpopulation, cities)=>{
    return cities.population + currentpopulation
})

console.log(totalPopulation)

// includes-method

function great(firstName, lastName){
    console.log(`Goodmorning ${firstName} ${lastName[0]}`)
}

great('Peter', 'Tri');

 const speak = function(nameOne, nameTwo){
     console.log(`Goodnight ${nameOne} ${nameTwo}`)
 }

 speak('Peter', 'Tri');


 const person = function(nameA= 'Peter', nameB = 'Tri'){
     console.log(`hey there ${nameA} ${nameB}`)
 }

 person();