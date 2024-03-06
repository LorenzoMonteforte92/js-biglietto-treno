// chiedere numero di km che si vogliono percorrere
const userKm = parseInt(prompt('Quanti km si vogliono percorrere?'))

// chiedere età del passeggero
const userAge = parseInt(prompt('Qual è la sua età?'))

// prezzo della tratta per km
const kmPrice = 0.21
const ridePrice = userKm * kmPrice
const roundRidePrice = ridePrice.toFixed(2)

// sconto under e over
let underDiscount = (ridePrice * 20) / 100
let totalUnderPrice = ridePrice - underDiscount

let overDiscount = (ridePrice * 40) / 100
let totalOverPrice = ridePrice - overDiscount

// // arrotondare a due decimali

const roundedUnderPrice = totalUnderPrice.toFixed(2);
const roundedOverPrice = totalOverPrice.toFixed(2);

// // calcolo
let userMessage

if(userAge < 18){
    userMessage = `Intende percorrere ${userKm}Km. Il prezzo totale sarebbe di ${roundRidePrice}€. Lei ha diritto al 20% di sconto. Il prezzo effettivo del suo biglietto è: ${roundedUnderPrice}€`
} else if (userAge > 65){
    userMessage = `Intende percorrere ${userKm}Km. Il prezzo totale sarebbe di ${roundRidePrice}€. Lei ha diritto al 40% di sconto. Il prezzo effettivo del suo biglietto è: ${roundedOverPrice}€`
} else{
    userMessage = `Intende percorrere ${userKm}Km. Il prezzo totale del suo biglietto è di ${roundRidePrice}€`
}

document.getElementById('user-message').innerHTML = userMessage