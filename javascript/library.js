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

// updates the input value to the 
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

// checkListForDuplicateTasks returns a boolean as to whether any of the toDo's we've already created match the one we input into the function.
p.checkListForDuplicateTasks = function(toDoList, taskTitle){
	// use _.every to loop through the toDoList.
	return _.every(toDoList, function(listItem){
		// user a helper function to get the text from each item from each list item.
		var listItemText = p.getTextFromListItem(listItem);
		// check to see whether the text matches.
		if (listItemText !== taskTitle) {
		// if it does, return true.
			return true;
		} else {
		// if it doesn't, return false.
			return false;
		}
	});
};

// takes in a string value representing the date and formats it to mm/dd/yyyy
p.formatDate = function(date){
	var newDate = date.split('-');
	var month = newDate[0]
	var date = newDate[1];
	newDate[0] = date;
	newDate[1] = month;
	newDate = newDate.join('-');
	return newDate;
};

// use the Date object to return todays month and date. Use the p.formatDate helper function to return the currentDate formatted in mm/dd/yyyy

// look up how to use the Date object here: http://mzl.la/1fvwX1i
p.getCurrentDate = function(){
	return ('0' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()));
};


p.reverseDate = function(dateInput){
	var result = [];
	_.each(dateInput.split('-'), function(digit){
		result.unshift(digit);
	});

	return result.join('-');
};

// takes in the listItem and a string value that represents the inputClass and returns true or false as to whether an html element has a class.
p.hasClass = function(listItem, inputClass){
	// grab the classlist array from our listItem;
	var classList = p.grabClassList(listItem);
	// return true or false if the classList _.contains the inputClass
	return _.contains(classList, inputClass);
};

// returns an array containing only the completed tasks.
p.getAllCompleteTasks = function(list){
// _.filter out the toDo's in the list that don't have the class 'disabled'.
	return _.filter(list, function(toDo){
		// return whether or not the element has the class 'disabled.'
		return !p.hasClass(toDo, 'disabled');
	});
};

// emptys all list elements from our toDoList html element.
p.emptyList = function(toDolist){
	// use a helper function to grab the array of children from the toDoList
	var arrOfChildren = p.grabChildren(toDolist);
	// loop through the array of children and use our p.removeLastToDoListItem helper function to remove each item from the toDolist.
	_.each(arrOfChildren, function(listItem){
		// use our helper function, p.removeLastToDoListItem, to remove each item from the toDoList.
		p.removeLastToDoListItem(toDolist);
	});
	// return the list to the user
	return list;
};

// updates the toDoList element with a new list of li
p.updateToDoList = function(toDoList, newList){
	// use _.each to loop through the newList, adding each list item to the toDoList 
	_.each(newList, function(newListItem){
		// use our p.addItem helper function to add each new item to the list.
		p.addItem(toDoList, newListItem);
	});

};

// NIGHTMARE MODE: These last two pieces of functionality take quite a bit of JavaScript prowess. Please proceed with caution...

// takes the currentToDoList and the current date, and returns an array containing all of the elements that are dated before the current due date.
p.getPastDueItems = function(currentToDoList, currentDate){
	// use _.filter to return only the elements in the currentToDoList that are dated before the currentDate.
	return _.filter(currentToDoList, function(listItem){
		// create an isLate flag, that we're going to set to false.
		var isLate = false;
		// grab the array of children out of the listItem
		var children = p.grabChildren(listItem);
		// use _.each to loop through each child element
	    _.each(children, function(listSection){
	    	// check to see whether the element has the class 'dueDate'
			if (p.hasClass(listSection, 'dueDate')){
			 // if the it does, check whether the elements date lands before the current date
		     var itemDueDate = p.formatDate(p.getTextFromElement(listSection)).split('-');
	          if (itemDueDate[0] <= currentDate[0] && itemDueDate[1] < currentDate[1]) {
	          	// if it does, set isLate to true.
			    isLate = true;
			  }
			}
		});
		// outside of your _.each return isLate; 
			return isLate
	});
};

// takes the toDoList html element and returns a new list where the list items are sorted.
p.sortByDate = function(toDoList){
	// _.map the items toDoList HTML object to a new array
	var newList = _.map(toDoList, function(item){
		return item;
	});
	// newList now has access to the .sort() function. Use it to create a new array with all of the list items sorted.
	// you can figure out how to use the sort function here: http://www.sitepoint.com/sophisticated-sorting-in-javascript/
	var sortedList = newList.sort(function(a, b){
		// get the string value of the dueDates from each item and save them into variables.
		var aDueDate = p.formatDate(p.getTextFromListItem(a)).split('-');
		var bDueDate = p.formatDate(p.getTextFromListItem(b)).split('-');
		// convert the dates into Numbers (*hint hint*) and compare them.
		var testADate = Number(aDueDate[0].toString() + aDueDate[1].toString());
		var testBDate = Number(bDueDate[0].toString() + bDueDate[1].toString());

		return testADate >= testBDate;

	});
	// return the sorted list to the user.
	return sortedList
};





