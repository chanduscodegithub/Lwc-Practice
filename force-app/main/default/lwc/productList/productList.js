import { LightningElement } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import Count_Updated_MessageChannel from '@salesforce/messageChannel/Count_Updated';

export default class ProductList extends LightningElement {
    selectedProduct = {
        name: 'Sample Product',
        price: 10
      };
    
      handleClick() {
        const message = {
          product: this.selectedProduct
        };
        publish(this.messageContext, Count_Updated_MessageChannel, message);
      }
}