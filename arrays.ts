const carMakers = ['ford', 'chevy', 'toyota']
const dates = [new Date(), new Date()]

const carsByMake  = [
    ['f150'], 
    ['corolla'],
    ['corvette']
]

//help with inference when extracting values
// const car = carMakers[0];
const myCar = carMakers.pop()

//Prevent incompatible values
//carMakers.push(100)

//Help with map, forEach, reduce
carMakers.map((car:string) : string => {
    return car
})

//Flexible types
const importDates = [new Date(), '2030-01-20']

