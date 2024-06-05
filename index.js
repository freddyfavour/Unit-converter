/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    // Length conversion
    const metersToFeet = inputValue * 3.28084;
    const feetToMeters = inputValue * 0.3048;
    document.getElementById('lengthResult').innerText = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`;

    // Volume conversion
    const litersToGallons = inputValue * 0.264172;
    const gallonsToLiters = inputValue * 3.78541;
    document.getElementById('volumeResult').innerText = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`;

    // Mass conversion
    const kilosToPounds = inputValue * 2.20462;
    const poundsToKilos = inputValue * 0.453592;
    document.getElementById('massResult').innerText = `${inputValue} kilos = ${kilosToPounds.toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilos.toFixed(3)} kilos`;
}
