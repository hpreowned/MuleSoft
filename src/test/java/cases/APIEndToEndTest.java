package test.java.cases;

import org.openqa.selenium.WebDriver;
import static org.junit.Assert.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import test.java.API.TShirtOrdering;
import test.java.PageObject.APIConfigurationPage;
import test.java.PageObject.APIDetailsPage;
import test.java.PageObject.APIManagerPage;
import test.java.PageObject.AddAPIPage;
import test.java.PageObject.EndPointPage;
import test.java.PageObject.MuleSoftOptionsPage;
import test.java.PageObject.SignInPage;
import test.java.PageObject.WindowsManage;


public class APIEndToEndTest {
	public WebDriver driver;
	private String URL="http://anypoint.mulesoft.com";
	public String userName;
	public String password;
	public String nameAPI;
	public String versionAPI;
	private String urlAPInew;
	private String products;
	
	@Given("^the user \"([^\"]*)\",  and the \"([^\"]*)\" pass$")
	public void the_user_and_the_pass(String arg1, String arg2) throws Throwable {
		this.userName=arg1;
	    this.password=arg2;
	}

	@When("^create the API \"([^\"]*)\",and the \"([^\"]*)\" version$")
	public void create_the_API_and_the_version(String arg1, String arg2) throws Throwable {
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
		APIDetailsPage apiDetailsPage= new APIDetailsPage(driver);
		apiDetailsPage.APIDetail();
		apiDetailsPage.APIAdministration();
		apiManagerPage.searchAPI(nameAPI,versionAPI);
		apiConfigurationPage.EndPoint();
		EndPointPage endPointPage=new EndPointPage(driver);
		urlAPInew=endPointPage.EndPointConfigure();  
	}

	@Then("^test API should show the products \"([^\"]*)\"$")
	public void test_API_should_show_the_products(String arg1) throws Throwable {
		this.products=arg1;
		TShirtOrdering tShirtOrdering=new TShirtOrdering();
		assertEquals(products, tShirtOrdering.getTShirtCount(urlAPInew));
		driver.close();
	}

}
