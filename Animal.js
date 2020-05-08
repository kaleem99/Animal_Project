class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eats`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sounds() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sounds() {
        console.log(`${this.name} meows`);
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

var dog = new Dog("Rax");

dog.eat();
dog.sounds();

var cat = new Cat("Stormy");

cat.eat();
cat.sounds();

var home = new Home();
var dog1 = new Dog("dog1");
var cat = new Cat("cat");

home.makeAllSounds(); //outputs nothing
home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat);
home.makeAllSounds();

home.adoptPet(dog1);
home.makeAllSounds();