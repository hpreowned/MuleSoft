
package test.java.Model;

import javax.annotation.Generated;

@Generated("org.jsonschema2pojo")
public class OrderStatus {

private String orderId;
private String status;
private String size;

/**
* 
* @return
* The orderId
*/
public String getOrderId() {
return orderId;
}

/**
* 
* @param orderId
* The orderId
*/
public void setOrderId(String orderId) {
this.orderId = orderId;
}

/**
* 
* @return
* The status
*/
public String getStatus() {
return status;
}

/**
* 
* @param status
* The status
*/
public void setStatus(String status) {
this.status = status;
}

/**
* 
* @return
* The size
*/
public String getSize() {
return size;
}

/**
* 
* @param size
* The size
*/
public void setSize(String size) {
this.size = size;
}

}