window.p = {};

/*

We built a library that's similar to jQuery, that abstracts away having to learn how to work with the DOM. The functions are named appropriately, and there are descriptions and examples of how each works in the documentation (aka the READ.me)

If you're unsure what a helper function takes as a parameter? Read the documentation. Not sure what it returns? Read the documentation and/or console.log the value.

This week is not just about building up your JavaScript/HTML/CSS skills, it's also about learning how to think and work like a developer - and a lot of that is about learning to parse through documentation to get what you're looking for.


*/

// returns an array containing all of the elements with the corresponding class.
p.grabElementsByClass = function(inputClass){
	return document.getElementsByClassName(inputClass);
};

// returns an array containing all of the elements with the corresponding tag.
p.grabElementsByTag = function(inputTag){
	return document.getElementsByTagName(inputTag);
};

// returns an element containing all of the elements with the corresponding id.
p.grabElementById = function(id){
	return document.getElementById(id);
};

// grabs an element by id and returns its input value. Element must be an 'input' element.
p.grabInputValueById = function(id){
	return p.grabElementById(id).value;
};

// updates the input value to the corresponding id element
p.updateIdValue = function(id, inputText){
	p.grabElementById(id).value = inputText;
	return p.grabElementById.value;
};

// returns an array containing the child of the associated element.
p.grabChildren = function(element){
	return element.children;
};

// takes an 'input', and a type, changes the type of input to whichever type you'd like.
p.changeType = function(input, type){
	input.setAttribute("type", type);
	return input;
};

// takes an element tag name and returns an HTML element.
p.createItem = function(tagName){
	var el = document.createElement(tagName);
	return el;
};

// takes an element and an index, and removes a child element at a specified index. It then returns the remaining children of that element.
p.removeSpecificToDoListItem = function(element, index){
	element.removeChild(element.childNodes[index]);
	return element.children;
};

// takes a the toDoList html item and removes the last child element.
p.removeLastToDoListItem = function(toDoList){
	toDoList.removeChild(toDoList.lastChild);
	return toDoList.children;
};

// adds itemToAdd to original
p.addItem = function(original, itemToAdd){
	original.appendChild(itemToAdd);
	return original;
};

// adds a class to an element and returns the classList
p.addClass = function(element, inputClass){
	element.classList.add(inputClass);
	return element.classList;
};


// gets text specifically from list items
p.getTextFromListItem = function(listItem){
	var listItemTitle = listItem.children[1].innerText;
	return listItemTitle;
};

// gets text specifically from other elements that aren't list items
p.getTextFromElement = function(element){
	return element.innerText;
};
// returns an array filled with all of the classes placed on the corresponding element.
p.grabClassList = function(element){
	return element.classList;
};

// adds text to the inner text of an element
p.addTextToElement = function(element, inputText){
	element.innerHTML = inputText;
	return element.innerHTML;
};

// takes a dueDate input and returns the value;
p.grabDate = function(dueDate){
	return dueDate.value;
};

// =========================== END OF HELPER FUNCTIONS =====================================

// =========================== START OF EXERCISES ===========================================

// 2. takes in a string value representing the date and formats it to mm/dd/yyyy
p.formatDate = function(date){
	// transform string value into an array to seperate the month, date, and year into seperate elements
	var arrayDate = date.split('-');
	// remove the year from the beginning of the array
	var year = arrayDate.shift();
	// push the year to the end of the array
	arrayDate.push(year);
	// transform the array back into a string
	var formattedDate = arrayDate.join('-');
	// return the date formatted as mm/dd/yyyy
	return formattedDate;
};

// 17. checkListForDuplicateTasks returns a boolean as to whether any of the toDo's we've already created match the one we input into the function.
p.checkListForDuplicateTasks = function(toDoList, taskTitle){
	// returns true if any of the values in the list match the taskTitle,    (most recent user input)
	return _.some(toDoList, function(listItem){
		var listItemText = p.getTextFromListItem(listItem);
		// check to see whether the text matches. if the text matches, the function will return true.  if the text does not match, return false.
		return listItemText === taskTitle;
	});
};

// use the Date object to return todays month and date. Look up how to use the Date object here: http://mzl.la/1fvwX1i
p.getCurrentDate = function(){
	// create a variable to hold the current date object
	var currentDate = new Date();
	// transform current day to a string
	var currentDay = currentDate.getDate();
	currentDay = currentDay.toString();
	// transform current month to a string
	var currentMonth = currentDate.getMonth()+1;
	currentMonth = currentMonth.toString();
	// transform current year to a string
	var currentYear = currentDate.getFullYear();
	currentYear = currentYear.toString();
	// if the month value is only one digit, add a 0 in front of the currentMonthString value
	if(currentMonth.length === 1){
		currentMonth = "0" + currentMonth;
	}
	// if the date value is only one digit, add a 0 in front of the currentMonthString value
	if(currentDay.length === 1){
		currentDay = "0" + currentDay;
	}
	// concatonate to combine to mm-dd-yyyy
	var mmddyyyy = currentMonth + "-" + currentDay + "-" + currentYear;
	return mmddyyyy;
};

// takes in the listItem and a string value that represents the inputClass and returns true or false as to whether an html element has a class.
p.hasClass = function(listItem, inputClass){
	// returns an array filled with all of the classes placed on the listItem element
	var classArray = p.grabClassList(listItem);
	// loop through the classArray to determine if an element matches the inputClass. if there is a match, the function will return true. else it will return false.
	return _.some(classArray, function(index){
		// check to see whether the text matches. if the text matches, the function will return true.  if the text does not match, return false.
		return index === inputClass;
	});
};

// returns an array containing only the completed tasks 
p.getAllCompleteTasks = function(list){
	// completedArray is an array that stores the list items that have the 'disabled' class
	var completedArray = _.filter(list, function(item){
		// use p.hasClass to return whether or not the element has the class 'disabled'. if p.hasClass returns true, the item has a 'disabled' class and will be pushed into completedArray by _.filter function
		return p.hasClass(item, 'disabled');
	});
	return completedArray;
};


// =============STRUGGLE IS REAL WITH EMPTY LIST FUNCTION ========
// emptys all list elements from our toDoList html element
p.emptyList = function(toDoList){
	// use a helper function to grab the array of children from the toDoList
	// p.grabChildren returns an array containing the child of the associated element
	var arrayOfChildren = p.grabChildren(toDoList);
	console.log('arrayOfChildren',arrayOfChildren);
	// loop through the array of children and use our p.removeLastToDoListItem helper function to remove each item from the toDolist.
	var result = _.each(arrayOfChildren, function(element){
		p.removeLastToDoListItem(element);
	});
	console.log('result after remove',result);
	// return the list to the user
};

// ===== STRUGGLING WITH UPDATETODOLIST ========
// updates the toDoList element with a new list items
p.updateToDoList = function(toDoList, newList){
	// use _.each to loop through the newList
	_.each(toDoList, function(toDoListItem){
		console.log('newListItem',newListItem);
		console.log('toDoList',toDoList);
		console.log('newList',newList);
		// use our p.addItem helper function to add each newListItem to the original toDoList
		p.addItem(toDoList, newListItem);
	});
	
};

// NIGHTMARE MODE: These last two pieces of functionality take quite a bit of JavaScript prowess. Please proceed with caution...

// takes the currentToDoList and the current date, and returns an array containing all of the elements that are dated before the current due date.
p.getPastDueItems = function(currentToDoList, currentDate){
	// use _.filter to return only the elements in the currentToDoList that are dated before the currentDate.
};

// takes the toDoList html element and returns a new list where the list items are sorted.
p.sortByDate = function(toDoList){

};