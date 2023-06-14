import { LightningElement } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import PRODUCT_SELECTED_CHANNEL from '@salesforce/messageChannel/ProductSelectedChannel__c';


export default class ShoppingCart extends LightningElement {
    selectedProduct = {};

    @wire(MessageContext)
    messageContext;
  
    connectedCallback() {
      subscribe(this.messageContext, PRODUCT_SELECTED_CHANNEL, (message) => {
        this.selectedProduct = message.product;
        // Perform any additional logic here based on the received product data
      });
    }
}