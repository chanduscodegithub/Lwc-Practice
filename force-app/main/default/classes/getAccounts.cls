public with sharing class getAccounts {
    @AuraEnabled
    public static List<Account> accountsData(){
        try {
            List<Account> acc =[Select Name from Account];
            return acc;

               } catch (Exception e) {
                //write Exception;
            throw new AuraHandledException(e.getMessage());
        }
    }
}