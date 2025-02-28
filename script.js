// selectors
const buttonSelector = document.querySelector('#button');
const inputSelector = document.querySelector('#input');
const answerSelector = document.querySelector('#answer');
const errorSelector = document.querySelector('#error');

// api
const API_ENDPOINT = 'https://yesno.wtf/api';

// flags
let isRequestInProgress = false;

// set request state
const setIsRequestInProgress = value => {
    isRequestInProgress = value;
};

// disables/ enables the button based on the request
const setDisableButtonState = isDisabling => {
    if (isDisabling) {
        buttonSelector.setAttribute('disabled', 'disabled');
    } else {
        buttonSelector.removeAttribute('disabled');
    }
};

// clears the response and resets input field after delay
const cleanupResponse = () => {
    setTimeout(() => {
        answerSelector.innerHTML = '';
        inputSelector.value = '';
        setIsRequestInProgress(false);
        setDisableButtonState(false);
    }, 3000);
};

// displays the API response and calls cleanupResponse
const showAnswer = answer => {
    setTimeout(() => {
        answerSelector.innerHTML = `<img src=\"${answer}\" width=\"600px\" height=\"400px\">`;
        cleanupResponse();
    }, 3000);
};

// fetches the answer from the API and calls showAnswer
const fetchAnswer = () => {
    setIsRequestInProgress(true);

    setDisableButtonState(true);

    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => showAnswer(data.image));
};

// displays an error message if the input field is empty
const showError = () => {
    errorSelector.innerHTML = 'Write Something First...';

    setTimeout(() => {
        errorSelector.innerHTML = '';
    }, 3000);
};

// validates the input and initiates the API request
const getAnswer = () => {
    if (isRequestInProgress) return;
    if (!inputSelector.value) return showError();

    fetchAnswer();
};

// handles the enter key press to trigger getAnswer
const handleKeyEnter = e => {
    if (e.keyCode === 13) {
        getAnswer();
    }
};

buttonSelector.addEventListener('click', getAnswer);