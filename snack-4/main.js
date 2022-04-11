// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.


const ciurma =
[
    {cognome: 'Monkey D.',          nome: 'Luffy',   eta: '17'},
    {cognome: 'Monkey D.',          nome: 'Dragon',  eta: '47'},
    {cognome: 'Roronoa',            nome: 'Zoro',    eta: '27'},
    {cognome: 'Vinsmoke',           nome: 'Sanji',   eta: '25'},
    {cognome: 'TonyTony',           nome: 'Chopper', eta: '7'},
    {cognome: '',                   nome: 'Nami',    eta: '21'},
    {cognome: 'Nico',               nome: 'Robin',   eta: '28'},
    {cognome: 'Gol D.',             nome: 'Roger',   eta: '55'},
    {cognome: 'Marshal D.',         nome: 'Teach',   eta: '52'},
    {cognome: 'Portuguese D.',      nome: 'Ace',     eta: '17'},
    {cognome: 'Trafalgar D. Water', nome: 'Law',     eta: '23'},
    {cognome: 'Trafalgar D. Water', nome: 'Lami',    eta: '5'},
]
console.log(`
Tutta la ciurma`);
console.log(ciurma);

// creo un array per la lista completa
let listaCompleta = [];

// creo un array per inserire chi può guidare
let guidaSi = [];

// creo un array per inserire chi non può guidare
let guidaNo = [];

const guida = ciurma.map((ciurma) => {
    if (ciurma.eta < 18){
        listaCompleta.push(`${ciurma.cognome} ${ciurma.nome} Non puoi guidare! Torna sulla nave!`)
        guidaNo.push(`${ciurma.cognome} ${ciurma.nome} Non puoi guidare! Torna sulla nave!`);
        
    }
    else{
        listaCompleta.push(`${ciurma.cognome} ${ciurma.nome} Non puoi guidare! Torna sulla nave!`)
        guidaSi.push(`${ciurma.cognome} ${ciurma.nome} Puoi guidare! Puoi scendere dalla nave!`);
    }
})
// lista completa
console.log(`
Lista completa`);
console.log(listaCompleta);

// chi non può guidare
console.log(`
Lista di chi NON può guidare`);
console.log(guidaNo);

// chi può guidare
console.log(`
Lista di chi può guidare`);
console.log(guidaSi);



