package test.java.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class EndPointPage {
private WebDriver driver;
	
	public EndPointPage(WebDriver driver){
		this.driver=driver;
	}
	
	private WebElement getEndPointName(){
		return driver.findElement(By.name("endpointUri"));
	}
	
	private WebElement getSaveEndPoint(){
		return driver.findElement(By.cssSelector("button.btn.btn-primary"));
	}
	
	private void getMoveScroll(){
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(0,750)", "");
	}
	
	private void getSleep(Integer time) throws InterruptedException {
		Thread.sleep(time);
	}
	
	public String EndPointConfigure() throws InterruptedException{
		getSleep(1000);
		String endPoint=getEndPointName().getAttribute("value");
		getMoveScroll();
		getSaveEndPoint().click();
		return endPoint;
	}
	

}
