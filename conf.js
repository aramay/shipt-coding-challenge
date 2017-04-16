// conf.js
var browsers = {
  firefox: {
    name: 'Firefox',
    browserName: "firefox" 
  },
  chrome: {
    name: 'Chrome',
    browserName: "chrome" 
  },
  ios: {
    name: 'iOS 7 - iPad',
    platformName: 'iOS',
    platformVersion: '7.1',
    deviceName: 'IPad Simulator',
    browserName: 'safari',
    orientation: 'landscape'
  }
}

var config =  {

  // capabilities: {
  //   name: 'Chrome',
  //   browserName: "chrome"
  // },

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./spec.js'],
  
  
}

console.log("process argv ", process.argv)

if(process.argv[3] === '--chrome'){
  console.log("running chrome capabilities")
  

  config.capabilities = browsers.chrome
}
else if(process.argv[3] === 'ios'){
  config.seleniumAddress = 'http://localhost:4723/wd/hub',
  config.capabilities = browsers.ios
}
else{
  console.log("running chrome multi capabilities")
  config.multiCapabilities = [
    browsers.chrome,
    browsers.firefox
  ]
}


console.log("running chrome capabilities ", exports.config)

exports.config = config