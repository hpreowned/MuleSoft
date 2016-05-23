package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SignInPage {
	private WebDriver driver;
	
	public SignInPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getUserName(){
		return driver.findElement(By.name("username"));
	}
	
	private WebElement getPassword(){
		return driver.findElement(By.name("password"));
	}
	
	private WebElement getSignInButton(){
		return driver.findElement(By.xpath("//button[@type='button']"));
	}
	
	private WebElement getSignUpButton(){
		return driver.findElement(By.xpath("(//button[@type='button'])[2]"));
	}
	
	public void signIn (String username,String password){
		getUserName().sendKeys(username);
		getPassword().sendKeys(password);
		getSignInButton().click();
	}
	
	public void SignUpOption(){
		getSignUpButton().click();
	}
}
