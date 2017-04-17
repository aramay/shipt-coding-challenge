// spec.js

var IndexPage = require('./IndexPage')

describe('Shipt coding challenge', function() {

  var page = new IndexPage();

  beforeEach(function(){
    page.get()
  })

  it("should have a page title", function(){

    //use page object to interact with page
    expect(page.getTitle()).toEqual('Shipt Groceries');
  })

  it("user should be able to login", function(){

    page.login()

    expect(element(by.css('[ng-click="viewModel.accountClick()"]')).isPresent()).toBe(true);

  })

  it("user should be able to search items with search feature", function(){

    //search for item
    page.searchItem("plum orga")

    //get item text(title)
    var itemText = page.getProductNameSearchResult()

    //find first item in search
    var firstItem = element.all(by.repeater('product in searchResults')).first()

    //add item to cart
    firstItem.element(by.css('[ng-click="addItem(product)"]')).click()

    //click cart link
    page.clickCartLink()

    //get text of item in cart
    var itemInCart = element(by.css('[ng-click="clickCartItem(cartItem)"]')).getText()

    // match item in cart to item searched for
    expect(itemText).toContain(itemInCart)
     
  })

  it("user should be able to search items with category menu", function(){

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

    //click cart link
    page.clickCartLink()

    //get text of item in cart
    var itemInCart = element(by.css('[ng-click="clickCartItem(cartItem)"]')).getText()

    // match item in cart to item searched for
    expect(itemText).toContain(itemInCart)
    
  })


});