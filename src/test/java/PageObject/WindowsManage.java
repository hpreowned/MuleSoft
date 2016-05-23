package PageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WindowsManage {
	
private WebDriver driver;
	
	public WebDriver getAndOpenWindows(String URL){
		driver=new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(URL);
		driver.manage().window().maximize();
		return driver;
	}
	
	public void Close(){
		driver.close();
	}
	

}
