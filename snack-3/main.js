// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

// creo un array di oggetti che rappresentano degli animali
const animals = 
[
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gabbiano', famiglia: 'fasianidi', classe: 'uccelli' },
]
console.log(`
Animali`);
console.log(animals);

// creo un array con la lista dei mammiferi
console.log(`
Mammiferi`);
const  mammiferi = animals.filter(animal => animal.classe === "mammiferi");
console.log(mammiferi);

// creo un array con la lista degli uccelli
console.log(`
Uccelli`);
const  uccelli = animals.filter(animal => animal.classe === "uccelli");
console.log(uccelli);

