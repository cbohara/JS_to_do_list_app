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

		// grabbing the users input and chosen due date when the user submits their task
		var userInputTaskName = p.grabInputValueById('taskInput');
		var InputDueDate = p.grabInputValueById('datePicker');
		// use the p.formatDate helper function to format the date in this way: dd-mm-yyyy;
		var chosenDueDate = p.formatDate(p.reverseDate(InputDueDate));


		// check our masterList for duplicates using the checkDuplicates helper function.
		if (p.checkListForDuplicateTasks(masterList, userInputTaskName)){
			// if there are no duplicates, create an html list-item element that displays our to-do item

			// use our p.createItem helper functionto create a new list item, saved to the variable "newListItem".
			var newListItem = p.createItem('li');

			// create an input HTML element and save it to the variable checkBox;
			var checkBox = p.createItem('input');
				// change the type of the input to 'checkBox' so that it'll show up 
				p.changeType(checkBox, 'checkBox');
			
			// add an onclick handler to the checkbox's so that when we finish a task it goes grey.
			checkBox.onclick = function(e){
				// preventDefault stops the page from reloading when an event happens.
				e.preventDefault();
				// grab the checkBox's parent list element ('li')
				var listItem = this.parentNode.parentNode;
				// add the 'disabled' class (bootstrap 'disabled' greys the list item out) to the list item
				p.addClass(listItem, 'disabled');
			};

			// TIP: //spans allow us to display our HTML elements inline (side by side, rather than on top of each other). Check out this blog post here to get more information: http://bit.ly/1DIuHAO

			// we're going to wrap our checkbox in a span, so lets create a 'checkBoxSpan' variable and save an html into it.
			var checkBoxSpan = p.createItem('span');
				// add your checkBox to your span using our p.addItem helperfunction.
				p.addItem(checkBoxSpan, checkBox);
			// create a <p> element that will house our taskName, set it to the variable 'taskName'
			var taskName = p.createItem('p');
			// 
			var newDueDate = p.createItem('span');

			// adding the input text to our taskName HTML element.
			p.addTextToElement(taskName, userInputTaskName);

			// adding the users chosen due date to our dueDate HTML element
			p.addTextToElement(newDueDate, chosenDueDate);

			// adding the list-group-item class to our listItem so that bootstrap can make it look pretty.
			p.addClass(newListItem, 'list-group-item');
			
			// add the dueDate class to our newDueDate span so that we can find it more easily later.
			p.addClass(newDueDate, 'dueDate');

			// adding appropriate class to each item-attribute. Check out/play around with the styles.css file and see what you can change.
			p.addClass(newDueDate, 'item-attribute');
			p.addClass(checkBoxSpan, 'item-attribute');
			p.addClass(taskName, 'item-attribute');
			
			// adding each item to our final listItem
			
			// first add the checkBox
			p.addItem(newListItem, checkBoxSpan);
			// second add the task name 
			p.addItem(newListItem, taskName);
			// third add the due date
			p.addItem(newListItem, newDueDate);

			// adding our listItem to our toDoList so that it shows up in the browser.
			p.addItem(toDoList, newListItem);

			// cache our new list item in a safe place.
			masterList.push(newListItem);
			
			// reset the task & dueDate inputs back empty strings so for ui/ux purposes.
			p.updateIdValue('taskInput', '');
			p.updateIdValue('datePicker', '');

			
		} else {
			// if they've already done the task, we should let them know!
			alert("you've already entered this task");
			// reset the task input value to an empty string.
			p.updateIdValue('taskInput', '');
		}
	};

	// create a 'clearCompletedTasksButton' variable that holds the element of the completedTask button
	var clearCompletedTasksButton = p.grabElementById('clearCompleted');

	// create an onsubmit event on the clearCompletedTasksButton
	clearCompletedTasksButton.onsubmit = function(e){
		// instantiate your preventDefault()
		e.preventDefault();
		// use our helper function to get a collection of all of the completed tasks
		var completeTasks = p.getAllCompleteTasks(currentList);
		//empty the current list of items in our toDoList
		p.emptyList(toDoList);
		// update our toDo list with  only the pastDoTodos 
		p.updateToDoList(toDoList, completeTasks);
		
	};

	
	// create a 'pastDueButton' variable that holds the element of the pastDue button
	var pastDueButton = p.grabElementById('pastDue');;
	// create an onsubmit event on the pastDueButton that will re-render our toDoList to contain only the pastDue events.
	pastDueButton.onsubmit = function(e){
		// instantiate your preventDefault()
		e.preventDefault();
		// split the currentDate into an array separated by the dash's
		var currentDate = p.getCurrentDate().split('-');
		// user our helper function to get a collection of all of the pastDueToDos
		var pastDueToDos = p.getPastDueItems(currentList, currentDate);

		//empty the current list of items in our toDoList
		p.emptyList(toDoList);
		// update our toDo list with  only the pastDoTodos 
		p.updateToDoList(toDoList, pastDueToDos);
	};

	// create a 'restoreTasksButton' variable that holds the element of the restoreTasks button
	var restoreTasksButton = p.grabElementById('restoreTasks')

	// create an onsubmit event on the restoreTasksButton that will restore all of the tasks we've ever created in our list.
	restoreTasksButton.onsubmit = function(e){
		e.preventDefault();
		//empty the current list of items in our toDoList
		p.emptyList(toDoList);
		// update with all of the toDo's in our masterList.
		p.updateToDoList(toDoList, masterList);
	};

	// create a 'sortByDateButton' variable that holds the element of the restoreTasks button
	var sortByDateButton = p.grabElementById('sortByDate')
	
	// create an onsubmit event that 
	sortByDateButton.onsubmit = function(e){
		e.preventDefault();
		// user our helper function, p.sortByDate, to sort the elements in our list.
		var sortedList = p.sortByDate(currentList);
		//empty the current list of items in our toDoList
		p.emptyList(toDoList);
		// update our toDo list with new, sorted, toDo's
		p.updateToDoList(toDoList, sortedList);
	};
});