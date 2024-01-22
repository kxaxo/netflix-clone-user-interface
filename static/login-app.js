const input_mail_form = document.querySelector(".email-phone-form");
const input_pass_form = document.querySelector(".password-form");
const input_mail = document.querySelector(".email-phone-form input");
const input_pass = document.querySelector(".password-form input");
const label_mail = document.querySelector(".email-phone-form p")
const label_pass = document.querySelector(".password-form p")

input_mail_form.addEventListener("click", () => {
    $(".email-phone-form p").addClass("active-login");
    input_mail.focus();
});

input_mail.addEventListener("blur", () => {
    if (input_mail.value !== "") {
        label_mail.classList.add("active-login");
    } else {
        label_mail.classList.remove("active-login");
    }
});

input_pass_form.addEventListener("click", () => {
    $(".password-form p").addClass("active-login");
    input_pass.focus();
});

input_pass.addEventListener("blur", () => {
    if (input_pass.value !== "") {
        label_pass.classList.add("active-login");
    } else {
        label_pass.classList.remove("active-login");
    }
});