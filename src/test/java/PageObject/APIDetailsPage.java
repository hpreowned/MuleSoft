package test.java.PageObject;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class APIDetailsPage {
private WebDriver driver;
	
	public APIDetailsPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getImportRAML(){
		return driver.findElement(By.cssSelector("raml-editor-import-button > span"));
	}
	
	private WebElement getFileRAML(){
		return driver.findElement(By.id("file"));
	}
	
	private WebElement getImportButton(){
		return driver.findElement(By.cssSelector("button.btn.btn-primary"));
	}
	
	private WebElement getReplaceButton(){
		return driver.findElement(By.xpath("(//button[@type='submit'])[3]"));
	}
	
	private WebElement getOnButton(){
		return driver.findElement(By.cssSelector(".field-wrapper"));
	}
	
	private WebElement getSaveButton(){
		return driver.findElement(By.cssSelector("i.fa.fa-caret-down"));
	}
	
	private WebElement getSaveAllOption(){
		return driver.findElement(By.cssSelector("ul.menu-item-context > li"));
	}
	
	private void getSleep(Integer time) throws InterruptedException{
		Thread.sleep(time);
	}
	
	private WebElement getSaveStatus(){
		return driver.findElement(By.cssSelector("i.fa.fa-check"));
	}
	
	private WebElement getAPIAdministrationLink(){
		return driver.findElement(By.linkText("API administration"));
	}
	
	public boolean APIDetail() throws InterruptedException{
		getImportRAML().click();
		File fichero = new File("api.raml");
		getFileRAML().sendKeys(fichero.getAbsolutePath());
		getImportButton().click();
		getReplaceButton().click();
		getSleep(1000);
		getOnButton().click();
		getSleep(3000);
		getSaveButton().click();
		getSaveAllOption().click();
		return getSaveStatus().isDisplayed();
	}
	
	public void APIAdministration(){
		getAPIAdministrationLink().click();
	}
}
