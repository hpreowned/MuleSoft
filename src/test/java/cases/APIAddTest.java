package test.java.cases;


import org.openqa.selenium.WebDriver;
import static org.junit.Assert.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import test.java.PageObject.APIConfigurationPage;
import test.java.PageObject.APIDetailsPage;
import test.java.PageObject.APIManagerPage;
import test.java.PageObject.AddAPIPage;
import test.java.PageObject.MuleSoftOptionsPage;
import test.java.PageObject.SignInPage;
import test.java.PageObject.WindowsManage;

public class APIAddTest {
	public WebDriver driver;
	private String URL="http://anypoint.mulesoft.com";
	public String userName;
	public String password;
	public String nameAPI;
	public String versionAPI;
	private boolean create;
	
	@Given("^the userName \"([^\"]*)\",  and the \"([^\"]*)\" password$")
	public void the_userName_and_the_password(String arg1, String arg2) throws Throwable {
		this.userName=arg1;
	    this.password=arg2;
	}

	@When("^create the API APIName \"([^\"]*)\",and the \"([^\"]*)\" APIVersion$")
	public void create_the_API_APIName_and_the_APIVersion(String arg1, String arg2) throws Throwable {
	    this.nameAPI=arg1;
	    this.versionAPI=arg2;
		WindowsManage WindowManage= new WindowsManage();
		driver=WindowManage.getAndOpenWindows(URL);
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.signIn(userName, password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		APIManagerPage apiManagerPage=new APIManagerPage(driver);
		apiManagerPage.APIManager();
		AddAPIPage addAPIPage= new AddAPIPage(driver);
		addAPIPage.NewAPI(nameAPI,versionAPI);
		APIConfigurationPage apiConfigurationPage=new APIConfigurationPage(driver);
		apiConfigurationPage.DefineAPI();
	}

	@Then("^the API should be created succesfully \"([^\"]*)\"$")
	public void the_API_should_be_created_succesfully(boolean arg1) throws Throwable {
		this.create=arg1;
		APIDetailsPage apiDetailsPage= new APIDetailsPage(driver);
		assertEquals(create, apiDetailsPage.APIDetail());
		driver.close();
	}

}
