let cislo = process.argv[2];
let jeDelitelne = cislo % 7;
if (jeDelitelne === 0) {
    console.log("Je dělitelné 7mi.");
} else {
    console.log("Není dělitelné 7mi.");
}