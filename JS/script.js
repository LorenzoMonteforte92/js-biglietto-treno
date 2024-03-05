// chiedere numero di km che si vogliono percorrere
const userKm = parseInt(prompt('Quanti km si vogliono percorrere?'))
console.log(userKm)

// chiedere età del passeggero
const userAge = parseInt(prompt('Qual è la sua età?'))
console.log(userAge)

// prezzo della tratta per km
const kmPrice = 0.21
const ridePrice = userKm * kmPrice
console.log(ridePrice) 

// sconto del 20% per under 18
const underDiscount = (ridePrice * 20) / 100
const totalUnderPrice = ridePrice - underDiscount
console.log(totalUnderPrice)
// sconto del 40% per over 65
const overDiscount = (ridePrice * 40) / 100
const totalOverPrice = ridePrice - overDiscount
console.log(totalOverPrice)

// calcolo

let userMessage

if(userAge < 18){
    userMessage = `Vuole percorrere ${userKm}Km. Il prezzo totale è di ${ridePrice}. Lei ha diritto al 20% di sconto. Il prezzo effettivo del suo biglietto è: ${totalUnderPrice}`
} else if (userAge > 65){
    userMessage = `Vuole percorrere ${userKm}Km. Il prezzo totale è di ${ridePrice}. Lei ha diritto al 40% di sconto. Il prezzo effettivo del suo biglietto è: ${totalOverPrice}`
}
console.log(userMessage)