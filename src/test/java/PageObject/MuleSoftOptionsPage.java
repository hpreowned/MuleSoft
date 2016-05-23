package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class MuleSoftOptionsPage {
	
	private WebDriver driver;
	public MuleSoftOptionsPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getAPIManager(){
		return (driver.findElement(By.cssSelector("a.Hero__target___UzNMh")));
	}
	
	private WebElement getRunTimeManager(){
		return driver.findElement(By.cssSelector(".Hero__item___17Xl2.Hero__active___2Orqa"));
	}
	
	private WebElement getExchange(){
		return driver.findElement(By.cssSelector("div.Hero__item___17Xl2.Hero__active___2Orqa  > a.Hero__target___UzNMh"));
	}
	
	private WebElement getOpenButton(){
		return driver.findElement(By.cssSelector("div.Button__label___eEzIE"));
	}
	
	private WebElement getProfileInicial(){
		return driver.findElement(By.cssSelector(".NavBar__profileInitials___61TrN>div"));
	}
	
	private void Hover(WebElement element){
		new Actions(driver).moveToElement(element).perform();
	}
	
	public void APIManagerOptions(){
		Hover(getAPIManager());
		getOpenButton().click();
		}
	
	public void RunTimeManagerOptions(){
		Hover(getRunTimeManager());
		getOpenButton().click();
	}
	
	public void ExchangeOptions(){
		Hover(getExchange());
		getOpenButton().click();
	}
	
	public String ProfileInicial(){
		return getProfileInicial().getText();
	}
}
