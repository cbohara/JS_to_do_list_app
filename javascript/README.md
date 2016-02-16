# p. Library Documentation

## Explanations for each helper function in library.js


* [x] p.grabElementsByClass takes a string as an input and returns an array containing all of the elements with the corresponding class.

* [x] p.grabElementsByTag takes the name of an html tag (i.e, 'li') returns an array containing all of the HTML elements with the corresponding tag.

* [x] p.grabElementById takes a string, 'id', and returns the HTML element with the corresponding id.

* [x] p.grabInputValueById grabs an element by id and returns its input value. Element must be an 'input' HTML element.

* [x] p.updateIdValue takes two strings, an 'id' and an 'inputText' and updates the input value in the corresponding id element.

* [x] p.grabChildren takes an HTML element and returns an array containing the child of the associated element.

* [x] p.changeType takes an 'input' html element, and a type, changes the type of input to whichever type you'd like.

* [x] p.createItem takes an element tag name and returns an HTML element.

* [x] p.removeSpecificToDoListItem takes an element and an index, and removes a child element at a specified index. It then returns the remaining children of that element.

* [x] p.removeLastToDoListItem takes a the toDoList html item and removes the last child element.


* [x] p.addItem takes two html elements and adds the second item as a child to the first item.

* [x] p.addClass takes an HTML element and a string adds a class to the HTML element and returns the classList


* [x] p.getTextFromListItem takes a listItem gets its text, and returns it to the user.


* [x] p.getTextFromElement gets text specifically from other elements that aren't list items and returns it to the user.


* [x] p.grabClassList takes an element and returns an array filled with all of the classes placed on the corresponding .element

* [x] p.addTextToElement takes an HTML element and inputText and adds text to the innerText of an element.

* [x] p.grabDate takes a dueDate input and returns the value.


* [ ] p.checkListForDuplicateTasks returns a boolean as to whether any of the toDo's we've already created match the one we input into the function.

* [ ] p.formatDate takes in a string value representing the date and formats it to mm/dd/yyyy

* [ ] p.getCurrentDate returns the current date.




* [ ] p.hasClass takes in the listItem and a string value that represents the inputClass and returns true or false as to whether an html element has a class.


* [ ] p.getAllCompleteTasks takes the current toDo list and returns an array containing only the completed tasks.


* [ ] p.emptyList takes the toDoList and emptys all list elements from our toDoList html element.

* [ ] p.updateToDoList takes the current toDoList HTML element and a newList collection and updates the toDoList element with a new list of items.

NIGHTMARE MODE: These last two pieces of functionality take quite a bit of JavaScript prowess. Please proceed with caution...

* [ ] p.getPastDueItems takes the currentToDoList and the current date, and returns an array containing all of the elements that are dated before the current due date.


* [ ] p.sortByDate takes the toDoList html element and returns a new list where the list items are sorted.
