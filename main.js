let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 15;

if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
    console.log(`Your race with race number ${raceNumber} is at 9:30 am.`)
}

else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Your race with race number ${raceNumber} is at 11:00 am.`)
}

else if (runnerAge < 18) {
    console.log(`Your race with race number ${raceNumber} is at 12:30 am.`)
}

else {
    console.log(`Kindly move to the registration desk, thank you!`)
}