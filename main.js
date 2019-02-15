// VARIABLES
let car = {
    make: 'McLaren',
    model: 'Formula 1',
    color: 'orange',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(` Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(` Old Mileage: ${this.mileage}`);
    },

    driveAroundUSA(){
        alert(` Old Mileage: ${this.mileage}`);
        this.mileage += 7000;
        alert(` Old Mileage: ${this.mileage}`);
        alert('Car needs a tuneup!');
        this.isWorking = false;
    },

    getTuneUP(){
        alert('Car is fixed and ready to go!');
        this.isWorking = true;
    },

    honk(){
        alert('beep! honk!');
    },
}

    


// FUNCTIONS
// Logs all our current stats to the console
const rewriteStats=()=>{
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`IsWorking: ${car.isWorking}`);
    console.log(`------------------------------------`);
}

//MAIN PROCESS
//Captures keyboard input. Depeding on the letter pressed it will "call" different functions.
 document.onkeyup = (event) => {
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === 'd'){
        car.driveToWork();
        rewriteStats();
    }

    if (letter === 'r'){
        car.driveAroundUSA();
        rewriteStats();
    }

    if (letter === 't'){
        car.getTuneUP();
        rewriteStats();
    }

    if (letter === 'h'){
        car.honk();
        rewriteStats();
    }
}