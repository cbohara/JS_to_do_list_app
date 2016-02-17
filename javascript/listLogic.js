$(document).ready(function(){
	// this is the HTML representation of our todo-list.
	var toDoList = p.grabElementById('list');

	// this is the HTML representation of our "create task" button. We can add 'events' to so that it responds to the users actions. Read about dom events here: http://www.w3schools.com/js/js_htmldom_events.asp
	var createTaskForm = p.grabElementById('taskForm');

	// this is an array elementing containing all of the current list elements in your toDoList.
	var currentList = p.grabChildren(toDoList);

	// we're going to be sorting/changing our original list, so our masterlist is going to cache every single item we create so that we can always reference them.
	var masterList = [];

	// adding an event called 'onsubmit' to the createTaskForm. When you press the 'createTask' button, it will run the code below. You'll be using this syntax later down the line to create other event handlers and buttons.
	createTaskForm.onsubmit = function(e){
		// whenever you use a an event hanlder and you DON'T want the page to refresh, you must use an e.preventDefault()
		e.preventDefault();

		// 1. use one of our helper functions grab the users input and chosen due date when the user submits their task and save them to variables.
			// which helper function would make sense here?
		var userInput = p.grabInputValueById('taskInput');
		var userDate = p.grabInputValueById('datePicker');
		// 2. in your library.js, create your p.formatDate helper function 
			// 2a. create a chosenDueDate variable, and use your p.formatDate helper function to the proper date.
		var chosenDueDate = p.formatDate(userDate);

		// 17. SKIP IF 1-16 isn't finished: Under this line,  create an if statement that uses the checkListForDuplicates helper function to check our masterList for duplicates. Oh, and create the checkListForDuplicates helper function :).  If there are no duplicates, run sections 3 through 16. If there is a duplicate, alert the user that the task is a duplicate and update the userInputs to be empty.

			// 3. use one of our helper functions to create a new list, 'li' element, saved to the variable "newListItem".
			var newListItem = p.createItem('li');

			// 4. use one of our helper functions to create  HTML input element and save it to the variable checkBox;
			var checkBox =  p.createItem('input');
				// use one of our helper functions to change the type of the input to 'checkBox' so that it'll show up 
			p.changeType(checkBox, 'checkBox');

			// IGNORE THIS: add an onclick handler to the checkbox's so that when we finish a task it goes grey. Ignore this for now.
			checkBox.onclick = function(e){
				// preventDefault stops the page from reloading when an event happens.
				e.preventDefault();
				// grab the checkBox's parent list element ('li')
				var listItem = this.parentNode.parentNode;
				// add the 'disabled' class (bootstrap 'disabled' greys the list item out) to the list item
				p.addClass('disabled', listItem);
			};

			// TIP: //spans allow us to display our HTML elements inline (side by side, rather than on top of each other). Check out this blog post here to get more information: http://bit.ly/1DIuHAO

			// 5. we're going to wrap our checkbox in a span, so lets create a 'checkBoxSpan' variable and save a span html into it.
			var checkBoxSpan = p.createItem('span');

				// 5a. using a helper function, add your checkBox to your span using our p.addItem helperfunction.
				p.addItem(checkBoxSpan, checkBox);
			
			// 6. create a <p> element that will house our taskName, set it to the variable 'taskName'
			var taskName = p.createItem('p');

			// 7. create a <span> element that will house our dueDate, set it to the variable 'newDueDate'
			var newDueDate = p.createItem('span');

			// 8. use a helper function to add the userInput you collected earlier as text to your taskName <p> tag.

			p.addTextToElement(taskName, userInput);

			// 9. use a helper function to add the users chosen due date you collected earlier as text to your newDueDate <span>
			p.addTextToElement(newDueDate, chosenDueDate);

			// 10. add the list-group-item class to our newListItem so that bootstrap can make it look pretty.
			p.addClass(newListItem, 'list-group-item');
			
			// 11. add the dueDate class to our newDueDate span so that we can find it more easily later.
			p.addClass(newDueDate, 'dueDate');

			// 12. add the 'item-attribute' to the newDueDate, checkBoxSpan, and taskName. Check out/play around with the styles.css file and see what you can change.
			p.addClass(newDueDate, 'item-attribute');
			p.addClass(checkBoxSpan, 'item-attribute');
			p.addClass(taskName, 'item-attribute');
			
			// 13. add each item to our final listItem. First add the checkBoxSpan, then add the taskName, then add the newDueDate.
			p.addItem(newListItem, checkBoxSpan);
			p.addItem(newListItem, taskName);
			p.addItem(newListItem, newDueDate);

			// 14. finally, add your list-item to the to-do list 
			// 'ul' element.S
			p.addItem(toDoList, newListItem);

			// 15. push our new list item in a master list.
			masterList.push(toDoList);

			// 16. use the p.updateIdValue helper function to update the task input box, and date picker to be empty.
			p.updateIdValue('taskInput', '');
			p.updateIdValue('datePicker', '');
	};

// ======SECTION 2 FILTER FUNCTIONALITY =======================

	// 1. create a 'clearCompletedTasksButton' variable that holds the element of the completedTask button
	var clearCompletedTasksButton = p.grabElementById('clearCompleted');
	// 2. create an onsubmit event on the clearCompletedTasksButton

		// 3. instantiate your preventDefault()
		// 4. use our helper, p.getAllCompleteTasks, function to get a collection of all of the completed tasks, and save it into a variable, completedToDos
	
		// 5. use our helper, p.emptyList empty the current list of items in our toDoList

		// 6. use our helper, p.updateToDoList toDo list with  only the completedToDos 	

});