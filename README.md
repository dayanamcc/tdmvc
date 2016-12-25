

npm install

npm start

google-chrome http://127.0.0.1:8080


## test

npm test
npm test -- -e chrome


## -----------------------------------------------------------
### Atom
atom-nightwatchjs-snippets

### todomvc code
git clone https://github.com/tastejs/todomvc temp-tdmvc --depth 1 --bare
cd temp-tdmvc
mkdir ../tdmvc
git --work-tree=../tdmvc checkout HEAD -- examples/vue
cd ../tdmvc
sudo rm -r ../temp-tdmvc

####runing the code manually
npm install -g http-server
http-server examples/vue


### how to set driver chrome
nightwatch.json
// "selenium" : { "start_process" : true,
npm install chromedriver
// set path selenium     "server_path" : "./node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar",
// set path chrome driver    "webdriver.chrome.driver" : "./node_modules/chromedriver/bin/chromedriver"


## firefox
npm install geckodriver


## half manual instaall selenium
npm install -g nightwatch
nightwatch.json
// "selenium" : {
//  "start_process" : false,
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone install --drivers.chrome.version=2.15 --drivers.chrome.baseURL=https://chromedriver.storage.googleapis.com
selenium-standalone start


selenium-standalone install

---
selenium install:
from: https://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.1.jar
to: /Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar
---
chrome install:
from: https://chromedriver.storage.googleapis.com/2.25/chromedriver_mac64.zip
to: /Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver
---
firefox install:
from: https://github.com/mozilla/geckodriver/releases/download/v0.10.0/geckodriver-v0.10.0-macos.tar.gz
to: /Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/geckodriver/0.10.0-x64-geckodriver


selenium-standalone install --version=3.0.1 --baseURL=https://selenium-release.storage.googleapis.com
---
selenium install:
from: https://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar
to: /Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/selenium-server/3.0.1-server.jar
---
chrome install:
from: https://chromedriver.storage.googleapis.com/2.25/chromedriver_mac64.zip
to: /Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver
---
firefox install:
from: https://github.com/mozilla/geckodriver/releases/download/v0.10.0/geckodriver-v0.10.0-macos.tar.gz
to: /Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/geckodriver/0.10.0-x64-geckodriver
---
File from https://chromedriver.storage.googleapis.com/2.25/chromedriver_mac64.zip has already been downloaded
---
File from https://github.com/mozilla/geckodriver/releases/download/v0.10.0/geckodriver-v0.10.0-macos.tar.gz has already been downloaded




selenium-standalone install --drivers.chrome.version=2.6 --drivers.chrome.baseURL=https://chromedriver.storage.googleapis.com


java \
 -Dwebdriver.chrome.driver=/Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver \
 -Dwebdriver.gecko.driver=/Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/geckodriver/0.10.0-x64-geckodriver \
 -Dtimeout=90000 -DsessionTimeout=90000 \
 -jar /Users/dayanacabrera/.nvm/versions/node/v7.2.0/lib/node_modules/selenium-standalone/.selenium/selenium-server/3.0.1-server.jar
