const submitBtn = document.querySelector('.submit-btn button');
const passwordInputs = document.querySelectorAll('input[type="password"]')
const passwordAlerts = document.querySelectorAll('.password')

submitBtn.addEventListener('click', () => {
    if (passwordInputs[0].value !== passwordInputs[1].value) {
        for (let password of passwordAlerts) {
            password.textContent = "Please match passwords"
        }
    } else {
        for (let password of passwordAlerts) {
            password.textContent = ""
        }
    }
})