Feature: Test API 

Scenario Outline: Api Test 
	Given the username <userName>, the password <password> and the <apiName> APIName 
 	When test the products <product> 
 	Then the API should display the products available  
 	 
 	Examples: Happy path API 
 		| userName   | password 	| apiName 		| product  | 
 		| "lvivasa5" | "Password2"  | "NameAPI35"   | "SM"     | 
