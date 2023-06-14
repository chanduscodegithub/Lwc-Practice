import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/AllInOne.getAllOpportunities';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'CloseDate', fieldName: 'CloseDate' },
    { label: 'StageName', fieldName: 'StageName' },
];


export default class Table extends LightningElement {
    oppsList = [];
    fields = [NAME_FIELD, CLOSEDATE_FIELD, STAGE_FIELD];
    wiredOpps; columns = columns;
    @wire(getOpportunities) getAllOpps(result) {
        console.log('~~Data ', result);
        this.wiredOpps = result;
        if (result.data) {
            this.oppsList = result.data;
        }
    }
    createFalge = false;

    handleClick() {
        this.createFalge = true;
    }
    handleCancel() {
        console.log('Cancel')
        this.createFalge = false;
    }

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Opportunity created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
        refreshApex(this.wiredOpps);
        this.createFalge = false;
    }

}