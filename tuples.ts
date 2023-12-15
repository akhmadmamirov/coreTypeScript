const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//type Alias
type Drink  = [string, boolean, number]

//turning arr into tuple
const pepsi: Drink = ['brown', true, 40]
const tea: Drink = ['brown', false, 0]
const pepse: Drink = ['clear', true, 45]

const carStats : {speed: number, horsePower: number} = {
    speed: 500,
    horsePower: 300
}