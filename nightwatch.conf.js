module.exports = {
  "src_folders" : ["test"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : false,
    "server_path" : "/Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/selenium-server/3.0.1-server.jar",
    "log_path" : "",
    "host": "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.gecko.driver" : "/Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/geckodriver/0.10.0-x64-geckodriver",
      "webdriver.chrome.driver" : "/Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.23-x64-chromedriver",
      //"webdriver.safari.driver" : "./node_modules/geckodriver/bin/geckodriver",
      //"webdriver.chrome.driver" : "/Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver",
      //"webdriver.gecko.driver" : "/Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/geckodriver/0.10.0-x64-geckodriver",
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      //globals: require('./test/data/default')
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
      }
    },
    // "desiredCapabilities" : {
    //   "browserName" : "safari",
    //   "javascriptEnabled" : true,
    //   "acceptSslCerts" : true
    // }


  }

}
