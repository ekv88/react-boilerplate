/* Container init */
export default class Container {
    constructor(values) {
        this.api = null;
        values && Object.assign(this, values);
    }
}
