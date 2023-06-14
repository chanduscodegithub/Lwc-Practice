import { LightningElement, api } from 'lwc';

export default class Calci extends LightningElement {
    result; @api operator;
    @api calculate(x, y, op) {
        console.log('~~operator ' + this.operator);
        switch (op) {
            case 'Add':
                this.result = parseInt(x) + parseInt(y);
                break;
            case 'Sub':
                this.result = parseInt(x) - parseInt(y);
                break;
            case 'Mul':
                this.result = parseInt(x) * parseInt(y);
                break;
            case 'Div':
                this.result = parseInt(x) / parseInt(y);
                break;
            case 'Mod':
                this.result = parseInt(x) % parseInt(y);
                break;
            default:
            // code block
        }
    }


}