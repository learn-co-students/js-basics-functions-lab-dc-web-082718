// Code your solution in this file!
function distanceFromHqInBlocks(street){

    return Math.abs(42 - street);

}

function distanceFromHqInFeet(street){

    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(first, second) {

    return Math.abs(first - second) * 264;

}

function calculatesFarePrice(start,ending) {
    const feet = distanceTravelledInFeet(start,ending);
    console.log(feet);
    if (feet <= 400){
        return 0;
    }
    else if(feet > 400 && feet < 2000) {
        return (feet - 400) * 0.02;
    }
    else if(feet > 2000 && feet < 2500) {
        return 25.00;
    }
    else {
        return "cannot travel that far";
    }


}
