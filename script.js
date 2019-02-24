'use strict';

$(document).ready(function() {
  var $inputText = $('.js-input-text');
  var $dummyInputText = $('.js-dummy-input-text');

  function updateValue(e) {
    var value = $(e.target).val();
    $(e.target).prev($dummyInputText).text(value);
  }

  $inputText.on('keyup', updateValue);
  $inputText.on('compositionend', updateValue);
});
