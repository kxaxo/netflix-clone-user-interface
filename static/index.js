const email_input = document.querySelector(".input-email input");
const label_email = document.querySelector(".input-email label");
const video = document.querySelector("video");
const question = document.querySelectorAll(".main-question");
const plus_cross = document.querySelector(".plus-cross-icon");
const main_answer = $(".main-answer")
const form_email = document.querySelector(".form-email")


form_email.addEventListener("click", () => {
    label_email.classList.add("active");
    email_input.focus();
});

email_input.addEventListener("blur", () => {
    if (email_input.value !== "") {
        label_email.classList.add("active");
    } else {
        label_email.classList.remove("active");
    }
});

question.forEach(each_question => {
    each_question.addEventListener("click", (event) => {
        answer_contain_slideup();
        if (event.target.classList.contains("q-netflix")) {
            if ($('.a-netflix').is(':hidden')) {
                $('.a-netflix').slideDown();
            } else {
                $('.a-netflix').slideUp();
            }
        } else if (event.target.classList.contains("q-cost-netflix")) {
            if ($('.a-cost-netflix').is(':hidden')) {
                $('.a-cost-netflix').slideDown();
            } else {
                $('.a-cost-netflix').slideUp();
            }
        } else if (event.target.classList.contains("q-watch")) {
            if ($('.a-watch').is(':hidden')) {
                $('.a-watch').slideDown();
            } else {
                $('.a-watch').slideUp();
            }
        } else if (event.target.classList.contains("q-cancle")) {
            if ($('.a-cancle').is(':hidden')) {
                $('.a-cancle').slideDown();
            } else {
                $('.a-cancle').slideUp();
            }
        } else if (event.target.classList.contains("q-watch-netflix")) {
            if ($('.a-watch-netflix').is(':hidden')) {
                $('.a-watch-netflix').slideDown();
            } else {
                $('.a-watch-netflix').slideUp();
            }
        } else if (event.target.classList.contains("q-watch-netflix")) {
            if ($('.a-watch-netflix').is(':hidden')) {
                $('.a-watch-netflix').slideDown();
            } else {
                $('.a-watch-netflix').slideUp();
            }
        } else if (event.target.classList.contains("q-kids")) {
            if ($('.a-kids').is(':hidden')) {
                $('.a-kids').slideDown();
            } else {
                $('.a-kids').slideUp();
            }
        }
    })
});

document.querySelector(".Q_A-content input").addEventListener("focus", () => {
    document.querySelector(".Q_A-content label").classList.add("active");
});

document.querySelector(".Q_A-content input").addEventListener("blur", () => {
    if (document.querySelector(".Q_A-content input").value !== "") {
        document.querySelector(".Q_A-content label").classList.add("active");
    } else {
        document.querySelector(".Q_A-content label").classList.remove("active");
    }
});


function answer_contain_slideup() {
    main_answer.slideUp();
}

answer_contain_slideup();