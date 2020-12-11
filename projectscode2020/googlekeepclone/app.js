//class used to organize code.
class App{//class serves as a template to create objects.
    constructor(){//constructor is a method that creates/initializes object & object properties.

        //'this'.object-properties make reference to properties living within an object.
    
        /*represents where notes data will be stored when notesArray is empty 
        and when the notesArray contains notes in which they will be ssaved to the browser.*/
        //All are properties/data types
        this.notesArray = JSON.parse(localStorage.getItem('notesArray')) || []
        this.title = ''
        this.text = ''
        this.id = ''

        //html elements being accessed by js.
        //'$' immediately recognizes and accesses html elements within the DOM.
        this.$placeholder = document.querySelector('#placeholder')
        this.$form = document.querySelector('#form')//element accessed
        this.$notes = document.querySelector('#notes')
        this.$noteTitle = document.querySelector('#note-title')//element accessed
        this.$noteText = document.querySelector('#note-text')//element accessed
        this.$formButtons = document.querySelector('#form-buttons')//element accessed
        this.$formCloseButton = document.querySelector('#form-close-button')
        this.$modal = document.querySelector('.modal')
        this.$modalTitle = document.querySelector('.modal-title')
        this.$modalText = document.querySelector('.modal-text')
        this.$modalCloseButton = document.querySelector('.modal-close-button')
        this.$colorToolTip = document.querySelector('#color-tooltip')

        //methods
        this.render()//method needs to be called to display our initail notes once browser is refreshed.
        this.addEventHandlers()//executes every document object/document.body and html elemental method upon app start up.
    }

    //method that stores event listeners for each event that is fired('click', 'submit' etc.).
    addEventHandlers(){

        document.body.addEventListener('click', event=>{//method and event listener on the DOM doc body.
            this.handleFormClick(event)//method will run when document is clicked.
            this.selectNote(event)//method will run when document is clicked.
            this.openModal(event)//method will run when document is clicked.
            this.deleteNote(event)//method will run when document is clicked.
        })

        //event-listener on document that displays a tool-tip that changes the color of a note.
        document.body.addEventListener('mouseover', event=>{
            this.openToolTip(event)
        })

        //event-listener on document that hides a tool-tip that changes the color of a note.
        document.body.addEventListener('mouseout', event=>{
            this.closeToolTip(event)
        })


        /*event-listener on html element that leaves the tool-tip OPEN when not changing the color of a note.
        we must use function(){} declarations here on the event-listener because arrow functions applied to 
        this.htmlElements do note have their own 'this' & use lexical 'this'.
        */
        this.$colorToolTip.addEventListener('mouseover', function(){
            this.style.display = 'flex'//refers to $colorToolTip html element.
        })

        /*event-listener on html element that leaves the tool-tip CLOSED when not changing the color of a note.
        we must use function(){} declarations here on the event-listener because arrow functions applied to 
        this. htmlElements do not have their own 'this' & use lexical 'this'.
        */
        this.$colorToolTip.addEventListener('mouseout', function(){
            this.style.display = 'none'//refers to $colorToolTip html element.
        })

        this.$colorToolTip.addEventListener('click', event =>{
            const color = event.target.dataset.color
            if(color){
                this.editNoteColor(color)
            }
        })


        //method listens for a submit event when submit button is pressed, methods are invoked.
        this.$form.addEventListener('submit', event=>{
            event.preventDefault()//prevents page reload when submit button clicked.

            const title = this.$noteTitle.value//html element value
            const text = this.$noteText.value//html element value
            const hasNote = title || text//stores text values for noteTitle value and noteText value.

            //checks to see if title or text is present.
            if(hasNote){
                //method that adds notes if object title and text exist.
                this.addNote({ title: title, text: text})
            }
        })

        //listening for a click event on an elementt that invokes a two methods that changes style.
        this.$formCloseButton.addEventListener('click', event=>{
            event.stopPropagation()
            this.closeForm()
        })

        this.$modalCloseButton.addEventListener('click', event=>(
            this.closeModal(event)
        ))

    }

    //method that targets elements on DOM and opens or closes a form.
    handleFormClick(event){
        //event.target refers/targets element that contains an event-listener, checks if element is clicked via handleFormClick() method.
        const isFormClicked = this.$form.contains(event.target)

        //logic within handleFormClick() that lists a created note when form is closed along with when note is submitted.
        //adds note based on note object key value pairs.
        const title = this.$noteTitle.value//html note title element data type/property.
        const text = this.$noteText.value//html note text element data type/property.
        const hasNote = title || text//html note element data types/property stored in single variable used for future logic.

        //check if form is clicked & if there is an existing note created.
        if(isFormClicked){
            this.openForm()//invoke method.
        }else if(hasNote){
            this.addNote({title, text})//invoked method that adds a note.
        }else{
            this.closeForm()//invoke method
        }
    }

    //method that modifies css style to display the form style based on a 'click' event.
    openForm(){
        this.$form.classList.add('form-open')
        this.$noteTitle.style.display = 'block'
        this.$formButtons.style.display = 'block'
    }

    //method that modifies css style to hide the form style based on a 'click' event.
    closeForm(){
        this.$form.classList.remove('form-open')
        this.$noteTitle.style.display = 'none'
        this.$formButtons.style.display = 'none'
        this.$noteTitle.value = ''
        this.$noteText.value = ''
    }



    //method that opens the modal based on the document body event listener 'click' event.
    openModal(event){
        if(event.target.matches('.toolbar-delete')) return//deactivates the method

        if(event.target.closest('.note')){//clicking on the note.
            this.$modal.classList.toggle('open-modal')
            this.$modalTitle.value = this.title
            this.$modalText.value = this.text
        }
    }

    closeModal(event){
        this.editNote()
        this.$modal.classList.toggle('open-modal')
    }

    //method that opens the color selection tool that changes color of note.
    openToolTip(event){
        if(!event.target.matches('.toolbar-color')) return//return from function if not hovering over html element.
        this.id = event.target.dataset.id//accesses note object's data set key-value pair div-element from mapped out created notes array.
        let noteHoverCoordinates = event.target.getBoundingClientRect()//returns specific info on where user is hovering on the note.
        const horizontalValue = noteHoverCoordinates.left + window.scrollX//how much user has scrolled horizontally.
        const verticalValue =  noteHoverCoordinates.top + window.scrollY//how much user has scrolled vertically.
        this.$colorToolTip.style.transform = `translate(${horizontalValue}px, ${verticalValue}px)`/*use hVal vVal as pixels to change the position of 
        where the user is hivering over toolTip, if they are doing so.*/
        this.$colorToolTip.style.display = 'flex'
    }

    closeToolTip(event){
        if(!event.target.matches('.toolbar-color')) return//return from function if not hovering over html element.
        this.$colorTip.style.diplay = 'none';
    }

    //method that allows a new note to be created.
    addNote({title, text}){
        const newNote = {//object best used to organize our notes data.
        title,//html element data type/property
        text,//html element data type/property
        color: 'white',//html element style

        /*
        logic that checks if we have notes, and if so show their index, 
        and allow notes to be incremented by 1 and shown 
        every time a note is created.
        */
        id: this.notesArray.length > 0 ? this.notesArray[this.notesArray.length - 1].id + 1 : 1
    }

    //update notes property data with array structure and newly added note.
    this.notesArray = [...this.notesArray, newNote]//array-object spread recognizes the current/updated state of an array.
    this.render()//method invoked to display and save notes.
    this.closeForm()//gives app ability to close the form on submit.
}

    //method created to edit and display notes within modal html element after note is created
    editNote(){
        let title = this.$modalTitle.value//text/string value within an html form element
        let text = this.$modalText.value//text/string value within an html form element
        this.notesArray = this.notesArray.map(note=>/*clones notesArray, but mutates indexed-created note 
        & returns a new iteration of the array.*/
            note.id === Number(this.id) ? {...note, title, text} : note
        )
        this.render()//method invoked; saved and incremeted note maintains its original html layout style.
    }

    /*method that invokes a color change on the document's objects $colorToolTip
    element when a 'click' event is fired.
    */
    editNoteColor(color){
        this.notesArray = this.notesArray.map(note=>
            note.id === Number(this.id) ? {...note, color} : note
        )
        this.render()//method that both saves and displays notes.
    }


    //method that allows selected note within modal, to be edited and clicked.
    selectNote(event){/////////////////////////
        const $selectedNote = event.target.closest('.note')//note can be selected when 'click' event is fired.
        if(!$selectedNote) return
        const [$noteTitle, $noteText] = $selectedNote.children
        this.title = $noteTitle.innerText//html layout text is changed when note is selected.
        this.text = $noteText.innerText//html layout text is changed when note is selected.
        this.id = $selectedNote.dataset.id//sets note object id to selected notes state.
    }

    deleteNote(event){
        event.stopPropagation()//stops bubbling.
        if(!event.target.matches('.toolbar-delete')) return
        const id = event.target.dataset.id
        this.notesArray = this.notesArray.filter(note => note.id !== Number(id))
        this.render()//method that both saves and displays notes.
    }

    render(){//method that both saves and displays notes.
        this.saveNotes()
        this.displayNotes()
    }

    saveNotes(){
        localStorage.setItem('notes', JSON.stringify(this.notes))
    }

    //method that displays notes based on created/existing notes within the notesArray array.
    displayNotes(){
        const createdNotes = this.notesArray.length > 0
        this.$placeholder.style.display = createdNotes ? 'none' : 'flex'

        this.$notes.innerHTML = this.notesArray//modifying the style and layout of new 
        .map(//html layout and css styling when a note is created and submitted.
            note => `
        <div style='background: ${note.color}' class='note' data-id='${note.id}'>
            <div class='${note.title && 'note-title'}'>${note.title}</div>
            <div class='note-text'>${note.text}</div>
            <div class='toolbar-container'>
                <div class='toolbar'>
                    <h6 class="toolbar-color" data-id=${note.id}>color</h6>
                    </br>
                    <h6 class="toolbar-delete" data-id=${note.id}>delete</h6>
                </div>
            </div>
        </div>
        `).join("")
    }
}
new App()
