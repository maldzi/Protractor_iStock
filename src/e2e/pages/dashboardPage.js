let DashboardPage = function() {
    
    this.accountButton = element.all(by.xpath("//*[@id='site-header']/div[2]/nav[3]/div/ul/li[5]")).first();
    this.signOutButton = element(by.id("hypSignOut"));
    //this.pricesButton = element(by.className("pricing"));
};

module.exports = DashboardPage;