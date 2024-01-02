 
 
// ------------? JavaScript ?----------------- //

    /* let tweet = prompt("Tweet about something: ");  // takes in input

    var promptSlice = tweet.slice(0,140);

    alert(promptSlice); */

// ----------------------Convert first Name in proper Camel Case Format------------------------//

    /*
    var name = prompt("Enter your name:");
    var n = name.length;
    var firstLetter = name.slice(0,1);
    var remaining = name.slice(1,n);
    var updatedName = (firstLetter.toUpperCase() + remaining.toLowerCase());
    alert("Hi there! " + updatedName);
    */

// --------------------Getting a random number------------------------- //

// var n= Math.random();
// n=(n*6) + 1;
// console.log(Math.floor(n));

// ----------------------- Leap Year Program -------------------------- //

    /*  

    var year = prompt( "Enter a year ");
    function isLeap(year) { 

        if((year%4)===0 && (year%100)!==0){
            var ans = "Leap year.";
        }
        if((year%4)===0 && (year%100)===0){
            var ans = "Not leap year.";
        }
        if((year%4)===0  && (year%400)===0 ){
            var ans = "Leap year.";
        }
        if ((year%4)!==0){
            var ans = "Not leap year.";
        }
        
        return ans;  
    }

    console.log(isLeap(year));
    
    */
 
// -----------------Arrow Syntax---------------------- //

    /* 
    
    fun(a,b) => {
    return a+b;
    }
    fun(1,3); 
    
    */

// -----------------Function inside a function---------------------- //

/* 

    function createAdder(a){
    function f(b){
        const sum = a + b;                   // closure property (here of a)
        return sum;
    }
    return f;
    }

    const r = createAdder(5);
    console.log(r(6)); 

*/

// ----------------------------------------- //

/*

    function createCounter()
    {
        let value = 0;
        function increment(){
            return ++value;
        }
        return 
        {
            increment : increment
        }
    }

    const counter1 = createCounter();

    console.log(counter1.increment()); 
    
*/

// ----------------------------------------------- //

// function log(inputFunction) {
//   return function(...args) {
//      console.log("Input", args);
//      const result = inputFunction(...args);
//      console.log("Output", result);
//      return result;
//   }
// }
// const f = log((a, b) => a + b);
// f(1, 2);



// --------------------Fizz Buzz PROBLEM-------------------------- //
/* 

    let arr =[];
    let value = 0;
    function fizzBuzz()
    {
        ++value;
        if( value%3===0 && value%5!==0)
        {
            arr.push("Fizz");
        }
    else if (value%5===0 && value%3!==0)
        {
            arr.push("Buzz")
        }
    else if (value % 5===0 && value % 3 === 0 )
        {
            arr.push("FizzBuzz")
        }
    else
        {
            arr.push(value);
        }
        console.log(arr);
    }

*/

// ---------------------------PROBLEM---------------------------- //

/* 
    function whosPaying(names) 
    {
        let noOfPeople = names.length;
        let randomPeople = Math.floor(Math.random() * noOfPeople);
        let name= names[randomPeople];
        return name + " is going to but lunch today!";
    } 
*/

// --------------------Fibonacci Generator---------------------- //

    /* function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        let arr =[];
        // if(n===0){
        //     arr= [null];
        // }
        if ( n=== 1){
        arr = [0];
        }
        else if (n === 2 ){
        arr = [0 , 1];
        
        }
        else  {
        arr = [0 , 1];
        for (let i = 2; i <n; i++){
            arr.push(arr[arr.length -2 ]+ arr[arr.length -1]);
            
        }
        }
    return arr;
    //Return an array of fibonacci numbers starting from 0.
    }
    console.log(arr);

*/

// ------------------------Random No.---------------------------- //

/* 
    
    const points = [40, 100, 1, 5, 25, 10];
    
    function myFunction() {

        for (let i = points.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let k = points[i];
            points[i] = points[j];
            points[j] = k;
        }
    } 

*/

//1. Create a counter which counts down from 30 to 0 and then stops. Log the current count at each step.

function countDown(){
    let count = 30;
    let timer = setInterval(function(){
        console.log(count);
        count--;
        if(count === 0){
            clearInterval(timer);
            console.log("DONE!");
        }
    },1000);
}
// countDown();


//2. Calculate the time it takes between a setTimeout call and the inner function actually running.

let time = Date.now(); // Record the current time, for inner function actually running

function runLater() {
    console.log("runLater");
    console.log("The time difference is: ", Date.now() - time); // Calculate and log the time difference
}

setTimeout(runLater, 3 * 1000); // Set a timeout of 3000 milliseconds
// runLater();



//3. Create a terminal Clock (HH:MM:SS) which updates every second.

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}

clock(); 

