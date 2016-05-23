package test.java;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import test.java.API.TShirtOrdering;
import test.java.PageObject.APIConfigurationPage;
import test.java.PageObject.APIDetailsPage;
import test.java.PageObject.APIManagerPage;
import test.java.PageObject.AddAPIPage;
import test.java.PageObject.EndPointPage;
import test.java.PageObject.MuleSoftOptionsPage;
import test.java.PageObject.SignInPage;
import test.java.PageObject.WindowsManage;



public class MuleSoftTest {
	public WebDriver driver;
	private String URL="http://anypoint.mulesoft.com";
	private String urlAPI;
	public String mgs;
	public String NameAPI="NameAPI40";
	public String VersionAPI="Version";
	private String ProfileInicial="LV";
	public String UserName="lvivasa5";
	public String Password="Password2";
	
		
	@BeforeMethod
	public void MSTest (){
		WindowsManage WindowManage= new WindowsManage();
		driver=WindowManage.getAndOpenWindows(URL);
		}
	
	@AfterMethod
	public void EndTest(){
		driver.close();
	}
	
	/*@Test(enabled=false)
	public void SignUp(){
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.SignUpOption();
		SignUpPage signUpPage= new SignUpPage(driver);
		signUpPage.SignUp("Liliana Vivas", "lilianavivas@gmail.com", "3154519157", "PSL", UserName, Password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		Assert.assertEquals(muleSoftOptionsPage.ProfileInicial(), ProfileInicial);
	}
	
	@Test(enabled=false)
	public void APIAdd() throws InterruptedException{
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.signIn(UserName, Password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		APIManagerPage apiManagerPage=new APIManagerPage(driver);
		apiManagerPage.APIManager();
		AddAPIPage addAPIPage= new AddAPIPage(driver);
		addAPIPage.NewAPI(NameAPI,VersionAPI);
		APIConfigurationPage apiConfigurationPage=new APIConfigurationPage(driver);
		apiConfigurationPage.DefineAPI();
		APIDetailsPage apiDetailsPage= new APIDetailsPage(driver);
		Assert.assertEquals(apiDetailsPage.APIDetail(), true);
		}
	
	@Test(enabled=false)
	public void EndPointConfigure() throws InterruptedException{
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.signIn(UserName, Password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		APIManagerPage apiManagerPage=new APIManagerPage(driver);
		apiManagerPage.searchAPI(NameAPI,VersionAPI);
		APIConfigurationPage apiConfigurationPage=new APIConfigurationPage(driver);
		apiConfigurationPage.EndPoint();
		EndPointPage endPointPage=new EndPointPage(driver);
		urlAPI=endPointPage.EndPointConfigure();
		Assert.assertEquals(apiConfigurationPage.StatusEndPoint(), true);
	}*/
	
	@Test(enabled=false)
	public void APITest(){
		TShirtOrdering tShirtOrdering=new TShirtOrdering();
		tShirtOrdering.getTShirtCount("https://mocksvc.mulesoft.com/mocks/a99da2a5-3b9e-4a83-b0a4-bd25dedd98f2/");
	}
	
	@Test
	public void APITestEndtoEnd() throws InterruptedException{
		SignInPage signInPage= new SignInPage(driver); 
		signInPage.signIn(UserName, Password);
		MuleSoftOptionsPage muleSoftOptionsPage= new MuleSoftOptionsPage(driver);
		muleSoftOptionsPage.APIManagerOptions();
		APIManagerPage apiManagerPage=new APIManagerPage(driver);
		apiManagerPage.APIManager();
		AddAPIPage addAPIPage= new AddAPIPage(driver);
		addAPIPage.NewAPI(NameAPI,VersionAPI);
		APIConfigurationPage apiConfigurationPage=new APIConfigurationPage(driver);
		apiConfigurationPage.DefineAPI();
		APIDetailsPage apiDetailsPage= new APIDetailsPage(driver);
		apiDetailsPage.APIDetail();
		apiDetailsPage.APIAdministration();
		apiManagerPage.searchAPI(NameAPI,VersionAPI);
		apiConfigurationPage.EndPoint();
		EndPointPage endPointPage=new EndPointPage(driver);
		urlAPI=endPointPage.EndPointConfigure();
		TShirtOrdering tShirtOrdering=new TShirtOrdering();
		tShirtOrdering.getTShirtCount(urlAPI);
		}
	
}
