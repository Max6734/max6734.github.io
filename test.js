// Apprendre à coder en JavaScript

// 1. Déclarer une variable
let message = "Bonjour, JavaScript!";
console.log(message); // Affiche le message dans la console

// 2. Créer une fonction
function addition(a, b) {
    return a + b;
}
console.log(addition(2, 3)); // Affiche 5

// 3. Utiliser une boucle
for (let i = 0; i < 5; i++) {
    console.log("Compteur:", i);
}

// 4. Travailler avec un tableau
let fruits = ["pomme", "banane", "orange"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// 5. Utiliser un objet
let personne = {
    nom: "Alice",
    age: 25
};
console.log(personne.nom); // Affiche "Alice"