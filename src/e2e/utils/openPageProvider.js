let openPageProvider = function() {
    this.openPage = () => {
        browser.get('/');
    };
};

module.exports = openPageProvider;