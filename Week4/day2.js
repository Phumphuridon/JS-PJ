function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    }

    Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
    };

const myFather = new Person("fsmth", "lsmth", "nsmth", "csnth");
document.getElementById("demo").innerHTML =
"My father is " + myFather.name();
