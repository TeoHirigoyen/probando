const MIN_YEAR = 0;
const MAX_YEAR = 99;

export default class Usuario {

    constructor(nombre, edad, mail, password) {
        this.nombre = nombre;
        this.setEdad(edad);
        this.mail = mail;
        this.password = password;
    }

    setEdad(edad) {
        if (edad >= MIN_EDAD && edad <= MAX_EDAD) {
            this.edad = edad;
        } else {
            throw new Error(`La edad ingresada es incorrecta. La edad debe ser entre ${MIN_YEAR} y ${MAX_YEAR} años`);
        }
    }
}