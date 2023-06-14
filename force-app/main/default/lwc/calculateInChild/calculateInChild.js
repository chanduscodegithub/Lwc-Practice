import { LightningElement,api } from 'lwc';

export default class CalculateInChild extends LightningElement {
    @api result;
    @api num1;
    @api num2;
    
    additionHandle()
    {
        console.log('num ',this.num1);
        console.log('num ',this.num2);
        this.result = parseInt(this.num1) + parseInt(this.num2);
        console.log('~~Result ',this.result);
        
    }
    subtractionHandle()
    {
        this.result = this.num1 - this.num2;

    }
    divisionHandle()
    {
        this.result = this.num1 / this.num2;

    }
    MultiplyHandle()
    {
        this.result = this.num1 *this.num2;

    }


}