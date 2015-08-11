function initializeTodoDomElements(){
  _.each(todoTasks, function(task){
    $('<div><input type="checkbox"> ' + task.title  + ': ' + task.importantLevel +  ' <br></div>').appendTo($("." + task.category)); 
  });
}

function hide(tasks){
  tasks.parent().remove();
}

function emphasize(tasks){
  removeAllClass(tasks);
  tasks.parent().addClass('em');
}

function removeAllClass(tasks){
  var classNeedToBeRemoved = ["em", "finished"];
  tasks.parent().removeClass(classNeedToBeRemoved.join(" "));
}

function markAsDone(tasks){
  removeAllClass(tasks);
  tasks.parent().addClass('finished');
}

function clearClickedProp(element){
  element.prop('checked', false); 
}

function selectedOptionValue(){
  var value = $('#options').val();
  value == "all" ? "" : value; 
  return value;
}

function buildCssSelectorForSelectedTodoTasks(){
  var selectedValue = selectedOptionValue();
  var selector = selectedValue === 'all' ? 'input[type=checkbox]:checked' : '';
 
   if (selector === '') {
    selector = _.filter(['.'+selectedValue, 'input[type=checkbox]:checked'], function(str){
          return str != ""; 
    }).join(" ");
   }
  return selector;
}
