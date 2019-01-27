import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | content-submission', function(hooks) {
  setupTest(hooks);

  module('htmlSafeInputClass', function() {
    test('does not html escape the inputClass', function(assert) {
      const component = this.owner.factoryFor('component:validatable-input').create({
        inputClass: '<div>someString</div>'
      });

      assert.equal(component.get('htmlSafeInputClass').toString(), '<div>someString</div>', 'the inputClass was not html escaped');
    });
  });

});
