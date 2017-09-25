console.log('loaded');

//var allUserData = [];

//function logstuff(data) {
//  console.log('Inside logstuff');
//  console.log(data);
//}

//function getInput(user, callback) {
//  console.log('options are:');
//  console.log(user);
//  console.log('callback is:');
//  console.log(callback);

//  allUserData.push(user);
//  console.log(allUserData);
//  callback(allUserData);
//}

//getInput({
//  user: 'bill'
//}, logstuff)
//getInput({
//  user: 'phil'
//}, logstuff)
//getInput({
//  user: 'steph'
//}, logstuff)




//console.log('test 2');

//var fruit = [];

//function add_fruit(data) {
//  console.log('Inside add_fruit');
//  console.log(fruit);
//}

//function fruit_check(fruit_name, callback) {
//  console.log('Inside fruit_check');
//  if (fruit_name = 'banana') {
//    fruit.push(fruit_name);
//    callback(fruit);
//  }
//}

//fruit_check('orange', add_fruit);




// Exercise: callback me maybe
//
// 1. create a function called telephone that logs "867-5309" when called.
function telephone() {
  console.log('867-5309');
}

// 2. write a separate function called Blondie that takes a function as a parameter.
function blondie(callback) {
  console.log('Calling Blondie on: ');

  callback(telephone);
}
// 3. blondie should log "call me on the line at " when called, and then execute any function passed to it.
blondie(telephone);

// Exercise: repeater
//
// create a function called repeater that takes an integer and a string as arguments.
// When called, the function should log the string to the console as many times as indicated by the integer.
// Write a separate function called repeaterSetUp that takes an integer, a string, and a function as arguments.
// When called, repeaterSetUp should log "HERE WE GO" to the console, and then pass the integer and string passed to it to the function passed to it, which then executes.
// So if repeaterSetUp is passed 3 and "oi!", the terminal should print
//
// HERE WE GO
// oi!
// oi!
// oi!
// Note: parameters passed to a function can then be passed to a callback within that function. answer:

// Your code here
