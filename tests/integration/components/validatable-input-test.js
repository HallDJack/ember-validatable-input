import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, findAll, render, blur, focus } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | validatable-input', function(hooks) {
  setupRenderingTest(hooks);

  test('when there are no errors it shows no errors on focus out', async function(assert) {
    await render(hbs`{{validatable-input errors=errors}}`);
    await focus('.validatable-input__inputs input');
    await blur('.validatable-input__inputs input');

    assert.equal(find('.error'), null);
    percySnapshot(assert);
  });

  test('when errors exist it shows errors on focus out', async function(assert) {
    this.set('errors', 'is too short');
    await render(hbs`{{validatable-input errors=errors}}`);
    await focus('.validatable-input__inputs input');
    await blur('.validatable-input__inputs input');

    assert.equal(find('.error').textContent, 'is too short');
    percySnapshot(assert);
  });

  test('when errors exist and allowInvalidDisplay is false it does not show error validation style on focus out', async function(assert) {
    this.set('errors', 'is too short');
    await render(hbs`{{validatable-input errors=errors allowInvalidDisplay=false}}`);
    await focus('.validatable-input__inputs input');
    await blur('.validatable-input__inputs input');

    assert.equal(findAll('.validatable-input__validation-symbol--invalid').length, 0);
    percySnapshot(assert);
  });

  test('it does not show valid style on focus out when allowValidDisplay is false', async function(assert) {
    this.set('errors', null);
    await render(hbs`{{validatable-input errors=errors allowValidDisplay=false}}`);
    await focus('.validatable-input__inputs input');
    await blur('.validatable-input__inputs input');

    assert.equal(findAll('.validatable-input__validation-symbol--valid').length, 0);
    percySnapshot(assert);
  });
});
