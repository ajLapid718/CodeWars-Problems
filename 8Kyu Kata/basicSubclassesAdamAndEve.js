/*

According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job.
The creation method must return an array of length 2 containing objects (representing Adam and Eve).
The first object in the array should be an instance of the class Man.
The second should be an instance of the class Woman.
Both objects have to be subclasses of Human.
Your job is to implement the Human, Man and Woman classes.

*/


// ES6 Approach;
class God {
  static create() {
    let adam = new Man();
    let eve = new Woman();
    return [adam, eve];
  }
}

class Human {

}

class Man extends Human {

}

class Woman extends Human {

}

// ES5 Approach;
class God {
  static create() {
    let adam = new Man();
    let eve = new Woman();
    return [adam, eve];
  }
}

function Human() {

}

function Man() {

}

Man.prototype = Object.create(Human.prototype);

function Woman() {

}

Woman.prototype = Object.create(Human.prototype);
