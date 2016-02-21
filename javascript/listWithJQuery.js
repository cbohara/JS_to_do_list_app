$(document).ready(function(){
// click on the 'Create Task' button
$('button').on('click', function(event){
		event.preventDefault();
		// create new list item in unordered list
		$('#list').append($('<li>',{text: document.getElementById('taskInput').value}));
		// add class to new list item 
		$('li').addClass('list-group-item');
		// add user input text to list item
		// clear the text input field after the button has been clicked
		$('input:text').val('');
    });
});
