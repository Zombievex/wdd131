const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

let temp = 40.0;
document.querySelector("#temp").textContent = temp + " F";

let condition = "IDK Look outside";
document.querySelector("#condition").textContent = condition;

let wind = 3.3;
document.querySelector("#wind").textContent = wind + " MPH";


function calculateWindChill(temp, wind) {
    if ((temp <= 50.0) && (wind > 3.0)) {
        let chill = 35.74
            + (0.6215 * temp)
            - (35.75 * Math.pow(wind, 0.16))
            + (0.4275 * temp * Math.pow(wind, 0.16));

        return chill.toFixed(1) + " F"
    }else return "N/A"
}

let windChill = calculateWindChill(temp, wind);
document.querySelector("#chill").textContent = windChill;