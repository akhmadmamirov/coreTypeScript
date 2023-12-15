class Vehicle {
    constructor(public color: string) {}

    protected honk() : void {
        console.log('Beep')
    }
}

const vehilce = new Vehicle('orange');
console.log(vehilce.color)

class Car extends Vehicle{
    constructor(public wheels:number, color: string){
        super(color)
    }

    private  drive(): void {
        console.log('dring din')
    }

    startDriving(): void {
        this.drive()
        this.honk()
    }
}


const car = new Car(4, 'orange');
car.startDriving();
 

