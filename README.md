# Sms Gateways
Using this Node.js REST-ful API you'll be able to send SMS using multiple services.

### List of sms panels that currently supported :


| Number  | website |
| ------------- | ------------- |
| 1  | https://sms.ir  |
| 2  | http://melipayamak.com  |
| 3  | https://kavenegar.com/  |




### Add your web service:

Add your web service information to ./gateways/gateways.json

```
"YourWebserviceName" : {
	    	"name": "YourWebserviceName",
	      	"localName" : "نام وب سرویس شما",
	        "developer": "@yourGithubId",
	        "website": "http://domain.com",
	        "logo": "/logos/YourWebserviceName.png",
	        "country": "IR",
	        "AuthType" : 1 
    	} 
```
Some of web services just need a token to authorize and some of them need username and password, you can specify Auth type with this numbers:

| Number  | Type |
| ------------- | ------------- |
| 1  | Token  |
| 2  | User Pass  |
| 3  | Other  |

You can check this types in your client and ask user for token or user pass.

After that:

Add YourWebserviceName.js to './gateways' - it name must be that name what you added to gateways.json file:

 And use ./gateways/sample js for writing your codes.
 
 ## How to use?
 
 1. Clone this project
 ```
 git clone https://github.com/raychat/sms-service.git
 ```
2. Go to project directory
3. Install dependencies 
```
npm install
```
4. Then
```
node index.js 
```

 * Send SMS
 
```POST /sendSms```
 
 
 | Field  | Type |  * | Description |
| ------------- | ------------- | ------------- | ------------- |
auth | string or object  | required  | your auth data(depends on your web service it can be an object or a string) |
| message  | string  |required  | message  |
|sender  | string  |required  | sender number |
|receptor  | string  |required  | receptor number |
|gateway  | string  |required  | web service name |

 * Get account information
 
```POST /getInfo```
 
 
 | Field  | Type |  * | Description |
| ------------- | ------------- | ------------- | ------------- |
auth | string or object  | required  | your auth data(depends on your web service it can be an object or a string) |
|gateway  | string  |required  | web service name |

