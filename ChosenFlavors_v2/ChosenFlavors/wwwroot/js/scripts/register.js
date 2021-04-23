// Get register <form> element from DOM.
var form = document.getElementById("registerform");
var submitButton = form.querySelector("button");

// Add client validation by creating method to add class on submission attempt
const formSubmissionAttempted = function () {
    form.classList.add("submission-attempted");
};

// Create event listener for submit button
const addSubmitClickEventListener = function () {
    submitButton.addEventListener("click", formSubmissionAttempted, false);
};

addSubmitClickEventListener();
