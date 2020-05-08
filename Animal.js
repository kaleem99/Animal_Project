class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return(`${this.name} eats`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sounds() {
        return(`Dog barks`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sounds() {
        return(`Cat meows`);
    }
}

class Home {
    #animals = [];
    adoptPet(Animal) {
        this.#animals.push(Animal);
    }
    makeAllSounds() {
        for(let i = 0; i < this.#animals.length; i++){
            console.log(this.#animals[i].sounds());
        }
    }
}

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();


home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat);
home.makeAllSounds();

home.adoptPet(dog2);
home.makeAllSounds();
