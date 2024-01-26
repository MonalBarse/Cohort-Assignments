// The Module Pattern is one of the most common design patterns used in JavaScript and for good reason.
// The module pattern is easy to use and creates encapsulation of our code.
// Modules are commonly used as singleton style objects where only one instance exists.
// The Module Pattern is great for services and testing/TDD.


/* Creating a module 
First we start using a anonymous closure.
 Anonymous closures are just functions that wrap our code and create an enclosed scope around it. 
 Closures help keep any state or privacy within that function. 
 Closures are one of the best and most powerful features of JavaScript.
*/

(function () {
    'use strict';
    // Your code here
    let counter = 0;
    function incrementCounter() {
        counter++;
    }
    function decrementCounter() {
        counter--;
    }
    function getCounter() {
        return counter;
    }
    // window.incrementCounter = incrementCounter;
    // window.decrementCounter = decrementCounter;

    // All function and variables are scoped to this function
    // and are not accessible outside of this function
    // unless we expose them to the global object
    // window.incrementCounter = incrementCounter; // Exposing incrementCounter to the global object
})();
//This pattern is well known as a Immediately Invoked Function Expression or IIFE.
//The function is evaluated then immediately invoked.

/* 
Exporting our module 
Next we will want to export our module. This basically assigns the module to a variable that we can use to call our modules methods.

*/

var myModule = (function () {
    'use strict';

})();

/* 
    Next lets create a public method for our module to call. 
    To expose this method to code outside our module we return an Object with the methods defined.
*/
var myModule = (function () {
    'use strict'; // Strict mode helps us write cleaner code and avoid common errors this syntax is says that we are using strict mode 
    return {
        publicMethod: function () {
            console.log('Hello World!');
        }
    };
})();

myModule.publicMethod(); // outputs 'Hello World'

/* 
    Private methods & properties 
    JavaScript does not have a private keyword by default 
    but using closures we can create private methods and private state.
*/
var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello World';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod: function() {
      _privateMethod();
    }
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure

/* 
// Revealing Module Pattern 
     The Revealing Module Pattern is one of the most popular ways of creating modules.
         Using the return statement we can return a object literal that 'reveals' only the methods or properties we want to be publicly available.
*/
var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello World';
  var publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  function publicMethod() {
    _privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty 
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure