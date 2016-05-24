Feature: Test API 

Scenario Outline: SingUp Test 
	Given the fullName <fullName>,the email <email>,the telephone <telephone>,the organization <organization>,the userName <userName> and the <password> password 
 	When test the SingUp 
 	Then the API should display the profileInicial<profileInicial> 
 	 
 	Examples: Happy SingUP 
 		| fullName         | email	                    | telephone		| organization  |  userName    |  password    | profileInicial|
 		| "Liliana Vivas"  | "lilianavivas@gmail.com"	| "3154519157"	| "PSL"         |  "lvivas23"  |  "Password2" |"LV"           |
		

Scenario Outline: APIAdd Test 
	Given the userName <userName>,  and the <password> password 
 	When create the API APIName <APIName>,and the <APIVersion> APIVersion 
 	Then the API should be created succesfully <create> 
 	 
 	Examples: Happy APIAdd 
 		| userName       | password	    | APIName		| APIVersion    |  create      |
 		| "lvivasa5"     | "Password2"	| "APINameAdd23"	| "APIVersion"  |  "true"  |		


Scenario Outline: EndPointConfiguration Test 
	Given the user <userName>,the password <password> ,the API <APIName>,and the <APIVersion> Version 
 	When configure the EndPoint
 	Then the EndPoint should be update succesfully <update> 
 	 
 	Examples: Happy EndPointConfiguration 
 		| userName       | password	    | APIName		| APIVersion    |  update|
 		| "lvivasa5"     | "Password2"	| "APIName51"	| "APIVersion"  |  "true"|


Scenario Outline: API Test 
	Given the APIUrl <urlAPI>
 	When call the APIUrl
 	Then the request should return the products <products> 
 	 
 	Examples: Happy APITest
 		| urlAPI																	|  products|
 		| "https://mocksvc.mulesoft.com/mocks/a99da2a5-3b9e-4a83-b0a4-bd25dedd98f2" |  "S" 	   |


Scenario Outline: APIEndToEnd Test 
	Given the user <userName>,  and the <password> pass 
 	When create the API <APIName>,and the <APIVersion> version 
 	Then test API should show the products <products> 
 	 
 	Examples: Happy APIEndToEnd
 		| userName       | password	    | APIName		| APIVersion    |  products|
 		| "lvivasa5"     | "Password2"	| "APINameE2E23"| "APIVersion"  |  "S" 	   |