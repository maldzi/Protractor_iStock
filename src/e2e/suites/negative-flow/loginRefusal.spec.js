const LandingPage = require('../../pages/landingPage');
const LoginPage = require('../../pages/loginPage');
const LoginLogoutProvider = require('../../utils/loginLogoutProvider');
const OpenPageProvider = require('../../utils/openPageProvider');

describe("Verify possibility of login...", () => {
    let landingPage = new LandingPage();
    let loginPage = new LoginPage();
    let loginLogoutProvider = new LoginLogoutProvider();
    let openPageProvider = new OpenPageProvider();

    it("should not be able to login with incorrect username and password", () => {
        openPageProvider.openPage();
        loginLogoutProvider.goToLoginPage();
        loginLogoutProvider.fillUserData(browser.params.incorrectUsername, browser.params.incorrectPassword);
        loginLogoutProvider.login();
        expect(loginPage.invalidInputPopup.getText()).toContain("Sprawdź, czy dane");
    });

    it("should not be able to login with no data", () => {
        loginLogoutProvider.clearInputFields();
        loginLogoutProvider.login();
        expect(landingPage.header.isPresent()).toBe(false);
    });

    it('should not be able to login with inverted data', () => {
        loginLogoutProvider.clearInputFields();
        loginLogoutProvider.fillUserData(browser.params.password, browser.params.username);
        loginLogoutProvider.login();
        expect(landingPage.header.isPresent()).toBe(false);
    });


});