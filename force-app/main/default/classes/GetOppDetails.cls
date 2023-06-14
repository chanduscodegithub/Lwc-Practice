public with sharing class GetOppDetails {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppList(){
        try {
           return [select name, CloseDate, Amount FROM opportunity];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}