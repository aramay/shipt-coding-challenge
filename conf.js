// conf.js
var browsers = {
  
  chrome: {
    name: 'Chrome',
    browserName: "chrome" 
  }
  
}

var config =  {

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./spec.js']

  // onPrepare: function() {
  //   // browser.driver.get(env.baseUrl + '/ng1/login.html');
  //   browser.driver.get('https://shop.shipt.com/#/app/home');

  //   browser.driver.findElement(by.id('username')).sendKeys('Jane');
  //   browser.driver.findElement(by.id('password')).sendKeys('1234');
  //   browser.driver.findElement(by.id('clickme')).click();

  //   // Login takes some time, so wait until it's done.
  //   // For the test app's login, we know it's done when it redirects to
  //   // index.html.
  //   return browser.driver.wait(function() {
  //     return browser.driver.getCurrentUrl().then(function(url) {
  //       return /index/.test(url);
  //     });
  //   }, 10000);
  // }
  
}

console.log("process argv ", process.argv)

if(process.argv[3] === '--chrome'){
  console.log("running chrome capabilities")
  

  config.capabilities = browsers.chrome
}
// else if(process.argv[3] === 'ios'){
//   config.seleniumAddress = 'http://localhost:4723/wd/hub',
//   config.capabilities = browsers.ios
// }
// else{
//   console.log("running chrome multi capabilities")
//   config.multiCapabilities = [
//     browsers.chrome,
//     browsers.firefox
//   ]
// }



exports.config = config
console.log("running chrome capabilities ", exports.config)