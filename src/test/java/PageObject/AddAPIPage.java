package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AddAPIPage {
	private WebDriver driver;
	
	public AddAPIPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getName(){
		return driver.findElement(By.id("name"));
	}
	
	private WebElement getVersion(){
		return driver.findElement(By.id("version"));
	}
	
	private WebElement getAddButton(){
		return driver.findElement(By.cssSelector("div.modal-footer > button.btn.btn-primary"));
	}
		
	public void NewAPI(String NameAPI,String Version) throws InterruptedException {
		getName().sendKeys(NameAPI);
		getVersion().sendKeys(Version);
		getAddButton().click();			
	}
	
}
