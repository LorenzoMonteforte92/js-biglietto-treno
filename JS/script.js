// chiedere numero di km che si vogliono percorrere
const userKm = parseInt(prompt('Quanti km si vogliono percorrere?'))

// chiedere età del passeggero
const userAge = parseInt(prompt('Qual è la sua età?'))

// prezzo della tratta per km
const kmPrice = 0.21
const ridePrice = userKm * kmPrice
function roundToTwo(ridePrice) {
    return +(Math.round(ridePrice + "e+2") + "e-2");
  }
const roundRidePrice = roundToTwo(ridePrice)

// // sconto del 20% per under 18
const underDiscount = (ridePrice * 20) / 100
const totalUnderPrice = ridePrice - underDiscount

// sconto del 40% per over 65
const overDiscount = (ridePrice * 40) / 100
const totalOverPrice = ridePrice - overDiscount

// // arrotondare a due decimali
function roundToTwo(totalUnderPrice) {
    return +(Math.round(totalUnderPrice + "e+2") + "e-2");
  }
const roundedUnderPrice = roundToTwo(totalUnderPrice);

console.log(roundToTwo(totalUnderPrice))

function roundToTwo(totalOverPrice) {
    return +(Math.round(totalOverPrice + "e+2") + "e-2");
  }


const roundedOverPrice = roundToTwo(totalOverPrice);

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