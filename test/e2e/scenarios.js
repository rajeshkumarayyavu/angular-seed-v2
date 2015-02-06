'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('Single page blogger E2E test', function() {
  browser.get('/');
  protractor = protractor.getInstance();
  it('Should hava four posts', function() {
    var posts = element.all(by.repeater('post in posts'));
    expect(posts.count()).toBe(4);
  });
  it('should redirect to individual post', function() {
    var posts = element.all(by.repeater('post in posts'));
    posts.first().then(function(postElem) {
      postElem.findElement(by.tagName('a')).then(function(a) {
        a.click(); //click the title link of 1st post
        expect(protractor.getCurrentUrl()).toMatch('/posts/1/simple-title1');
      });
    });
  });

});
