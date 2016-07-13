//Q1. Write a simple node program that outputs "Hello World!" to the console.
// Add an instruction to your program that will output "Hello World Again!!" 10 seconds after the 
//program was run. Save, commit and push.

// function hello(){
//     console.log('Hello World!');
//     setTimeout(function(){
//         console.log('Hello World Again!!')
//     }, 10000)
// }

// hello();


//Q2. Write a piece of code using setTimeout that prints "Hello World!" every 10 seconds forever.

function repeat(){
     setTimeout(function() {
    console.log('Hello World!');
      repeat();
  }, 10000)
}
repeat();

