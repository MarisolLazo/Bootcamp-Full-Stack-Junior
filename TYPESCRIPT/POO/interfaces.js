/* Ejemplo De uso de Interface en POO */
//Ejemplo simple -> No es una estructura que usariamos en un proyecto
var Animal = /** @class */ (function () {
    function Animal(nombreParam, especieParam) {
        this.nombre = nombreParam;
        this.especie = especieParam;
    }
    Animal.prototype.comer = function () {
        return "Estoy comiendo";
    };
    Animal.prototype.getAnimal = function () {
        return this;
    };
    return Animal;
}());
var d10s = new Animal("m", "chucho");
<<<<<<< HEAD
console.log(d10s.getAnimal());
=======
console.log(d10s.getAnimal()); 
>>>>>>> c6e842c4b535689b8f1ec454947f051026597571
