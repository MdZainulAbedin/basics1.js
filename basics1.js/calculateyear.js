// I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.
// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in this format:
// You have x days, y weeks, and z months left.
// Where x, y and z are replaced with the actual calculated numbers.

// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

// IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.
// Example Input

function lifeInweeks(age) {

    var yearsRemaning = 70 - age;
    var days = yearsRemaning * 365;
    var weeks = yearsRemaning * 52;
    var months = yearsRemaning * 12;
  
    console.log(" you have " + days + " days, " + weeks + " weeks, and " + months + " months left");
}
  
    lifeInweeks(30);


    // var n = Math.random();
    // console.log(n);
    