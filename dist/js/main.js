// Form validation
const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('comment');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    // refresh page and sends form when every input is ok
    window.location = this.href;
})

function checkInputs() {
    // get the values from inputs
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();

    // check userName
    if (userNameValue === '' || userNameValue === null) {
        setError(userName, 'Name can\'t be blank!')
    } else {
        setSuccess(userName);
    }

    // check email
    if (emailValue === '') {
        setError(email, 'Email can\'t be blank');
    } else if (!isEmail) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }

    // check comment
    if (commentValue === '') {
        setError(comment, 'Comment can\'t be blank');
    } else {
        setSuccess(comment);
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