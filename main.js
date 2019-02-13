// Variables
let car = {
    make: 'McLaren',
    model: 'Formula 1',
    color: 'orange',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(` Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 10;
        alert(` Old Mileage: ${this.mileage}`);
    },
}

// Functions
// Logs all our current stats to the console
const rewriteStats() => {

}

//Main process
//Captures keyboard input. Depeding on the letter pressed it will "call" different functions.
const document.onkeyup(event)=>{
    let letter = String.fromCharCode(event.keyCode).toLocaleLowerCase();

    if (letter === 'd'){
        car.driveToWork();
        rewriteStats();
    }
}