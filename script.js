// Handle click on header text to redirect
var headerText = document.getElementById("headerText");
headerText.addEventListener("click", function() {
    window.location.href = "artclass.html";
});

// Handle search functionality
function handleKeyPress(event) {
    searchGames(); // Update search results as you type
}

function searchGames() {
    var input, filter, flexContainer, flexItem, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    flexContainer = document.getElementsByClassName('flex-container')[0];
    flexItem = flexContainer.getElementsByClassName('flex-item');

    for (i = 0; i < flexItem.length; i++) {
        a = flexItem[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            flexItem[i].style.display = '';
        } else {
            flexItem[i].style.display = 'none';
        }
    }
}

// Handle tilde key to switch to Google Classroom
window.addEventListener('keydown', function (e) {
    if(e.key === '`') {
        window.open('https://classroom.google.com/u/0/h', '_blank');
    }
}, false);

// Redirect to specific game page
function goToHomePage() {
    window.location.href = '/';
}

function goToGamePage(game) {
    window.location.href = '/' + game.toLowerCase() + '.html';
}

// Attach click event to each flex item
var flexItems = document.getElementsByClassName('flex-item');
for (var i = 0; i < flexItems.length; i++) {
    flexItems[i].addEventListener('click', function () {
        var gameName = this.textContent.trim().replace(/ /g, "");
        goToGamePage(gameName);
    });
}

// Attach keyup event to search input
var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', handleKeyPress);
