$('button').on("click", function() {
  $('*').removeClass('hidden color del a');

  var optionval = $('input[name="option"]:checked').val();
  $('input[name="works"]:checked + label').toggleClass(optionval);

  var selectval = $('#select option:selected').val();
  if (selectval !== "'wwww'") $(`.${selectval}`).toggleClass(optionval);
});
