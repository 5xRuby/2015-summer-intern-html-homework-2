$('button#go').on("click", function() {
  $('*').removeClass('hidden color del');

  var optionval = $('input[type=radio]:checked').val();
  var selectval = $('#select option:selected').val();
  $(`.${selectval} input[type=checkbox]`).prop("checked", true);
  $('input[type=checkbox]:checked ~ span').addClass(optionval);
});

$('button#reset').on("click", function() {
  $('input[type=checkbox]').prop("checked", false);
  $('*').removeClass('hidden color del');
});
