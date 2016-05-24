package test.java.cases;


import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@cucumber.api.CucumberOptions(format={"pretty", "html:target/cucumber"})
public class RunCukesTest {

}
