import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | hello world', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /hello-world', async function (assert) {
    await visit('/hello-world');

    assert.equal(currentURL(), '/hello-world');
  });
});
