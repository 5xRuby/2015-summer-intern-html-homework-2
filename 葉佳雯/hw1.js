$('#SelectList').change(function(){
  var selectValue = $('select option:selected').val();
  $("." + selectValue ).prop( "checked", true);
  $("." + selectValue + " input[type=checkbox]").prop( "checked", true);
});

$('#start').on('click', function(){
  var addStyle = $('input[type=radio]:checked').val();
  $('.frame input:checked + span').addClass(addStyle);
});

$('#clean').on('click', function(){
  $('input[type=checkbox]').prop("checked", false);
  $('input[type=radio]').prop("checked", false);
  $('select option[value="default"]').attr("selected",true);
  $('span').removeClass('hide emphasis done');
})


