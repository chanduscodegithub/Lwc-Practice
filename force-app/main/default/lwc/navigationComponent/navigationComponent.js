import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationComponent extends NavigationMixin(LightningElement) {
    navigationToCasePage(){
     this[NavigationMixin.Navigate]({
        type : 'standard__objectPage',
        attributes:{
            objectApiName : 'Case',
            actionName: 'new'

        },
     });
    }


}

