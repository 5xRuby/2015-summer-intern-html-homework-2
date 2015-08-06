
//=========== 生成questions =============
for (var i = 0; i < 3; i++){
	$('<div id="q' + (i+1) + '"><h3>' + 'Question ' + (i+1) + '</h3>'+
 	'<span class="high"><input type="checkbox"> high</input></span><br><span class="normal"><input type="checkbox"> normal</input></span><br><span class="low"><input type="checkbox"> low</input></span></div>').appendTo('#container');
}

//=========== 生成options =============
$('<form><select id="selection"><option value="q1">Question 1</option><option value="q2">Question 2</option><option value="q3">Question 3</option><option value="high">high</option><option value="normal">normal</option><option value="low">low</option> </select></form><br>').appendTo('#options');

$('<form><input type="radio" name="option2" value="hide"> Hide</input><br><input type="radio" name="option2" value="emphasis"> Emphasis</input><br><input type="radio" name="option2" value="done"> Done</input></form><br>').appendTo('#options');

$('<button>submmit</button>').appendTo('#options');


$('button').on("click", function() {
	var attr1 = $('#selection option:selected').val();
	var attr2 = $('input:radio[name="option2"]:checked').val();
	
	console.log(attr1);
    console.log(attr2);

	if (attr1 === 'q1' || attr1 === 'q2' || attr1 === 'q3' ){
		$('#' + attr1 +' span').toggleClass(attr2);
	} 
	else{
    	$('.' + attr1).toggleClass(attr2);
	}
});

