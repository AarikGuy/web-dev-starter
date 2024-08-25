import {sayHello} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });

    QUnit.test('makes sure it returns string', function(assert) {
        var result = sayHello();
        assert.equal(typeof result, 'string', 'This should be a string');
    });
    
});
