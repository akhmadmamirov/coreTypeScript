class Vehicle {
    protected honk() : void {
        console.log('Beep')
    }
}

class Car extends Vehicle{
    private  drive(): void {
        console.log('dring din')
    }

    startDriving(): void {
        this.drive()
        this.honk()
    }
}


const car = new Car();
car.startDriving();
 

