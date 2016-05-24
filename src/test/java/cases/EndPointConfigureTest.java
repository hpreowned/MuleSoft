package test.java.cases;

import org.openqa.selenium.WebDriver;
import static org.junit.Assert.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import test.java.PageObject.APIConfigurationPage;
import test.java.PageObject.APIManagerPage;
import test.java.PageObject.EndPointPage;
import test.java.PageObject.MuleSoftOptionsPage;
import test.java.PageObject.SignInPage;
import test.java.PageObject.WindowsManage;

public class EndPointConfigureTest {
	public WebDriver driver;
	private String URL="http://anypoint.mulesoft.com";
	public String userName;
	public String password;
	public String nameAPI;
	public String versionAPI;
	private boolean update;
	
	@Given("^the user \"([^\"]*)\",the password \"([^\"]*)\" ,the API \"([^\"]*)\",and the \"([^\"]*)\" Version$")
	public void the_user_the_password_the_API_and_the_Version(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		this.userName=arg1;
	    this.password=arg2;
	    this.nameAPI=arg3;
	    this.versionAPI=arg4;
	}
	
	@When("^configure the EndPoint$")
	public void configure_the_EndPoint() throws Throwable {
		WindowsManage WindowManage= new WindowsManage();
		driver=WindowManage.getAndOpenWindows(URL);
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.signIn(userName, password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		APIManagerPage apiManagerPage=new APIManagerPage(driver);
		apiManagerPage.searchAPI(nameAPI,versionAPI);
		APIConfigurationPage apiConfigurationPage=new APIConfigurationPage(driver);
		apiConfigurationPage.EndPoint();
		EndPointPage endPointPage=new EndPointPage(driver);
		endPointPage.EndPointConfigure();
	}
	
	@Then("^the EndPoint should be update succesfully \"([^\"]*)\"$")
	public void the_EndPoint_should_be_update_succesfully(boolean arg1) throws Throwable {
		this.update=arg1;
		APIConfigurationPage apiConfigurationPage=new APIConfigurationPage(driver);
		assertEquals(update, apiConfigurationPage.StatusEndPoint());
		driver.close();
	}


}
