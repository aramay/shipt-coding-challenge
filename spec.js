// spec.js

var IndexPage = require('./IndexPage')

describe('Shipt coding challenge', function() {

  var page = new IndexPage();

  beforeEach(function(){
    // browser.get('http://juliemr.github.io/protractor-demo/');
    page.get()
  })

  xit("should have a title", function(){
    // expect(browser.getTitle()).toEqual('Super Calculator');

    //use page object to interact with page
    expect(page.getTitle()).toEqual('Shipt Groceries');
  })

  xit("user should be able to login", function(){

    var email = element(by.model('login.username')).sendKeys("qatest@shipt.com")
    var password = element(by.model('login.password')).sendKeys("Sh1pt123!")

    element(by.id('start_shopping_login_button')).click()

    expect(element(by.css('[ng-click="viewModel.accountClick()"]')).isPresent()).toBe(true);

  })

  it("user should be able to search items with search feature", function(){

    var email = element(by.model('login.username')).sendKeys("qatest@shipt.com")
    var password = element(by.model('login.password')).sendKeys("Sh1pt123!")

    element(by.id('start_shopping_login_button')).click()

    element(by.model("search.searchQuery")).sendKeys("plum orga")

    element.all(by.repeater('product in searchResults'))
     
  })
  
  
  // it('should have add 2 and 2', function() {
    

  //   page.add(2,2)
  //   expect(page.getResult()).toEqual('4');
  //   // console.log(page.getResult())

  //   // element(by.model('first')).sendKeys(2)
  //   // element(by.model('second')).sendKeys(2)
  //   // element(by.id('gobutton')).click()
  //   // firstNum.sendKeys(2)
  //   // secondNum.sendKeys(2)
  //   // button.click()
    // expect(browser.getTitle()).toEqual('Super calculator');

  // })
  
  // it('should have a history', function(){

  //   page.add(1,2)
  //   expect(page.getHistory()).toEqual(1)
  //   // add(1, 2)
  //   // expect(history.count()).toEqual(1)
  //   // add(3, 2)
  //   // expect(history.count()).toEqual(2)


  // })
});