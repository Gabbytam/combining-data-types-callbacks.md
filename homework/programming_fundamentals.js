// DRY: avoid repeating yourself with the use of loops/functions/classes
// KISS: keep code simple for ease of writing and editting 
// Avoid creating a YAGNI: implement things only when you need it, not when you think you might need it in the future
// Do the simplest thing that could possibly work: think about the simplest way something can be done, then do that
// Don't make me think: code should be easy to read and understand, if its not, then it can probably be simplified
// Write code for the maintainer: write code that can be understood by others
// Single responsibility principle: components of code should accomplish one defined tasks, don't have one thing doing too much 
// Avoid premature optimization: dont try to modify(try to make more efficient) code until it is fully working 
// Separation of concerns: separate your code such that one section addresses a specific concern, concern being a set of info that affects code 

// Which ones surprise you (if any): Avoid creating a YAGNI makes sense after reading it but surprised me because I feel sometimes when I'm brainstorming how to get my code to do something I look first at the big picture and think about what functions I could possibly use down the line. I think I do this, though, because I worry I come up with a good idea and may forget it in the future. 

// Which one is currently giving you the most struggle: Probably doing the simplest thing that could possibly work. I find a lot of the times I can get my code to work but it just doesn't look efficient, and when we go over examples I see there are much simpler, cleaner ways to accomplish the same task. 

//--------------------------------------------------------------------
//Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

//declating an arrow function named f, which takes parameter l
const f = l => {
    //declaring and setting values to variables for es, p, c, and n 
    let es = 0, p = 0, c = 1, n = 0
    //beginning of while loop that will run code block within {} if c is less than or equal to l, l being the argument passed in when calling function f (because 55 was passed in when calling the function, the code block in the while loop will run)
    while (c <= l) {
        //new value for variable n is the sum of variable c+p
        n = c + p;
        //the [] puts the variables c,p into an array and changes/replaces the values of [c,p] to be the values for [n,c], which also changes the values set to variables n and c when they are on their own
        [c, p] = [n, c]
        //this line of code assigns a values to variable es based on the condition in (), gives an option for outputs: either var es is added to var c if condition is met, or var es is added to 0 if condition is not met 
        es += (c % 2 === 0) ? c : 0
    }
    //block of code is run until while condition is no longer met, aka until c is above the values of l (55)
    //return is returned only when while loop is done running, returns the final values set to es 
    return es
  }
  
  //console.log prints and calls function f while passing in argument of 55
  console.log(f(55))

//--------------------------------------------------------------------
//At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:
  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  console.log(f2(55))

  //Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//a more semantic name for this function would have been evenFibSum, but I would probably leave a comment saying "sum of even fibonacci numbers" Variable names make sense althought I would rename variable next to fibNum

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//Would definitely prefer working with the f2 function, just on first glance adding an else if or an else statement would be an easy addition. Also working with the semantic variable names makes it easier to understand at first glance

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//Semi-colon is necessary. Without it, we get error "SyntaxError: Invalid left-hand side in assignment"