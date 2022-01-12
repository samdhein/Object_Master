// get data from the following immutable pokemon array

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// id evenly divisible by 3
const divByThree = pokemon.filter(e=> e.id % 3 === 0);
console.log(divByThree);

// fire type
const fireType = pokemon.filter(e=> e.types[0]=== "fire" || e.types[1]=== "fire");
console.log(fireType)

// multiple types
const multipleTypes = pokemon.filter(e=> e.types.length > 1)
console.log(multipleTypes)

// array with just the names of the pokemon
const pokemonNames = pokemon.map(e=> e.name)
console.log(pokemonNames)

// array of pokemon names where id > 99
const namesOverNinetyNine = pokemon
    .filter(e=>e.id > 99)
    .map(e=> e.name)
console.log(namesOverNinetyNine)

// array of pokemon names where only type is poison
const onlyPoison = pokemon
    .filter(e=> e.types[0] === "poison" && e.types.length === 1)
    .map(e=> e.name)
console.log(onlyPoison)

// array of pokemon first types whose second type is "flying"
const flyingSecond = pokemon
    .filter(e=> e.types[1] === "flying")
    .map(e=> e.types[0])
console.log(flyingSecond)

// a count of the number of pokemon that are normal type
const normalTypeCount = pokemon.filter(e=> e.types[0] === "normal" || e.types[1] === "normal").length
console.log(normalTypeCount)