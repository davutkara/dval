### Default Value For Missing Properties ###

# Purpose #

Undefined and null erros are common in javascript. This function controls the properties, and returns default value if any of the property is null or undefined.

# Usage #

First argument is default value, it can be object,string,function or what you want.

Second argument is the object. 

Other arguments are properties.

# Examples #

You have an object like this.
```
var user = {
    name: 'Davut',
    phone: '123456789',
    address: {
        country: 'Turkey'
    //  ,country_code: '+90'
    }
}
```
Object structure is like above, but when you get the object as a json, and there is no address.country_code in json object.

Problem: You want to get user.adress.country_code, but country_code is undefined, but execution is not failed.
Problem 2: You want to get user.adress.country_code but address is undfined, so you get uncaught type error like this
`Uncaught TypeError: Cannot read property country_code of undfined`
then execution is failed. 

So I write a basic function, if there is a undfined or null property return the default value

```
_dval('+90',user,'address','country_code');
// Returns +90 if it is null or undefined.
```

Actually, you can make same thing like this without a function.
```
user.address.country_code === undefined || user.adress.country_code === null ? '+90' : user.address.country_code
// Returns +90
```
It is solution for problem 1, but not problme 2. Because if adress is undefined, same uncaught typeerror.

So the funciton is controll from top to sub properties and it is more readable.