

let entryForm = document.getElementById('entryForm')//accessing form element id.

let entryTextBox = document.querySelector('.entry-textBox')//accessing the text box element class.

let postButton = document.querySelector('.button')//accessing the main button element class.

let entriesSection = document.querySelector('#entries')//accessing section id in DOM.

let entriesNav = document.querySelector('.entries-nav-div')//accessing entries navigation div element class.
/*
  - Inside the addEntryToDom function, create a new variable named entryDiv.
  - Use the document.createElement method to create an html Div and make it the
      new variable's value.
  - On a new line, give the new div a class of 'single-entry'.
  - Change the div's innerText property to the user's input from the textbox
  - Use the appendChild method to add the new div to the entriesSection
      variable created on line 2
*/
let count = 1;//allowing the buttons labels on each entry to be incremented with every click. 

function addEntryToDOM(event){//function that prevents the page from reloading 
//when the submit button is clicked.

    event.preventDefault();//method that prevents page reload.

    let entryDiv = document.createElement('div')//creating a new div to store entries.
    entryDiv.className = 'single-entry'//giving new div a class
    entryDiv.innerText = entryTextBox.value//allowing div to hold entry text.
    entryDiv.style.display = 'none'//hide user entry by default.

    entriesSection.appendChild(entryDiv)//storing appended div to the DOM section.

    entryTextBox.value = ''//clearing the text box text after submit button is clicked.

    //functionality that allows single entries to be displayed upon button click.
    let displayEntryButton = document.createElement('button')//creating a new button inside entry section.
    displayEntryButton.className = 'display-entry-button'//giving the new button a name.
    displayEntryButton.innerText = count//incremented button values.

    entriesNav.appendChild(displayEntryButton)//appending the button to the new div that lives in the section element in the DOM.

            /*- Use a for loop to iterate through all the elements in the
              allEntries variable.
            - Set each element's style.display property to 'none'.*/

    let allEntries = document.querySelectorAll('.single-entry')//accessing first div class and their contents.

    displayEntryButton.addEventListener('click', function(){

        for(let i = 0; i < allEntries.length; i++){
            allEntries[i].style.display = 'none'
        }

        entryDiv.style.display = 'block'

            displayEntryButton.addEventListener('click', function(){//hides the entry when the button is clidked a second time.

                for(let i = 0; i < allEntries.length; i++){
                    allEntries[i].style.display = 'none'
                }

                displayEntryButton.style.display = 'none'

        })

})


    

    count++;//incrementing the numbered button labels.
}
entryForm.addEventListener('submit', addEntryToDOM)//entryForm element id listenes for a click event
//Then runs a function.

//function that allow button to change colors when clicked.
function modifyButton(){
    postButton.style.backgroundColor = '#16697A';
}
postButton.addEventListener('click', modifyButton)

//function that reverts back to original when not used.
function revertModifyButton(){
    postButton.style.backgroundColor = 'lightblue';
}
postButton.addEventListener('mouseleave', revertModifyButton)

//adding buttons to access each user entry.







