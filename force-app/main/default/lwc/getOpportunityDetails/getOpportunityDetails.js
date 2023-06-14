import { LightningElement ,wire,api} from 'lwc';
import getOppList from '@salesforce/apex/GetOppDetails.getOppList';



export default class GetOpportunityDetails extends LightningElement {
   @wire(getOppList)getAllOpps(result)
   {
    if(result.data)
    {
this.
    }
   
}