var pageCounter = 1;
var bookContainer = document.getElementById("book-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://sqtutorial.azurewebsites.net/tutorial.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  bookContainer.insertAdjacentHTML('beforeend', htmlString);
}
