describe('������� � ����', function() {
    beforeAll(function(done) {
        browser.url("https://www.google.com.ua").waitForVisible('.gsst_a');
    });
    it('���� ��������', function(done) {

        browser.url("https://www.google.com.ua/imghp?hl=uk&tab=wi")
             .waitForExist("#hplogo", 2000);
			// .waitForText("Gmail", 2000);
        browser.call(done);
    });

});