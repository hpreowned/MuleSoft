
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import test.java.API.TShirtOrdering;
import test.java.PageObject.APIConfigurationPage;
import test.java.PageObject.APIDetailsPage;
import test.java.PageObject.APIManagerPage;
import test.java.PageObject.AddAPIPage;
import test.java.PageObject.EndPointPage;
import test.java.PageObject.MuleSoftOptionsPage;
import test.java.PageObject.SignInPage;
import test.java.PageObject.SignUpPage;
import test.java.PageObject.WindowsManage;



public class MuleSoftTest {
	public WebDriver driver;
	private String URL="http://anypoint.mulesoft.com";
	private String urlAPI="https://mocksvc.mulesoft.com/mocks/a99da2a5-3b9e-4a83-b0a4-bd25dedd98f2/";
	private String urlAPInew;
	public String mgs;
	public String nameAPI="NameAPI40";
	public String versionAPI="Version";
	private String profileInicial="LV";
	public String userName="lvivasa5";
	public String password="Password2";
	public String fullName="Liliana Vivas";
	public String email="lilianavivas@gmail.com";
	public String telephone="3154519157";
	public String organization="PSL"; 

	
		
	@BeforeTest
	public void MSTest (){
		WindowsManage WindowManage= new WindowsManage();
		driver=WindowManage.getAndOpenWindows(URL);
		}
	
	@AfterTest
	public void EndTest(){
		driver.close();
	}
	
	@Test(enabled=false)
	public void SignUp(){
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.SignUpOption();
		SignUpPage signUpPage= new SignUpPage(driver);
		signUpPage.SignUp(fullName, email, telephone, organization, userName, password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		Assert.assertEquals(muleSoftOptionsPage.ProfileInicial(), profileInicial);
	}
	
	@Test(enabled=false)
	public void APIAdd() throws InterruptedException{
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
		Assert.assertEquals(apiDetailsPage.APIDetail(), true);
		}
	
	@Test(enabled=false)
	public void EndPointConfigure() throws InterruptedException{
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.signIn(userName, password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		APIManagerPage apiManagerPage=new APIManagerPage(driver);
		apiManagerPage.searchAPI(nameAPI,versionAPI);
		APIConfigurationPage apiConfigurationPage=new APIConfigurationPage(driver);
		apiConfigurationPage.EndPoint();
		EndPointPage endPointPage=new EndPointPage(driver);
		urlAPI=endPointPage.EndPointConfigure();
		Assert.assertEquals(apiConfigurationPage.StatusEndPoint(), true);
	}
	
	@Test(enabled=false)
	public void APITest(){
		TShirtOrdering tShirtOrdering=new TShirtOrdering();
		tShirtOrdering.getTShirtCount(urlAPI);
	}
	
	@Test
	public void APITestEndtoEnd() throws InterruptedException{
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
		TShirtOrdering tShirtOrdering=new TShirtOrdering();
		tShirtOrdering.getTShirtCount(urlAPInew);
		}
	
}
