const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click",()=> addNotes())

function getNotes() {
    return JSON.parse(localStorage.getItem('storedNotes') || '')   
}


function addNotes() {
    const notes = getNotes();
    const noteObject = {
        id : Math.floor(Math.random() * 10000),
        content: ""
    };

    const noteElement = createNoteElement(noteObject.id , noteObject.content)
    notesContainer.insertBefore(noteElement,addNoteButton);
    notes.push(noteObject)
    saveNotes(notes)
};

function createNoteElement(id,content){
    const element = document.createElement("textarea")
    element.classList.add('note')
    element.value = content;
    element.placeholder = 'Empty Sticky Note'

    element.addEventListener('change', () => {
        console.log(`this is the selected id ${id} and element : ${element.value}`)
        updateNotes(id, element.value);
    });

    element.addEventListener('dblclick', () => {
        const doDelete = confirm('are you sure you wish to delete this sticky note?')
        if (doDelete) {
            console.log(`this is the selected id ${id} and element : ${element.value}`)
            deleteNotes(id,element)
        }
   
    });

    return element;
   
}
function saveNotes(notes){
    localStorage.setItem('storedNotes',JSON.stringify(notes))
}

function updateNotes(id,newContent){
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id == id)[0];
    targetNote.content = newContent;
    console.log(`this is targetNote ${targetNote.id},   this is updated notes ${notes.id}`)
    saveNotes(notes);
}

function deleteNotes(id,element){
    const notes = getNotes().filter(note => { note.id =! id})
    saveNotes(notes);
    notesContainer.removeChild(element);
    console.log(`this is removed child ${element}`)

}

