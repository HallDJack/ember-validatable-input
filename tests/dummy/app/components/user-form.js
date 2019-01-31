import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  password: [
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  emailConfirmation: [
    validator('presence', true),
    validator('confirmation', {
      on: 'email',
      message: '{description} do not match',
      description: 'Email addresses'
    })
  ],
  wage: [
    validator('number', {
      allowString: true,
      gt: 17,
      lte: 100
    }),
    validator('format', {
      regex: /\d*\.\d{2}/,
      message: 'Wage must be in a currency format. Ex: 1.00'
    })
  ]
});

export default Component.extend(Validations, {
  email: null,
  emailConfirmation: null,
  password: null,
  username: null,
  wage: null,

  emailErrors: computed('validationErrors', function() { return this.findErrors('email'); }),
  emailConfirmationErrors: computed('validationErrors', function() { return this.findErrors('emailConfirmation'); }),
  passwordErrors: computed('validationErrors', function() { return this.findErrors('password'); }),
  usernameErrors: computed('validationErrors', function() { return this.findErrors('username'); }),
  wageErrors: computed('validationErrors', function() { return this.findErrors('wage'); }),
  validationErrors: computed('validations.isInvalid', function() {
    const errors = {};
    (get(this, 'validations.errors') || []).forEach(error => {
      errors[`${error.attribute}`] = error.message;
    });

    return errors;
  }),

  findErrors(attr) {
    if (!this.validationErrors) { return; }

    return this.validationErrors[attr];
  }
});
