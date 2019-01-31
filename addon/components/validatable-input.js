import Component from '@ember/component';
import { computed } from '@ember/object';
import { and, not, notEmpty } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/validatable-input';

export default Component.extend({
  layout,
  classNames: ['ember-validatable-input'],
  classNameBindings: [
    'isInvalid:ember-validatable-input--is-invalid',
    'isValid:ember-validatable-input--is-valid'
  ],

  allowInvalidDisplay: true,
  allowValidDisplay: true,
  currency: false,
  errors: null,
  hasErrors: notEmpty('errors'),
  isInvalid: and('allowInvalidDisplay', 'hasErrors'),
  isValid: and('allowValidDisplay', 'noErrors'),
  noErrors: not('hasErrors'),
  readyToShowValidation: false,
  showErrors: true,

  // Pass through normal input properties
  autocomplete: null,
  inputClass: null,
  maxlength: null,
  name: null,
  pattern: null,
  placeholder: null,
  type: 'text',
  value: null,

  didInsertElement() {
    if (this.get('currency')) {
      this.$('input').inputmask('Regex', { regex: '[0-9]+.?[0-9]+' });
    }
  },

  htmlSafeInputClass: computed('inputClass', function() {
    return htmlSafe(this.get('inputClass') || '');
  }),

  actions: {
    onFocusOut() {
      this.set('readyToShowValidation', true);

      if (this.attrs.onFocusOut) {
        this.attrs.onFocusOut(this);
      }
    },

    // Ember `input` helper does not correctly support the
    // `onChange` event, so use onKeyUp to return the
    // entire value of the input instead of just the last
    // character typed.
    // Reference: https://github.com/emberjs/ember.js/issues/11678
    onKeyUp() {
      if (this.attrs.onChange) {
        this.attrs.onChange(this.get('value'));
      }
      return true;
    }
  }
});
