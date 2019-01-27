import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/validatable-input';

export default Component.extend({
  layout,
  classNames: ['validatable-input'],
  classNameBindings: [
    'isInvalid:validatable-input--is-invalid:validatable-input--is-valid',
    'showValidation:validatable-input--showing-validation'
  ],

  allowInvalidDisplay: true,
  allowValidDisplay: true,
  errors: null,
  isInvalid: computed.notEmpty('errors'),
  isValid: computed.empty('errors'),
  currency: false,
  readyToShowValidation: false,

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

  showValidation: computed('isInvalid', 'readyToShowValidation', {
    get() {
      if (!this.get('readyToShowValidation')) {
        return false;
      }

      return (this.get('isValid') && this.get('allowValidDisplay')) ||
             (this.get('isInvalid') && this.get('allowInvalidDisplay'));
    },

    set(paramName, value) {
      return value;
    }
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
