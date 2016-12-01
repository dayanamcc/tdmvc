//.getLogTypes(function(result) { console.log(result); })
//.getLog('browser', function(result) { console.log('Log: ', result); })
//work in chrome not fire fox -> .keys(browser.Keys.ENTER)
//.click('button[name=btnG]')

module.exports = {
  'test add TODO' : function (browser) {
    console.log('globals', browser.globals);
    browser
      .url('http://127.0.0.1:8080')
      .waitForElementVisible('body', 1000)
      .setValue('input[class=new-todo]', 'nightwatch')// 'input[type=text]'
      .waitForElementVisible('input[class=new-todo]', 1000)
      .sendKeys('input[class=new-todo]', browser.Keys.ENTER)
      .pause(1000)
      .assert.containsText('div[class="view"]', 'nightwatch')
  },
  'test complete TODO' : function (browser) {
    browser
      .assert.containsText('.todo-list', 'nightwatch')
      .click('input[type=checkbox]')
      .waitForElementVisible('li[class="todo completed"]', 1000)
  },
  'test uncomplete TODO' : function (browser) {
    browser
      .assert.containsText('.todo-list', 'nightwatch')
      .click('input[type=checkbox]')
      .waitForElementVisible('li[class="todo"]', 1000)
  },
  'test remove TODO' : function (browser) {
    browser
      .assert.containsText('.todo-list', 'nightwatch')
      .click('button[class=destroy]')
      .waitForElementVisible('li[class="todo"]', 1000)
      .end();
  }

};
