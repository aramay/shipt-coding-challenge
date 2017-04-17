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

    page.login()

    expect(element(by.css('[ng-click="viewModel.accountClick()"]')).isPresent()).toBe(true);

  })

  xit("user should be able to search items with search feature", function(){

    var email = element(by.model('login.username')).sendKeys("qatest@shipt.com")
    var password = element(by.model('login.password')).sendKeys("Sh1pt123!")

    element(by.id('start_shopping_login_button')).click()

    //search for item
    element(by.model("search.searchQuery")).sendKeys("plum orga")

    //get item text(title)
    var itemText = element.all(by.repeater('product in searchResults')).get(0).getText()

    // browser.wait(EC.presenceOf(elm), 10000);
    
    // var item = element.all(by.repeater('product in searchResults')).get(0).click()

    //find first item in search
    var firstItem = element.all(by.repeater('product in searchResults')).first()

    //add item to cart
    firstItem.element(by.css('[ng-click="addItem(product)"]')).click()

    //click cart link
    element(by.css('[ng-click="cartClick()"]')).click()

    //get text of item in cart
    var itemInCart = element(by.css('[ng-click="clickCartItem(cartItem)"]')).getText()

    // match item in cart to item searched for
    expect(itemText).toContain(itemInCart)
     
  })

  it("user should be able to search items with category menu", function(){

    //login user
    page.login()
    //click menu tabs
    page.getMenuTabLink()
    //click item in category
    page.getMenuCategoryItem()

    //get item text
    var itemText = page.getTextOfItemInMenuCategory()
    //find first product in category
    var productInMenuCategory = page.getProductinMenuCategory()

    //add item to cart
    productInMenuCategory.element(by.css('[ng-click="addItem(product)"]')).click()
    // page.addItemToCart(productInMenuCategory)

    //click cart link
    // element(by.css('[ng-click="cartClick()"]')).click()
    page.clickCartLink()

    //get text of item in cart
    var itemInCart = element(by.css('[ng-click="clickCartItem(cartItem)"]')).getText()

    // match item in cart to item searched for
    expect(itemText).toContain(itemInCart)
    
  })


});