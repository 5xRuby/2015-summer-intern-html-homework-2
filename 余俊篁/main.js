// $('button.showModal').on('click', function(){
  // $('.modal').modal();
// });
$('#container').on('click', 'button.showModal', function(){
  var items= [
    {name: 'item1', price: 100, amount: 1, picture: null},
    {name: 'item2', price: 120, amount: 3, picture: null},
    {name: 'item3', price: 573, amount: 7, picture: null}
  ];

  var itemHTML = _.map(items, function(item){
    return '<div class="item">'+
           '<span>Name: ' + item.name + ' </span>'+
           '<span>Price: ' + item.price + ' </span>'+
           '<span>Amount: ' + item.amount + ' </span>'+
           '</div>'; 
  }).join('');

  var sum = _.reduce(items, function(sum, item){
    return sum + item.price * item.amount; 
  }, 0);

  var $items = $('<div><div class="items"></div><hr><div class="sum"></div></div>').find('.items').html(itemHTML).end().find('.sum').html(sum).end();

  $('.modal-body').html($items);
  $('.modal').modal();
});

$('.modal').on('click', '#checkout', function(){
  alert('Save Changes');
});

$('#container').html('<button class="showModal">Show</button>');
