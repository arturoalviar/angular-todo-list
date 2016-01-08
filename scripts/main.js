+function($){
  'use strict';

  var $input = $('input[type=text]');
  var $this = $('this');
  $('label').on('click', function(){
    console.log('Clicked!');
  });

  $('label').trigger('click');
  $input.focus(function(){
    console.log($this.val().length);
    //$this.setSelectionRange(0 , $this.val().length);
  });
}($);
