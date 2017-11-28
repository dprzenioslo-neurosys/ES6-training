

var defaultError = {
    error: "Default: you failed, probably again!",
};


var customError = {
    error: "Custom: you failed, probably again!",
};

var showError = function () {
    console.log(`showing ::${this.error}::`);
};

showError.call(defaultError);
showError.call(customError);
