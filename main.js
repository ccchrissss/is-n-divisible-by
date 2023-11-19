function isDivisible(){

  if (arguments.length === 1) return true
  
  let answer

  for (let i = 1; i < arguments.length; i++) {
    
    if (arguments[0] % arguments[i] === 0) { answer = true }
    else return false
  }

  return answer
}

console.log(isDivisible(100, 4, 5, 6))

console.log(isDivisible(1))


// parameters: n, a, b, ...    // numbers
// return boolean
// e.g. isDivisible(100, 4, 5, 6)
// results in false

// declare a variable called answer
// loop through arguments array starting at i = 1
  // if arguments[0] % arguments[i] === 0 then reassign answer to true
  // else return false
// end loop
// return answer