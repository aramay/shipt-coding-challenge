function IndexPage () {

  this.email = element(by.model('login.username'))
    
  this.password = element(by.model('login.password'))

  this.loginButton = element(by.id('start_shopping_login_button'))

  this.result = element(by.binding('latest'))
  this.history = element.all(by.repeater('result in memory'))

  this.get = function () {
    // browser.get('https://www.shipt.com/main/')
    browser.get('https://shop.shipt.com/#/app/home')
  }

  this.login = function(){
    this.get()
    this.email.sendKeys("qatest@shipt.com")
    this.password.sendKeys("Sh1pt123!")

    this.loginButton.click()

  }

  this.getTitle = function () {
    return browser.getTitle()
  }

  this.clickButton = function () {
    this.button.click()
  }

  this.add = function (a, b) {
    this.firstNum.sendKeys(a)
    this.secondNum.sendKeys(b)
    // button.click()
    this.clickButton()
  }

  this.getResult = function () {
    // console.log("result ", this.result)
    return this.result.getText()
  }

  this.getHistory = function () {
    return this.history.count()
  }
}

module.exports = IndexPage
