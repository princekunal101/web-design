let user_name = document.getElementById('ur-name');
let user_email = document.getElementById('ur-email');
let user_password = document.getElementById('ur-pswrd');
let user_cnf_password = document.getElementById('ur-cnf-pswrd');
let submit_btn = document.getElementById('ur-submit');
let form = document.getElementById('sign-up-frm');

form.action = 'welcome-page.html';
form.method = 'GET';



// for validating right or wrong password
function validate(event) {
  if (user_cnf_password.value != 0) {
    if (user_password.value === user_cnf_password.value) {
      //border color green
      user_cnf_password.style.borderBottomColor = "rgb(15, 157, 88)";

    } else {
      //border color red
      user_cnf_password.style.borderBottomColor = "rgb(219, 68, 55)";

      // on submit false to disable submit button
      submit_btn.addEventListener('click', (event) => {
        //desable the submit function
        if (user_password.value != user_cnf_password.value) {

          event.stopImmediatePropagation();
          event.preventDefault();

          alert("Please Enter your correct password!");
        }
      });
    }
  } else {
    // border color normal
    user_cnf_password.style.borderBottomColor = "";
  }
}

// out of focus and its right then its color normal
user_cnf_password.addEventListener("blur", function () {
  if (user_password.value === user_cnf_password.value)
    user_cnf_password.style.borderBottomColor = "";
});

// onfocus change it call the validate function
user_cnf_password.addEventListener("focus", function () {
  if (user_cnf_password.value != 0) validate();
});