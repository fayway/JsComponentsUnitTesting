export default class IBAN {
    constructor(pays, controle, banque, guichet, compte, cle) {
        this.pays = pays;
        this.controle = controle;
        this.banque = banque;
        this.guichet = guichet;
        this.compte = compte;
        this.cle = cle;
    }
    toString() {
        return JSON.stringify(this);
    }
};