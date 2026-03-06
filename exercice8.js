let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

nom = nom.trim()
if (nom === "") nom = "Inconnu"
console.log('nom : "' + nom + '" (corrigé : espaces supprimés)')

age = parseInt(age)
if (Number.isNaN(age) || age <= 0) {
console.log("age : valeur invalide")
} else {
console.log("age :", age,"(valide)")
}

let positionAt = email.indexOf("@")
let valideEmail = positionAt !== -1 && email.indexOf(".", positionAt) !== -1
console.log('email : "' + email + '" -> ' + (valideEmail ? "valide" : "(invalide : pas de point après @)"))

let score = parseInt(scoreJeu)
if (Number.isNaN(score)) score = 0
console.log("scoreJeu :", score , "(extrait depuis 150pts)")

if (estAdmin === "true") estAdmin = true
else estAdmin = false
console.log("estAdmin :", estAdmin)

let derniere = derniereConnexion ?? "Jamais connecté"
console.log("derniereConnexion :", derniere)

let connexions = Number(nombreConnexions)
if (connexions === 0) {
console.log("nombreConnexions : Aucune connexion")
} else {
console.log("nombreConnexions :", connexions)
}

console.log("================================")