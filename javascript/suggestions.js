# These are suggestions on how to approach each helper function in library.js

## You do not have to write your solutions like this, just suggestions on the approach.

[ ] formatDate - takes in a string value representing the date and formats it to mm/dd/yyyy

      ```
        p.formatDate = function(date){
          split the date by the dashes
          create a variable and store the value that represents month
          create a variable and store the value that represents day
          reassign the date to the index of the month
          reassign the month to the index of the date
          turn the elements in the array back to a string
          return the string
        };

      ```

[ ] checkListForDuplicateTasks returns a boolean as to whether any of the toDo's we've already created match the one we input into the function.

      ```
        p.checkListForDuplicateTasks = function(toDoList, taskTitle){
         use _.every to loop through the toDoList.
          use a helper function to get the text from each item from each list item.
          check to see whether the text matches.
          if it does, return true.
          if it doesn't, return false.
          
        };

      ```
[ ] getCurrentDate - gets the current date

      ```
        p.getCurrentDate = function(){
          use the Date object and its methods to get access to current date and month.
          Use the p.formatDate helper function to return the currentDate formatted in mm/dd/yyyy
        };

      ```
* [ ] hasClass - takes in the listItem and a string value that represents the inputClass and returns true or false as to whether an html element has a class.
      ```
      p.hasClass = function(listItem, inputClass){
        use one of the helper functions to grab the classlist array from our listItem;
        return true or false if the classList contains the inputClass
      };

      ```

* [ ] getAllCompleteTasks - returns an array containing only the completed tasks.

      ```
      p.getAllCompleteTasks = function(list){
        filter out the toDo's in the list that don't have the class 'disabled'.
           use helper function return whether or not the element has the class 'disabled.'
      };

      ```

* [ ] emptyList - emptys all list elements from our toDoList html element.

      ```
      p.emptyList = function(toDolist){
        use a helper function to grab the array of children from the toDoList
        loop through the array of children and use our p.removeLastToDoListItem helper function to remove each item from the toDolist.
           use our helper function, p.removeLastToDoListItem, to remove each item from the toDoList.
          return the list to the user
      };

      ```

* [ ] updateToDoList - updates the toDoList element with a new list of li (list items)

      ```
      p.updateToDoList = function(toDoList, newList){
         use _.each to loop through the newList 
           use our p.addItem helper function to add each new item to the list.
      };

      ```

## Nightmare Mode:

* [ ] getPastDueItemstakes -  the currentToDoList and the current date, and returns an array containing all of the elements that are dated before the current due date.

      ```
      p.getPastDueItems = function(currentToDoList, currentDate){
        use filter to return only the elements in the currentToDoList that are dated before the currentDate.
        create a flag, that we're going to set to false.
        grab the array of children out of the listItem
        use loop through each child element
             check to see whether the element has the class 'dueDate'
              if the it does, check whether the elements date lands before the current date
                   if it does, set flag to true.
         outside of your loop return flag   
      };

      ```

* [ ] sortByDate - takes the toDoList html element and returns a new list where the list items are sorted.

      ```
      p.sortByDate = function(toDoList){
         iterate through the items toDoList HTML object and return items into a new array
          sort the items in the new array
           get the string value of the dueDates from each item and save them into variables.
           convert the dates into Numbers and compare them.
         return the sorted list to the user.
      };

      ```