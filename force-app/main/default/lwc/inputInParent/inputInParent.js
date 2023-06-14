import { LightningElement,track} from 'lwc';

export default class InputInParent extends LightningElement {
     @track firstNumber;
    @track secondNumber ;
    //@track resultIs = this.result;
   
    handleChange (event)
    {
        console.log('~~Cahange',event.target.name);

        if(event.target.name == 'firstNumber')
        { 
            this.firstNumber=event.target.value;
console.log('~~firstNumber ',this.firstNumber);
        }
        else if(event.target.name == 'secondNumber'){
            this.secondNumber=event.target.value;
            console.log('~~SecondNumber ',this.secondNumber);
        }
       
    }
    
    // handleAccessResult() {
    //     const calculateInChild = this.template.querySelector('c-calculate-in-child');
    //     const result = calculateInChild.result;
    //     // Use the result variable in your parent component logic
    //     console.log('Result:', result);
    //   }
    
   
}