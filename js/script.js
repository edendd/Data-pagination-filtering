/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page
  let startIndex = page * 9 - 9;
  let endIndex = page * 9;
  let studList = document.querySelector(".student-list");

  // removes previosly displayed students info
  studList.innerHTML = "";

  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      // create the elements needed to display the student information

      let studentItem = ` <li class="student-item cf">
           <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
           </div>
           <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
         </div>
         </li>
      `;
      studList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9);
  const linkList = document.querySelector(".link-list");

  // removes any previously displayed pagination
  linkList.innerHTML = "";
  // loop over the number of pages needed
  for (let i = 1; i <= numOfPages; i++) {
    const button = `<li><button type="button">${i}</button</li>`;

    linkList.insertAdjacentHTML("beforeend", button);
  }

  // create an event listener on the `link-list` element
  document.querySelector("li > button").className = "active";

  linkList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      document.querySelector(".active").className = "";
      e.target.className = "active";

      showPage(list, e.target.textContent);
    }
  });
}





function addSearchBar() {
  const header = document.querySelector(".header");

  const searchBar = `
     <label for="search" class="student-search">
        <input id="search" placeholder="Search by name...">
        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
     </label>
  `;

  header.insertAdjacentHTML("beforeend", searchBar);
}

showPage(data, 1);
addPagination(data);
addSearchBar();

// Click event listener for search functionality
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  const searchValue = document.querySelector("#search").value;
  const searchData = [];
  
  for (let i = 0; i < data.length; i++) {
     const name = data[i].name;
     
     if (name.first.toLowerCase().includes(searchValue) || name.last.toLowerCase().includes(searchValue)) {
        searchData.push(data[i]);
     }
  }

  if (searchData.length === 0) {
     const studentList = document.querySelector(".student-list");
     const message = `<p>Sorry, there are no matches for that search.</p>`;

     // removes student list and pagination
     studentList.innerHTML = "";
     document.querySelector(".link-list").innerHTML = "";

     studentList.insertAdjacentHTML("beforeend", message);
  } else {
     showPage(searchData, 1);
     addPagination(searchData);
  }
});

addPagination(data);
