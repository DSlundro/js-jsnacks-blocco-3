// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']

// creo un array di stringhe
console.log(`
Start String`);
const startString = ['grogu', 'MANDO', 'Luke'];
console.log(startString);

// capitalizzo la prima lettera di ogni stringa
console.log(`
Final String`);

const finalString = [];
for (let newString of startString) {
    // seleziono la prima lettera con "charAt" poi la capitalizzo e aggiungo tutte le altre lettere minuscole 
    newString = newString.charAt(0).toUpperCase() + newString.substring(1).toLowerCase();
    // pusho le parole ottenute nel nuovo array
    finalString.push(newString);
//console.log(newString);
}
console.log(finalString);









