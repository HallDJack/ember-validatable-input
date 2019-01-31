ember-validatable-input [![Build Status](https://travis-ci.org/HallDJack/ember-validatable-input.svg?branch=master)](https://travis-ci.org/HallDJack/ember-validatable-input)
==============================================================================

A component that uses ember-cp-validations to wrap form inputs to provide a plug and play validated input.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above

Installation
------------------------------------------------------------------------------

```
ember install ember-validatable-input
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]
### Customization
There are no default styles included with this addon.

To style in `<input>` you can pass an `inputClass` when initializing the component.
```hbs
// app.scss
.my-custom-input {};

// my_template.hbs
{{ember-validatable-input
  inputClass='my-custom-input'
}}
```

To customize the styles for when the component is in the valid or invalid state override the following classes.
```scss
// app.scss
.ember-validatable-input--is-invalid {
  input {
    box-shadow: inset 0 0 0 1px $red;
  }
}

.ember-validatable-input--is-valid {
  input {
    box-shadow: inset 0 0 0 1px $green;
  }
}

.ember-validatable-input__error {
  color: $red;
}
```

Contribution
------------------------------------------------------------------------------

Please read the [contribution guide](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md).


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
