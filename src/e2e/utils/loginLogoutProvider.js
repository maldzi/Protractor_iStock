let LandingPage = require('../pages/landingPage');
let LoginPage = require('../pages/loginPage');
let DashboardPage = require('../pages/dashboardPage');

let LoginLogoutProvider = function () {
    this.landingPage = new LandingPage();
    this.loginPage = new LoginPage();
    this.dashboardPage = new DashboardPage();

    this.goToLoginPage = () => {
        this.landingPage.loginButton.click();
    };

    this.clearInputFields = () => {
        this.loginPage.usernameInput.clear();
        this.loginPage.passwordInput.clear();
    };

    this.fillUserData = (username, password) => {
        this.loginPage.usernameInput.sendKeys(username);
        this.loginPage.passwordInput.sendKeys(password);
    };

    this.login = () => {   
        this.loginPage.signInButton.click();
    };

    this.logout = () => {
        this.dashboardPage.accountButton.click();
        this.dashboardPage.signOutButton.click();
    };
};

module.exports = LoginLogoutProvider;