const submit = document.querySelector(".subscribe")
const error = document.querySelector(".error")
const form = document.querySelector("form")
const input = document.querySelector("input")
const main = document.querySelector(".main")
const success = document.querySelector(".success")
const dismiss = document.querySelector(".dismiss")

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};

submit.addEventListener("click", e => {
    e.preventDefault()

    const inputValue = input.value.trim()

    if (!isEmail(inputValue)) {
        error.style.display = "block"
        input.style.backgroundColor = "rgb(251, 233, 231)"
        input.style.borderColor = "var(--Tomato)"
        input.style.borderWidth = "1px"
        input.style.color = "var(--Tomato)"
    } else {
        error.style.display = "none"
        input.style.backgroundColor = "white"
        input.style.borderColor = "var(--Grey)"
        input.style.borderWidth = "0.5px"
        input.style.color = "var(--Charcoal-Grey)"
        main.style.display = "none"
        success.style.display = "flex"
    }
});

dismiss.addEventListener('click', e => {
    e.preventDefault()

    success.style.display = "none"
    main.style.display = "flex"

    input.value = ""
})


