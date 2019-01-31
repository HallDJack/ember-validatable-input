import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, findAll, render, blur, focus } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | validatable-input', function(hooks) {
  setupRenderingTest(hooks);

  test('when there are no errors it shows no errors on focus out', async function(assert) {
    await render(hbs`{{validatable-input errors=errors}}`);
    await focus('.ember-validatable-input__inputs input');
    await blur('.ember-validatable-input__inputs input');

    assert.equal(find('.ember-validatable-input__error'), null);
  });

  test('when errors exist it shows errors on focus out', async function(assert) {
    this.set('errors', 'is too short');
    await render(hbs`{{validatable-input errors=errors}}`);
    await focus('.ember-validatable-input__inputs input');
    await blur('.ember-validatable-input__inputs input');

    assert.equal(find('.ember-validatable-input__error').textContent, 'is too short');
  });

  test('when errors exist and allowInvalidDisplay is false it does not show error validation style on focus out', async function(assert) {
    this.set('errors', 'is too short');
    await render(hbs`{{validatable-input errors=errors allowInvalidDisplay=false}}`);
    await focus('.ember-validatable-input__inputs input');
    await blur('.ember-validatable-input__inputs input');

    assert.equal(findAll('.ember-validatable-input--is-invalid').length, 0);
  });

  test('when errors exist and showErrors is false it does not display the errors', async function(assert) {
    this.set('errors', 'is too short');
    await render(hbs`{{validatable-input errors=errors showErrors=false}}`);
    await focus('.ember-validatable-input__inputs input');
    await blur('.ember-validatable-input__inputs input');

    assert.equal(findAll('.ember-validatable-input__error').length, 0);
  });

  test('it does not show valid style on focus out when allowValidDisplay is false', async function(assert) {
    this.set('errors', null);
    await render(hbs`{{validatable-input errors=errors allowValidDisplay=false}}`);
    await focus('.ember-validatable-input__inputs input');
    await blur('.ember-validatable-input__inputs input');

    assert.equal(findAll('.ember-validatable-input--is-valid').length, 0);
  });
});
