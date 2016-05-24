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
  "name": "SignUp Test",
  "description": "",
  "id": "test-api;signup-test",
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
  "name": "test the SignUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API should display the profileInicial\u003cprofileInicial\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "Happy SignUP",
  "description": "",
  "id": "test-api;signup-test;happy-signup",
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
      "id": "test-api;signup-test;happy-signup;1"
    },
    {
      "cells": [
        "\"Liliana Vivas\"",
        "\"lilianavivas@gmail.com\"",
        "\"3154519157\"",
        "\"PSL\"",
        "\"lvivas90\"",
        "\"Password2\"",
        "\"LV\""
      ],
      "line": 10,
      "id": "test-api;signup-test;happy-signup;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "SignUp Test",
  "description": "",
  "id": "test-api;signup-test;happy-signup;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the fullName \"Liliana Vivas\",the email \"lilianavivas@gmail.com\",the telephone \"3154519157\",the organization \"PSL\",the userName \"lvivas90\" and the \"Password2\" password",
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
  "name": "test the SignUp",
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
      "val": "lvivas90",
      "offset": 128
    },
    {
      "val": "Password2",
      "offset": 147
    }
  ],
  "location": "SignUPTest.the_fullName_the_email_the_telephone_the_organization_the_userName_and_the_password(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 77130613,
  "status": "passed"
});
formatter.match({
  "location": "SignUPTest.test_the_SingUp()"
});
formatter.result({
  "duration": 27917179139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LV",
      "offset": 42
    }
  ],
  "location": "SignUPTest.the_API_should_display_the_profileInicial(String)"
});
formatter.result({
  "duration": 7802529898,
  "status": "passed"
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
        "\"APINameAdd90\"",
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
  "name": "create the API APIName \"APINameAdd90\",and the \"APIVersion\" APIVersion",
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
  "duration": 108365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "APINameAdd90",
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
  "duration": 30459736464,
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
  "duration": 10385171005,
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
  "duration": 115006,
  "status": "passed"
});
formatter.match({
  "location": "EndPointConfigureTest.configure_the_EndPoint()"
});
formatter.result({
  "duration": 32911776558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 43
    }
  ],
  "location": "EndPointConfigureTest.the_EndPoint_should_be_update_succesfully(boolean)"
});
formatter.result({
  "duration": 54694718,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "API Test",
  "description": "",
  "id": "test-api;api-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the APIUrl \u003curlAPI\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "call the APIUrl",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the request should return the products \u003cproducts\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "Happy APITest",
  "description": "",
  "id": "test-api;api-test;happy-apitest",
  "rows": [
    {
      "cells": [
        "urlAPI",
        "products"
      ],
      "line": 39,
      "id": "test-api;api-test;happy-apitest;1"
    },
    {
      "cells": [
        "\"https://mocksvc.mulesoft.com/mocks/a99da2a5-3b9e-4a83-b0a4-bd25dedd98f2\"",
        "\"S\""
      ],
      "line": 40,
      "id": "test-api;api-test;happy-apitest;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "API Test",
  "description": "",
  "id": "test-api;api-test;happy-apitest;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the APIUrl \"https://mocksvc.mulesoft.com/mocks/a99da2a5-3b9e-4a83-b0a4-bd25dedd98f2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "call the APIUrl",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the request should return the products \"S\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://mocksvc.mulesoft.com/mocks/a99da2a5-3b9e-4a83-b0a4-bd25dedd98f2",
      "offset": 12
    }
  ],
  "location": "APITest.the_APIUrl(String)"
});
formatter.result({
  "duration": 80896,
  "status": "passed"
});
formatter.match({
  "location": "APITest.call_the_APIUrl()"
});
formatter.result({
  "duration": 9659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 40
    }
  ],
  "location": "APITest.the_request_should_return_the_products(String)"
});
formatter.result({
  "duration": 945935250,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "APIEndToEnd Test",
  "description": "",
  "id": "test-api;apiendtoend-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the user \u003cuserName\u003e,  and the \u003cpassword\u003e pass",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "create the API \u003cAPIName\u003e,and the \u003cAPIVersion\u003e version",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "test API should show the products \u003cproducts\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "Happy APIEndToEnd",
  "description": "",
  "id": "test-api;apiendtoend-test;happy-apiendtoend",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "APIName",
        "APIVersion",
        "products"
      ],
      "line": 49,
      "id": "test-api;apiendtoend-test;happy-apiendtoend;1"
    },
    {
      "cells": [
        "\"lvivasa5\"",
        "\"Password2\"",
        "\"APINameE2E90\"",
        "\"APIVersion\"",
        "\"S\""
      ],
      "line": 50,
      "id": "test-api;apiendtoend-test;happy-apiendtoend;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "APIEndToEnd Test",
  "description": "",
  "id": "test-api;apiendtoend-test;happy-apiendtoend;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the user \"lvivasa5\",  and the \"Password2\" pass",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "create the API \"APINameE2E90\",and the \"APIVersion\" version",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "test API should show the products \"S\"",
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
      "offset": 31
    }
  ],
  "location": "APIEndToEndTest.the_user_and_the_pass(String,String)"
});
formatter.result({
  "duration": 99913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "APINameE2E90",
      "offset": 16
    },
    {
      "val": "APIVersion",
      "offset": 39
    }
  ],
  "location": "APIEndToEndTest.create_the_API_and_the_version(String,String)"
});
formatter.result({
  "duration": 48580248311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 35
    }
  ],
  "location": "APIEndToEndTest.test_API_should_show_the_products(String)"
});
formatter.result({
  "duration": 413139881,
  "status": "passed"
});
});