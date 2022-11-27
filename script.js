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
  console.log(birthDate.value);
  if (dateOfBirth % Number(luckyNum.value) === 0) {
    resultBox.value = `Your Birthdate is lucky 🥳`;
  } else {
    resultBox.value = `Your birthdate is not lucky 🙁`;
  }
});
