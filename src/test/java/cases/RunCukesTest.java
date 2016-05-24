package test.java.cases;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format="html:output",features="src\\test\\resources\\cases\\")
public class RunCukesTest {

}
