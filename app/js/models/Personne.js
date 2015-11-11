export default class Personne {
    constructor(id, civilite, firstname, lastname, photo) {
        this.id = id;
        this.civilite = civilite;
        this.firstname = firstname;
        this.lastname = lastname;
        this.photo = photo;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    toString() {
        return `[${this.id}: ${this.civilite} ${this.firstname} ${this.lastname}]`;
    }
};