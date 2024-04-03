const submitBtn = document.querySelector('.submit-btn button');
const passwordInputs = document.querySelectorAll('input[type="password"]')
const passwordAlerts = document.querySelectorAll('.password')

submitBtn.addEventListener('click', passwordAlert);

for (let passwordInput of passwordInputs) {
    passwordInput.addEventListener('change', passwordAlert);
}

function passwordAlert() {
    if (passwordInputs[0].value !== passwordInputs[1].value) {
        for (let password of passwordAlerts) {
            password.textContent = "Please match passwords";
            passwordInputs[0].style.border = "1px solid red";
            passwordInputs[1].style.border = "1px solid red";
        }
    } else {
        for (let password of passwordAlerts) {
            password.textContent = ""
            passwordInputs[0].style.border = "1px solid #E5E7EB";
            passwordInputs[1].style.border = "1px solid #E5E7EB";


        }
    }
}