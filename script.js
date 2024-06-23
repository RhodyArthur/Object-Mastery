// object creation basics
const superhero = {
    name: 'Homelander',
    secretIdentity: 'Anthony Starr',
    powers: ['heat vision', 'super strength', 'durability', 'flight','super hearing'],
    weakness: 'love and attention',

    // add methods to superhero
    usePower (powerName) {
        if (this.powers.includes(powerName)){
            console.log(`${this.name} is using ${powerName}`)
        }
        else {
            console.log(`${this.name} doesn't have this power`)
        }
    },

    revealIdentity(){
        console.log(`${this.name}\'s secret identity is ${this.secretIdentity} `)
    }
}

// object constructors
function Superhero(name, secretIdentity, powers, weakness){
    this.name = name
    this.secretIdentity = secretIdentity
    this.powers = powers
    this.weakness = weakness
}


// prototypal inheritance
Superhero.prototype.usePower = function(powerName){
    if (this.powers.includes(powerName)){
        console.log(`${this.name} is using ${powerName}`)
    }
    else {
        console.log(`${this.name} doesn't have this power`)
    }
}


Superhero.prototype.revealIdentity = function(){
    console.log(`${this.name}\'s secret identity is ${this.secretIdentity} `)
}

let heros = [new Superhero('Homelander','Anthony Starr',['heat vision', 'superhuman strength', 'durability', 'flight','super hearing'],'love'),
            new Superhero('Queen Maeve', 'Margaret Shaw', ['superhuman strength', 'speed','agility'], 'Limited durability'),
            new Superhero('Black noir', 'Nathan Mitchell', ['speed', 'durability', 'superhuman strength', 'stamina'], 'tree nut allergy'),
            new Superhero('Stormfront', 'Aya Cash', ['superhuman strength', 'flight', 'regenerative healing', 'longetivity'], 'starlight')
        ] 
// object iteration and transformation
// using forEach
    heros.forEach(hero =>{
        console.log(hero.revealIdentity())
    })

// use .map to print each hero's weakness
const heroWeakness = heros.map(hero  => hero.weakness)
console.log(heroWeakness)

// use .filter to print hero's with durability power
heros.filter(hero=>{
    console.log(hero.usePower('durability'))
})
