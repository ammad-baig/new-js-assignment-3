// FaceBook SignUp Page

var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var email = document.getElementById("email");
var pass = document.getElementById("setPassword");
var date = document.getElementById("dateSelected");
var month = document.getElementById("monSelected");
var year = document.getElementById("yearSelected");
var gender = document.querySelector("input[type= radio]:checked");

function register() {
  console.log("First Name: " + fName.value);
  console.log("Last Name: " + lName.value);
  console.log("Email: " + email.value);
  console.log("Password: " + pass.value);
  console.log("Date of Birth: " + date.value, month.value, year.value);
  console.log("Gender: " + gender.value);
}
