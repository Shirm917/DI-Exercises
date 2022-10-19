// Exercise 2

// Write as comments the steps of the resolution of this piece of code
// Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
  case 3: // checking if a = 3 it doesn't so we continue to the next one
    alert( 'Too small' );
    break;
  case 4: // checking if a = 4 it is so we execute this code and the other cases aren't evalulated 
    alert( 'Exactly!' );
    break;
  case 5: 
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

// result will be "Exactly!"

// Exercise 3 (same instructions)

// let a = 2 + 2; already declared in exercise 2

switch (a) {
  case 4: // checking if a = 4 it is so we execute this code and the other cases aren't evalulated 
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// result will be "Right!"