

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
