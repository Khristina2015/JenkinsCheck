describe('Проверка на селекторы ID', function() {
    beforeAll(function(done) {
        browser.url("https://www.google.com.ua").waitForVisible('#_eEe');
    });


    it('', function(done) {

        browser.url("https://mail.google.com/mail/?tab=wm")
            // .waitForExist("span=Gmail", 2000);
			browser.waitForText("Gmail", 2000);
        browser.call(done);
    });

});