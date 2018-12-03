import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class headlessDemoSelenium {
    public static void main(String[] args) throws InterruptedException {
        headlessDemoSelenium.extractToken("dsfds","fsd");
    }



    public static String extractToken(String userId, String pwd) throws InterruptedException {
// Create a new instance of the Firefox driver
        //WebDriver driver = new FirefoxDriver();
        String path = System.getProperty("user.dir");
        System.setProperty("webdriver.gecko.driver", path + "\\src\\geckodriver.exe");
        WebDriver driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
// Navigate to URL
        driver.get("https://ec2-13-127-159-5.ap-south-1.compute.amazonaws.com/sharebox/default/user/login?_next=/sharebox/default/index");
// Maximize the window.
        driver.manage().window().maximize();
// Enter UserName
        driver.findElement(By.id("auth_user_email")).sendKeys(userId);
// Enter Password
        driver.findElement(By.id("auth_user_password")).sendKeys(pwd);
// Wait For Page To Load
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
// Click on 'Sign In' button
        driver.findElement(By.xpath("//tr[@id='submit_record__row']/td[2]/input")).click();
        driver.findElement(By.xpath("//html/body/nav/div/div[2]/ul[2]/li[3]/a")).click();
        driver.findElement(By.xpath("//*[@id=\"token_button\"]")).click();
        WebElement elem = driver.findElement(By.xpath("//*[@id=\"token_id\"]"));

        Thread.sleep(2000);
        String tokenId = (((JavascriptExecutor) driver).executeScript("return document.getElementById(\"token_id\").value;").toString());

        driver.close();
        return tokenId;

    }
}