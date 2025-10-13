//validation code

var form = document.querySelector("#form");
var fname = document.querySelector("#firstname");
var lname = document.querySelector("#lastname");
var password = document.querySelector("#password");
var email = document.querySelector("#email");
var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var message = $(".error-msg");

form.addEventListener("submit", (e) => {
  var check = pattern.test(email.value);
  if (
    email.value === "" ||
    fname.value === "" ||
    lname.value === "" ||
    password.value === ""
  ) {
    message.css("display", "block");
    message.text("feilds cannot be empty");
    console.log("feilds are empty");
  } else if (!check) {
    message.css("display", "block");
    message.css("color", "red");
    message.text("Please provide a valid email address");
  } else {
    message.css("color", "green");
    message.text("The form has been submitted Successfully");
    console.log("email matches format");
  }
  e.preventDefault();
});
