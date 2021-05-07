/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   
  // select the element with a class of `student-list` and assign it to a variable
  // set the innerHTML property of the variable you just created to an empty string
  let studList = document.querySelector(".student-list")
 
   studList.innerHTML = "";
  // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++  ) {
   if (i>= startIndex && i< endIndex)
      const studentItem = ` <li class="student-item cf">
           <div class="student-details">
           <img class="avatar" src="${list[i].picture}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i]}</span>
           </div>
           <div class="joined-details">
         <span class="date">${list[i].registered.date}</span>
         </div>
         </li>
      `
     };
  // inside the loop create a conditional to display the proper students
  // inside the conditional:
  // create the elements needed to display the student information
  // insert the above elements



}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
