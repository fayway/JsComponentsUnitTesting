import Personne from './Personne.js';

export default class Salarie extends Personne {
    constructor(id, civilite, firstname, lastname, photo, balance, iban) {
        super(id, civilite, firstname, lastname, photo);
        this.balance = balance;
        this.iban = iban;
    }
    toString() {
        return `[${this.firstname} ${this.lastname}: ${this.balance}/${this.iban}]`;
    }
};