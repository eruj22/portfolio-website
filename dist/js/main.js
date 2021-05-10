// Form validation
const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('comment');

let i = 0;

form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault();
    if (i < 3) {
        checkInputs();
    } else {
        let status = document.getElementById("my-form-status");
        let data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
        }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
}

function checkInputs() {
    // get the values from inputs
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();
    i = 0;

    // check userName
    if (userNameValue === '' || userNameValue === null) {
        setError(userName, 'Name can\'t be blank!')
    } else {
        setSuccess(userName);
        i += 1;
    }

    // check email
    if (emailValue === '') {
        setError(email, 'Email can\'t be blank');
    } else if (!isEmail) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
        i += 1;
    }

    // check comment
    if (commentValue === '') {
        setError(comment, 'Comment can\'t be blank');
    } else {
        setSuccess(comment);
        i += 1;
    }
}

function setSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};