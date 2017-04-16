function IndexPage(){

  this.firstNum = element(by.model('first'))
  this.secondNum = element(by.model('second'))
  this.button = element(by.id('gobutton'))
  this.result = element(by.binding('latest'))
  this.history = element.all(by.repeater('result in memory'))


  this.get = function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
  };

  this.getTitle = function(){
    return browser.getTitle()
  };

  this.clickButton = function(){
    this.button.click()
  };

  this.add = function(a, b){
    this.firstNum.sendKeys(a)
    this.secondNum.sendKeys(b)
    // button.click()
    this.clickButton()
  };

  this.getResult = function(){
    // console.log("result ", this.result)
    return this.result.getText()
  };

  this.getHistory = function(){
    return this.history.count()
  }

}

module.exports = IndexPage;