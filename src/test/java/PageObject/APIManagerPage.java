package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class APIManagerPage {
	private WebDriver driver;
	
	public APIManagerPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getTittle(){
		return driver.findElement(By.cssSelector("div.NavBar__page-name___16Fx2 > span"));
	}
	
	private WebElement getAddAPI(){
		return driver.findElement(By.cssSelector("button.btn.btn-primary"));
	}
	
	private WebElement getSearchType(){
		return driver.findElement(By.xpath("//form/input"));
	}
	
	private WebElement getVersionSelect(String Version){
		return driver.findElement(By.linkText(Version));
	}
		
	public String APIManager(){
		getAddAPI().click();
		return getTittle().getText();		
	}
	
	public void searchAPI(String NameAPI,String Version){
		getSearchType().sendKeys(NameAPI);
		getSearchType().sendKeys(Keys.ENTER);
		getVersionSelect(Version).click();
	}

}
