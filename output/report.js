$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Api.feature");
formatter.feature({
  "line": 1,
  "name": "Test API",
  "description": "",
  "id": "test-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "SingUp Test",
  "description": "",
  "id": "test-api;singup-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the fullName \u003cfullName\u003e,the email \u003cemail\u003e,the telephone \u003ctelephone\u003e,the organization \u003corganization\u003e,the userName \u003cuserName\u003e and the \u003cpassword\u003e password",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "test the SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API should display the profileInicial\u003cprofileInicial\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "Happy SingUP",
  "description": "",
  "id": "test-api;singup-test;happy-singup",
  "rows": [
    {
      "cells": [
        "fullName",
        "email",
        "telephone",
        "organization",
        "userName",
        "password",
        "profileInicial"
      ],
      "line": 9,
      "id": "test-api;singup-test;happy-singup;1"
    },
    {
      "cells": [
        "\"Liliana Vivas\"",
        "\"lilianavivas@gmail.com\"",
        "\"3154519157\"",
        "\"PSL\"",
        "\"lvivas41\"",
        "\"Password2\"",
        "\"LV\""
      ],
      "line": 10,
      "id": "test-api;singup-test;happy-singup;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "SingUp Test",
  "description": "",
  "id": "test-api;singup-test;happy-singup;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the fullName \"Liliana Vivas\",the email \"lilianavivas@gmail.com\",the telephone \"3154519157\",the organization \"PSL\",the userName \"lvivas41\" and the \"Password2\" password",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "test the SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API should display the profileInicial\"LV\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liliana Vivas",
      "offset": 14
    },
    {
      "val": "lilianavivas@gmail.com",
      "offset": 40
    },
    {
      "val": "3154519157",
      "offset": 79
    },
    {
      "val": "PSL",
      "offset": 109
    },
    {
      "val": "lvivas41",
      "offset": 128
    },
    {
      "val": "Password2",
      "offset": 147
    }
  ],
  "location": "SingUPTest.the_fullName_the_email_the_telephone_the_organization_the_userName_and_the_password(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 85274027,
  "status": "passed"
});
formatter.match({
  "location": "SingUPTest.test_the_SingUp()"
});
formatter.result({
  "duration": 20918019199,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LVIVASA\u0027, ip: \u0027172.28.200.74\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 861eab9e-b74d-4dbf-885a-ad8ce09170de\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat test.java.PageObject.MuleSoftOptionsPage.getAPIManager(MuleSoftOptionsPage.java:16)\r\n\tat test.java.PageObject.MuleSoftOptionsPage.APIManagerOptions(MuleSoftOptionsPage.java:40)\r\n\tat test.java.cases.SingUPTest.test_the_SingUp(SingUPTest.java:44)\r\n\tat ✽.When test the SingUp(Api.feature:5)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7055 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:162)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat test.java.PageObject.MuleSoftOptionsPage.getAPIManager(MuleSoftOptionsPage.java:16)\r\n\tat test.java.PageObject.MuleSoftOptionsPage.APIManagerOptions(MuleSoftOptionsPage.java:40)\r\n\tat test.java.cases.SingUPTest.test_the_SingUp(SingUPTest.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 84 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "LV",
      "offset": 42
    }
  ],
  "location": "SingUPTest.the_API_should_display_the_profileInicial(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "APIAdd Test",
  "description": "",
  "id": "test-api;apiadd-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the userName \u003cuserName\u003e,  and the \u003cpassword\u003e password",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "create the API APIName \u003cAPIName\u003e,and the \u003cAPIVersion\u003e APIVersion",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the API should be created succesfully \u003ccreate\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "Happy APIAdd",
  "description": "",
  "id": "test-api;apiadd-test;happy-apiadd",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "APIName",
        "APIVersion",
        "create"
      ],
      "line": 19,
      "id": "test-api;apiadd-test;happy-apiadd;1"
    },
    {
      "cells": [
        "\"lvivasa5\"",
        "\"Password2\"",
        "\"APINameAdd41\"",
        "\"APIVersion\"",
        "\"true\""
      ],
      "line": 20,
      "id": "test-api;apiadd-test;happy-apiadd;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "APIAdd Test",
  "description": "",
  "id": "test-api;apiadd-test;happy-apiadd;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "the userName \"lvivasa5\",  and the \"Password2\" password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "create the API APIName \"APINameAdd41\",and the \"APIVersion\" APIVersion",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the API should be created succesfully \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "lvivasa5",
      "offset": 14
    },
    {
      "val": "Password2",
      "offset": 35
    }
  ],
  "location": "APIAddTest.the_userName_and_the_password(String,String)"
});
formatter.result({
  "duration": 253255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "APINameAdd41",
      "offset": 24
    },
    {
      "val": "APIVersion",
      "offset": 47
    }
  ],
  "location": "APIAddTest.create_the_API_APIName_and_the_APIVersion(String,String)"
});
formatter.result({
  "duration": 32096281432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 39
    }
  ],
  "location": "APIAddTest.the_API_should_be_created_succesfully(boolean)"
});
formatter.result({
  "duration": 9960874302,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "EndPointConfiguration Test",
  "description": "",
  "id": "test-api;endpointconfiguration-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "the user \u003cuserName\u003e,the password \u003cpassword\u003e ,the API \u003cAPIName\u003e,and the \u003cAPIVersion\u003e Version",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "configure the EndPoint",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the EndPoint should be update succesfully \u003cupdate\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "Happy EndPointConfiguration",
  "description": "",
  "id": "test-api;endpointconfiguration-test;happy-endpointconfiguration",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "APIName",
        "APIVersion",
        "update"
      ],
      "line": 29,
      "id": "test-api;endpointconfiguration-test;happy-endpointconfiguration;1"
    },
    {
      "cells": [
        "\"lvivasa5\"",
        "\"Password2\"",
        "\"APIName51\"",
        "\"APIVersion\"",
        "\"true\""
      ],
      "line": 30,
      "id": "test-api;endpointconfiguration-test;happy-endpointconfiguration;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "EndPointConfiguration Test",
  "description": "",
  "id": "test-api;endpointconfiguration-test;happy-endpointconfiguration;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "the user \"lvivasa5\",the password \"Password2\" ,the API \"APIName51\",and the \"APIVersion\" Version",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "configure the EndPoint",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the EndPoint should be update succesfully \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "lvivasa5",
      "offset": 10
    },
    {
      "val": "Password2",
      "offset": 34
    },
    {
      "val": "APIName51",
      "offset": 55
    },
    {
      "val": "APIVersion",
      "offset": 75
    }
  ],
  "location": "EndPointConfigureTest.the_user_the_password_the_API_and_the_Version(String,String,String,String)"
});
formatter.result({
  "duration": 143985,
  "status": "passed"
});
formatter.match({
  "location": "EndPointConfigureTest.configure_the_EndPoint()"
});
