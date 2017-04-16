// spec.js

var IndexPage = require('./IndexPage')

describe('Protractor Demo App', function() {

  var page = new IndexPage();

  beforeEach(function(){
    // browser.get('http://juliemr.github.io/protractor-demo/');
    page.get()
  })

  it("should have a title", function(){
    // expect(browser.getTitle()).toEqual('Super Calculator');

    //use page object to interact with page
    expect(page.getTitle()).toEqual('Super Calculator');
  })
  
  
  it('should have add 2 and 2', function() {
    

    // console.log(page.getResult())
    page.add(2,2)
    expect(page.getResult()).toEqual('4');

    // element(by.model('first')).sendKeys(2)
    // element(by.model('second')).sendKeys(2)
    // element(by.id('gobutton')).click()
    // firstNum.sendKeys(2)
    // secondNum.sendKeys(2)
    // button.click()
    // expect(browser.getTitle()).toEqual('Super calculator');

  })
  
  it('should have a history', function(){

    page.add(1,2)
    expect(page.getHistory()).toEqual(1)
    // add(1, 2)
    // expect(history.count()).toEqual(1)
    // add(3, 2)
    // expect(history.count()).toEqual(2)


  })
});