import Personne from './Personne.js';

export default class Compte extends Personne {
    constructor(id, civilite, firstname, lastname, photo, login, role, isDefault=false) {
        super(id, civilite, firstname, lastname, photo);
        this.login = login;
        this.role = role;
        this.isDefault = isDefault;
    }
    toString() {
        return `[${this.login}/${this.getFullName()}: ${this.role}]`;
    }
};