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

p.grabChildren = function(element){
	// returns an array containing the child of the associated element.
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
	return toDoList.children
};

// adds the itemToAddTo to the itemToAdd.
p.addItem = function(itemToAddTo, itemToAdd){
	itemToAddTo.appendChild(itemToAdd);
	return itemToAddTo
};

// adds a class to an element and returns the classList
p.addClass = function(element, inputClass){
	element.classList.add(inputClass);
	return element.classList;
};


// gets text specifically from list items
p.getTextFromListItem = function(listItem){
	var listItemTitle = listItem.children[1].innerText;
	return listItemTitle
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
	return "text has been added to your chosen element";
};

// takes a dueDate input and returns the value;
p.grabDate = function(dueDate){
	return dueDate.value;
};



// =========================== END OF HELPER FUNCTIONS =====================================

// =========================== START OF EXERCISES ===========================================

// 2. takes in a string value representing the date and formats it to mm/dd/yyyy
p.formatDate = function(date){
	  var arrayDate = date.split('-');
	  var year = arrayDate.shift();
	  arrayDate.push(year);
	  var formattedDate = arrayDate.join('-');
	  // console.log(formattedDate);
};

// 17. checkListForDuplicateTasks returns a boolean as to whether any of the toDo's we've already created match the one we input into the function.
p.checkListForDuplicateTasks = function(toDoList, taskTitle){
	// use _.every to loop through the toDoList
};


// use the Date object to return todays month and date. Use the p.formatDate helper function to return the currentDate formatted in mm/dd/yyyy. Look up how to use the Date object here: http://mzl.la/1fvwX1i
p.getCurrentDate = function(){

};

// takes in the listItem and a string value that represents the inputClass and returns true or false as to whether an html element has a class.
p.hasClass = function(listItem, inputClass){

};

// returns an array containing only the completed tasks.
p.getAllCompleteTasks = function(list){
	// TIP:  complete p.hasClass before solving this function.

};

// emptys all list elements from our toDoList html element.
p.emptyList = function(toDolist){

};

// updates the toDoList element with a new list of li
p.updateToDoList = function(toDoList, newList){

};

// NIGHTMARE MODE: These last two pieces of functionality take quite a bit of JavaScript prowess. Please proceed with caution...

// takes the currentToDoList and the current date, and returns an array containing all of the elements that are dated before the current due date.
p.getPastDueItems = function(currentToDoList, currentDate){
	// use _.filter to return only the elements in the currentToDoList that are dated before the currentDate.
};

// takes the toDoList html element and returns a new list where the list items are sorted.
p.sortByDate = function(toDoList){

};