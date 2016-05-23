package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class APIConfigurationPage {
	private WebDriver driver;
	
	public APIConfigurationPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getDefineAPILink(){
		return driver.findElement(By.linkText("Define API in API designer"));
	}
	
	private WebElement getConfigureEndPointLink(){
		return driver.findElement(By.linkText("Configure endpoint"));
	}
	
	private WebElement getStatusEndPoint(){
		return driver.findElement(By.cssSelector("i.fa.fa-check"));
	}
	
	public void DefineAPI(){
		getDefineAPILink().click();
	}
	
	public void EndPoint(){
		getConfigureEndPointLink().click();
	}
	
	public boolean StatusEndPoint(){
		return getStatusEndPoint().isDisplayed();	
	}

}
