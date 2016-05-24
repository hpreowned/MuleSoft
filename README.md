# MuleSoft
Automation Technical Test
https://github.com/lvivasa/MuleSoft.git

## Description
Project developed using Selenium WebDriver, Cucumber, RESTFul and JUnit.

Test Cases implemented:
1. SignUp Test : Sign up a new user and verify that the Profile Inicials is displayed 
2. APIAdd Test : Create a new API and verify that it´s saved succesfully.
3. EndPointConfiguration Test: Configure the End Point of the  existing API and verify the status.
4. API Test :  Validate the answer to the existing API using RestFull
5. APIEndToEnd Test : Create a API, configure the End Point and call de API. Then verify the answer.

## Run

1.Technical requirement:
  Java 8 ("http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html")
  mvn ("https://maven.apache.org/install.html" for windows or brew install maven for mac)
2. Execute: the comamand "mvn test" in console


## Note
In case to require execute the test more than one time, is necessary change the value of the following variables:
1. SignUp Test:  userName 
2. APIAdd Test: APIName
5. APIEndToEnd Test: APIName
In the Api.feature
