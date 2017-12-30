let LoginPage = function() {
    this.usernameInput = element(by.model("new_session['username']"));
    this.passwordInput = element(by.model("new_session['password']"));
    this.signInButton = element(by.id("sign_in"));

    this.invalidInputPopup = element(by.className("alert_box"));
}

module.exports =  LoginPage;