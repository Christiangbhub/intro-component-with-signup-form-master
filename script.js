//validation code

var form = document.querySelector("#form");
var fname = document.querySelector("#firstname");
var lname = document.querySelector("#lastname");
var password = document.querySelector("#password");
var email = document.querySelector("#email");
var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//error messages variables

var message = $("#error-msg");
var message_fname = $("#error-msg-fname");
var message_lname = $("#error-msg-lname");
var message_email = $("#error-msg-email");
var message_pass = $("#error-msg-pass");

//error icons
var icons = $(".error-icon");
var fn_icon = $(".icon-fname");
var ln_icon = $(".icon-lname");
var email_icon = $(".icon-email");
var pass_icon = $(".icon-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent form submission before validation

  var check = pattern.test(email.value);
  var isValid = true;
  ///check each input individually
  if (fname.value.trim() === "") {
    fn_icon.css("display", "block");
    message_fname.css("display", "block");
    message_fname.text("Firstname cannot be empty");
    isValid = false;
  } else {
    fn_icon.css("display", "none");
    message_fname.css("display", "none");
  }
  if (lname.value.trim() === "") {
    ln_icon.css("display", "block");
    message_lname.css("display", "block");
    message_lname.text("Lastname cannot be empty");
    isValid = false;
  } else {
    ln_icon.css("display", "none");
    message_lname.css("display", "none");
  }
  if (email.value.trim() === "") {
    email_icon.css("display", "block");
    message_email.css("display", "block");
    message_email.text("Email cannot be empty");
    isValid = false;
  } else if (!check) {
    email_icon.css("display", "block");
    message_email.css("display", "block");
    message_email.text("Email does not match format");
    isValid = false;
  } else {
    email_icon.css("display", "none");
    message_email.css("display", "none");
  }

  if (password.value.trim() === "") {
    pass_icon.css("display", "block");
    message_pass.css("display", "block");
    message_pass.text("Password cannot be empty");
    isValid = false;
  } else if (password.value.trim().length <= 5) {
    message_pass.css("display", "block");
    message_pass.text("Password is too short");
    isValid = false;
  } else {
    pass_icon.css("display", "none");
    message_pass.css("display", "none");
  }

  if (isValid) {
    message.css("display", "block");
    message.text("The form has been submitted Successfully");
    console.log("email matches format");
    fname.value = "";
    lname.value = "";
    email.value = "";
    password.value = "";
  }
});
