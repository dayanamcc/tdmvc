module.exports = {
  "src_folders" : ["test"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar",
    "log_path" : "",
    "host": "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./node_modules/chromedriver/bin/chromedriver",
      "webdriver.gecko.driver" : "./node_modules/geckodriver/bin/geckodriver",
      //"webdriver.safari.driver" : "./node_modules/geckodriver/bin/geckodriver",
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
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
        // javascriptEnabled: true
      }
    },
    // "desiredCapabilities" : {
    //   "browserName" : "safari",
    //   "javascriptEnabled" : true,
    //   "acceptSslCerts" : true
    // }


  }

}
