function IndexPage () {
  this.email = element(by.model('login.username'))
  this.password = element(by.model('login.password'))
  this.loginButton = element(by.id('start_shopping_login_button'))

  this.searchTextBox = element(by.model("search.searchQuery"))

  this.productInSearchResult = element.all(by.repeater('product in searchResults'))

  this.menuTabLink = element(by.css('[ng-click="viewModel.shopCategories($event)"]'))

  this.menuCategoryList = element.all(by.repeater('category in vm.categories'))

  this.itemText = element.all(by.repeater('product in products'))

  this.productInMenuCategory = element.all(by.repeater('product in products'))

  this.cartLink = element(by.css('[ng-click="cartClick()"]'))


  this.get = function () {
    // browser.get('https://www.shipt.com/main/')
    browser.get('https://shop.shipt.com/#/app/home')
  }

  this.login = function () {
    this.get()
    this.email.sendKeys('qatest@shipt.com')
    this.password.sendKeys('Sh1pt123!')

    this.loginButton.click()
  }
  //search for product
  this.searchItem = function(args){
    this.searchTextBox.sendKeys(args)
  }

  this.getProductNameSearchResult = function(){
    return this.productInSearchResult.get(0).getText()
  }

  // return menu items links
  this.getMenuTabLink = function () {
    return this.menuTabLink.click()
  }

  // return first item in menu category
  this.getMenuCategoryItem = function () {
    return this.menuCategoryList.first().click()
  }

  // return text of first item
  this.getTextOfItemInMenuCategory = function (){
    return this.itemText.first().getText()
  }

  // return item in product category
  this.getProductinMenuCategory = function (){
    return this.productInMenuCategory.first()
  }

  this.clickCartLink = function (){
    return this.cartLink.click()
  }

  //add item to cart
  // this.addItemToCart = function(args){
  //   args.this.cart.click()
  // }

  this.getTitle = function () {
    return browser.getTitle()
  }

  
}

module.exports = IndexPage
