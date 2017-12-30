const LandingPage = require('../../pages/landingPage');
const LoginPage = require('../../pages/loginPage');
const DashboardPage = require('../../pages/dashboardPage');
const LoginLogoutProvider = require('../../utils/loginLogoutProvider');
const OpenPageProvider = require('../../utils/openPageProvider');

describe("Verify that login and logout are possible...", () => {
    let landingPage = new LandingPage();
    let loginPage = new LoginPage();
    let dashboardPage = new DashboardPage();
    let loginLogoutProvider = new LoginLogoutProvider();
    let openPageProvider = new OpenPageProvider();

    it("should be on the landing page", () => {
        openPageProvider.openPage();
        expect(landingPage.header.getText()).toContain("Mniej szukania");
    });

    it("should be able to enter login page", () => {
        loginLogoutProvider.goToLoginPage();
        expect(loginPage.usernameInput.isDisplayed()).toBe(true);
    });

    it("should be able to enter valid user data and login", () => {
        loginLogoutProvider.fillUserData(browser.params.username, browser.params.password);
        loginLogoutProvider.login();
        expect(dashboardPage.accountButton.isDisplayed()).toBe(true);
    });

    it("should be able to logout", () => {
        loginLogoutProvider.logout();
        expect(landingPage.loginButton.isDisplayed()).toBe(true);
    });

});