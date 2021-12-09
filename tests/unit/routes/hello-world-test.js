import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hello-world', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:hello-world');
    assert.ok(route);
  });
});
