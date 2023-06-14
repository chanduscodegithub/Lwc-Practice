public with sharing class AllInOne {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpportunities(){
        try {
           return [select name, CloseDate, Amount FROM opportunity ORDER BY CreatedDate desc];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            // just added comment to see change in github
           // push change
           //comiy
           //commit and synvc
           //for pull request

          // check again
          //merge now
        }
    }
}