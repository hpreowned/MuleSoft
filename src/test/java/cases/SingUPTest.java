package test.java.cases;

import org.openqa.selenium.WebDriver;
import static org.junit.Assert.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import test.java.PageObject.MuleSoftOptionsPage;
import test.java.PageObject.SignInPage;
import test.java.PageObject.SignUpPage;
import test.java.PageObject.WindowsManage;

public class SingUPTest {
	public WebDriver driver;
	private String URL="http://anypoint.mulesoft.com";
	public String fullName;
	public String email;
	public String telephone;
	public String organization;
	public String userName;
	public String password;
	private String profileInicial;
	
	@Given("^the fullName \"([^\"]*)\",the email \"([^\"]*)\",the telephone \"([^\"]*)\",the organization \"([^\"]*)\",the userName \"([^\"]*)\" and the \"([^\"]*)\" password$")
	public void the_fullName_the_email_the_telephone_the_organization_the_userName_and_the_password(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		this.fullName=arg1;
		this.email=arg2;
		this.telephone=arg3;
		this.organization=arg4;
		this.userName=arg5;
		this.password=arg6;	    
	}

	@When("^test the SingUp$")
	public void test_the_SingUp() throws Throwable {
		WindowsManage WindowManage= new WindowsManage();
		driver=WindowManage.getAndOpenWindows(URL);
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.SignUpOption();
		SignUpPage signUpPage= new SignUpPage(driver);
		signUpPage.SignUp(fullName, email, telephone, organization, userName, password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();	    
	}

	@Then("^the API should display the profileInicial\"([^\"]*)\"$")
	public void the_API_should_display_the_profileInicial(String arg1) throws Throwable {
		this.profileInicial=arg1;
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		assertEquals(muleSoftOptionsPage.ProfileInicial(), profileInicial);	
		driver.close();
	}
	

}
