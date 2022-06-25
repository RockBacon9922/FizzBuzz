//create a for loop where you increment by 2 each time
for (var i = 1; i < 50; i += 1) {
  word = "";
  if (i % 3 === 0) {
    //add to string
    word += "Fizz";
  }
  if (i % 5 === 0) {
    //add to string
    word += "Buzz";
  }
  console.log(word || i);
}
