package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SignUpPage {
	
	private WebDriver driver;
	
	public SignUpPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getFullName(){
		return driver.findElement(By.name("fullName"));
	}
	
	private WebElement getEmail(){
		return driver.findElement(By.name("email"));
	}
	
	private WebElement getPhoneNumber(){
		return driver.findElement(By.name("phoneNumber"));
	}
	
	private WebElement getOrganizationName(){
		return driver.findElement(By.name("organizationName"));
	}
	
	private WebElement getUserName(){
		return driver.findElement(By.name("username"));
	}
	
	private WebElement getPassword(){
		return driver.findElement(By.name("password"));
	}
	
	private WebElement getCreateAccountButton(){
		return driver.findElement(By.xpath("(//button[@type='button'])[2]"));
	}
	
	public void SignUp(String fullName,String email,String phoneNumber,String organization, String userName, String password){
		getFullName().sendKeys(fullName);
		getEmail().sendKeys(email);
		getPhoneNumber().sendKeys(phoneNumber);
		getOrganizationName().sendKeys(organization);
		getUserName().sendKeys(userName);
		getPassword().sendKeys(password);
		getCreateAccountButton().click();
	}
	

}
