interface Reportable {
    summary(): string
}


const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return  `This is ${this.name}`
    }
}

const drink = {
    color : 'brown',
    carbonated: true, 
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`
    }
}

const printSummary = (item : Reportable):void => {
    console.log(`Broken : ${item.summary()}`)
}

printSummary(oldCivic)
printSummary(drink)