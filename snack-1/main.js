// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array

// lista macchine
const cars = [
    {
        marca: 'Audi',
        modello: 'RS7',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Audi',
        modello: 'A4',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Jaguar',
        modello: 'XF',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Tesla',
        modello: 'Model S',
        alimentazione: 'Elettrica',
    },
    {
        marca: 'Tesla',
        modello: 'Model 3',
        alimentazione: 'Elettrica',
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'GPL',
    },
    {
        marca: 'Hyundai',
        modello: 'Bayon',
        alimentazione: 'GPL',
    },
    {
        marca: 'Skoda',
        modello: 'Octavia',
        alimentazione: 'Metano',
    },
    {
        marca: 'Seat',
        modello: 'Leon',
        alimentazione: 'Metano',
    }

]
console.log(`
All cars`);
console.log(cars)

// solo alimentazione benzina
console.log(`
Benzina`);
const benzina = cars.filter(car => car.alimentazione === 'Benzina');
console.log(benzina);

// solo alimentazione diesel
console.log(`
Diesel`);
const diesel = cars.filter(car => car.alimentazione === 'Diesel');
console.log(diesel);

// solo alimentazione diesel
console.log(`
Altro`);
const altro = cars.filter(car => car.alimentazione !== "Benzina" && car.altro !== "Diesel");
console.log(altro);
