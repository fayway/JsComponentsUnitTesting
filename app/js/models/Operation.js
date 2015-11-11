export default class Operation {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
    toString() {
        return `[${this.id}: ${this.status}]`;
    }
};