const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-no");
const checkButton = document.querySelector(".check-btn");
const resultBox = document.querySelector(".result");

function calcSumOfDate(dob) {
  const result = dob
    .replaceAll("-", "") //if we want to replace all -, use replaceALL instead of mere replace
    .split("")
    .reduce((arr, curr) => {
      return arr + Number(curr); //Forgot to convert curr into Number and forgot to add to return in reduce's arrow function
    }, 0);
  return result;

  // console.log(result);
}
// console.log(dob);
checkButton.addEventListener("click", function () {
  const dateOfBirth = calcSumOfDate(birthDate.value);
  const numberInput = Number(luckyNum.value);

  if (dateOfBirth !== 0) {
    if (numberInput < 0 || numberInput === 0) {
      resultBox.value = "Please enter a valid positive number!";
    } else {
      if (dateOfBirth % numberInput === 0) {
        resultBox.value = `Your Birthdate is lucky 🥳`;
      } else {
        resultBox.value = `Your birthdate is not lucky 🙁`;
      }
    }
  } else {
    resultBox.value = `Please enter a valid date!`;
  }
});
