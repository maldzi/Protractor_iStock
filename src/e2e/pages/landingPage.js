let LandingPage = function () {

    this.header = element.all(by.xpath('/html/body/div[1]/section/div/section[2]/div[1]/section[1]/h1')).first();
    this.loginButton = element.all(by.xpath('//*[@id="site-header"]/div[2]/nav[3]/div/ul/li[5]/a')).first();
};

module.exports = LandingPage;