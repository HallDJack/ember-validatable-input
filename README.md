ember-validatable-input [(DEMO)](https://halldjack.github.io/ember-validatable-input/)
==============================================================================
 [![Build Status](https://travis-ci.org/HallDJack/ember-validatable-input.svg?branch=master)](https://travis-ci.org/HallDJack/ember-validatable-input)

A validation library agnostic wrapper for Ember's input helper that makes it easy to display validation errors.

The addon adds a `validatable-input` component to allow your app to show users whether their input is valid. It will work with any validation library, such as [ember-cp-valiadtions](https://github.com/offirgolan/ember-cp-validations) or [ember-changeset-validations](https://github.com/poteto/ember-changeset-validations), as long as it is possible to pass the error messages as a list to the component. It passes through many of the common options for [Ember's Input Helpers](https://guides.emberjs.com/release/templates/input-helpers/) if your app needs to pass through an option that isn't supported by this component please open an [issue](http://github.com/halldjack/ember-validatable-input/issues) or create a [PR](CONTRIBUTING.md).


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

### Options
```hbs
// form.hbs
{{validatable-input
  //Validation
  allowInvalidDisplay=true //Allow the component to show an invalid style when there are errors (default: true).
  allowValidDisplay=true //Allow the component to show a valid style when there are not errors (default: true).
  errors=[] //A list of errors for the component.
  showErrors=true //Allow the component to show an error message when errors are present (default: true).
  //Input Passthrough
  autocomplete=null
  inputClass=null //The is set to classNames on the input. The passed value is automatically made HTML safe.
  maxlength=null
  name=null
  pattern=null
  placeholder=null
  type='text'
  value=null
}}
```

### Style Customization
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
