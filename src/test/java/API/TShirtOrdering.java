package test.java.API;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import test.java.Model.Product;

public class TShirtOrdering {
		
	public String getTShirtCount(String urlAPI) {
		String urlToRequest = urlAPI+"/products";
		
		RestTemplate restTemplate = new RestTemplate();			  
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<Product> httpEntity = new HttpEntity<Product>(headers);
		
		System.setProperty("proxyHost", "10.10.10.66");
		System.setProperty("proxyPort", "8080");
		
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		ResponseEntity<Product[]> response = restTemplate.exchange(urlToRequest, HttpMethod.GET, httpEntity, Product[].class);
		
		Product[] products = response.getBody();
		
		List<String> sizes = new ArrayList<String>(); 
				
		for (Product product : products) {
			sizes.add(product.getSize());
		}
		return sizes.get(0); 
	}
}

