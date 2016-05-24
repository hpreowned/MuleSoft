package test.java.cases;


import static org.junit.Assert.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import test.java.API.TShirtOrdering;


public class APITest {
	private String urlAPI;
	private String products;
		
	@Given("^the APIUrl \"([^\"]*)\"$")
	public void the_APIUrl(String arg1) throws Throwable {
		this.urlAPI=arg1;
	}

	@When("^call the APIUrl$")
	public void call_the_APIUrl() throws Throwable {
		
		
	}

	@Then("^the request should return the products \"([^\"]*)\"$")
	public void the_request_should_return_the_products(String arg1) throws Throwable {
		this.products=arg1;
		TShirtOrdering tShirtOrdering=new TShirtOrdering();
		assertEquals(products, tShirtOrdering.getTShirtCount(urlAPI));
	}

}
