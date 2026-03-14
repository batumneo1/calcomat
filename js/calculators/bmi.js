function obliczBMI() {

let waga = getValue("waga");
let wzrost = getValue("wzrost");

if (!waga || !wzrost) {
    setResult("wynik", "Wpisz wagę i wzrost");
    return;
}

wzrost = wzrost / 100;

let bmi = waga / (wzrost * wzrost);

setResult("wynik", "Twoje BMI: " + bmi.toFixed(2));

}