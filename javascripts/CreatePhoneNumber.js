function createPhoneNumber(numbers){
  let arr = ["("];

  for(let i = 0; i < numbers.length; i++){
    // before index 3 add ")"
    if(i === 3)
    arr.push(") ");
    // before index 6 add "-"
    else if(i === 6)
    arr.push("-");

    // add the numbers
    arr.push(numbers[i]);
  }

  // return array without commas
  return arr.join("");
}

function testing(){
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
}