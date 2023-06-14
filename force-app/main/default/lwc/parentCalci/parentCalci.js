import { LightningElement } from 'lwc';

export default class ParentCalci extends LightningElement {
    x; y; operator;
    handleChange(event) {
        if (event.target.name == 'x') { this.x = event.target.value }
        else { this.y = event.target.value }
    }
    handleClick(event) {
        console.log(event.target.label);
        this.operator = event.target.label;
        this.template.querySelector('c-calci').calculate(this.x, this.y, event.target.label)
    }
}