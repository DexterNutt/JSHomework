// Homework 9 - Classes

// Example 1 Nordic Pantheon

class NorseGods {
    constructor(name, god) {
      this.name = name
      this.god = god
    }
  
    sayHello() {
      console.log(`I am ${this.name}, favored of ${this.god}.`)
    }
}
  
// Subclass 1: Berserker
class Berserker extends NorseGods {
    constructor(name, god) {
      super(name, god)
    }
  
    unleashRage() {
      console.log(`${this.name} enters a frenzied rage, fueled by the spirit of ${this.god}.`)
    }
}
  
// Subclass 2: RuneSage
class RuneSage extends NorseGods {
    constructor(name, god) {
      super(name, god)
    }
  
    castSpell() {
      console.log(`${this.name} casts a powerful runic spell under the guidance of ${this.god}.`)
    }
}

const thor = new Berserker('Thor', 'Odin')
thor.sayHello() 
thor.unleashRage()

const loki = new RuneSage('Loki', 'Sigyn')
loki.sayHello()
loki.castSpell()


// Example 2 - Trees

class Tree {
    constructor(species, type, lifespan, growth) {
        this.species = species
        this.type = type
        this.lifespan = lifespan
        this.growth = growth
    }

    presentTree() {
        console.log(`This is a ${this.species} tree, they are a ${this.type} plant, they typically live for ${this.lifespan} years and grow to be around ${this.growth} tall.`)
    }
}

// Subclass 1: Construction use

class Building extends Tree {
    constructor(species, type, age, building, material) {
        super(species, type, age)
        this.building = building
        this.material = material
    }

    describeBuilding() {
        console.log(`The ${this.building} constructed from this tree is made of ${this.material}.`)
    }
}

const greatDoug = new Tree ("Douglas Fir", "evergreen", 500, "40 meters", "wood")
const Sequoia = new Building ( "Sequoia", "evergreen", 1500, "house", "wood")

Sequoia.describeBuilding()

// Subclass 2&3 Evergreen and Deciduous

class EvergreenTree extends Tree {
    constructor(species, lifespan, growth, needleRetention) {
        super(species, 'evergreen', lifespan, growth)
        this.needleRetention = needleRetention
    }

    describeEvergreen() {
        console.log(`This evergreen tree (${this.species}) retains its needles for ${this.needleRetention} years.`)
    }
}

class DeciduousTree extends Tree {
    constructor(species, lifespan, growth, leafFallingSeason) {
        super(species, 'deciduous', lifespan, growth)
        this.leafFallingSeason = leafFallingSeason
    }

    describeDeciduous() {
        console.log(`This deciduous tree (${this.species}) sheds its leaves in ${this.leafFallingSeason}.`)
    }
}

const douglasFir = new EvergreenTree("Douglas Fir", 500, "50 meters", 3)
douglasFir.presentTree()
douglasFir.describeEvergreen()

const mapleTree = new DeciduousTree("Maple", 200, "30 meters", "autumn")
mapleTree.presentTree()
mapleTree.describeDeciduous()


// Example 3 - WoW Classes

// Base class for WoW characters
class Hero {
    constructor(name, race, level, hero) {
        this.name = name
        this.race = race
        this.level = level
        this.hero = hero
    }

    introduce() {
        console.log(`I am ${this.name}, a level ${this.level} ${this.race} ${this.hero}.`)
    }
}

// Subclass 1: Warrior
class Warrior extends Hero {
    constructor(name, race, level, hero, weaponType) {
        super(name, race, level, hero)
        this.weaponType = weaponType
    }

    attack() {
        console.log(`${this.name} swings their ${this.weaponType} in a powerful attack!`)
    }
}

// Subclass 2: Mage
class Mage extends Hero {
    constructor(name, race, level, hero, specialization) {
        super(name, race, level, hero)
        this.specialization = specialization
    }

    castSpell() {
        console.log(`${this.name} casts a spell as a ${this.specialization} mage!`)
    }
}

// Subclass 3: Hunter
class Hunter extends Hero {
    constructor(name, race, level, hero, petType) {
        super(name, race, level, hero)
        this.petType = petType
    }

    summonPet() {
        console.log(`${this.name} summons a ${this.petType} as their loyal companion.`)
    }
}

// Example usage
const orcWarrior = new Warrior("Grommash", "Orc", 80, "Warrior", "Axe")
orcWarrior.introduce()
orcWarrior.attack()

const nightElfMage = new Mage("Tyrande", "Night Elf", 85, "Mage", "Frost")
nightElfMage.introduce()
nightElfMage.castSpell()

const dwarfHunter = new Hunter("Thorin", "Dwarf", 75, "Hunter", "Bear")
dwarfHunter.introduce() 
dwarfHunter.summonPet()