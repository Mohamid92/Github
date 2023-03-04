import NotesAPI from "./NotesAPI.js"
import NotesView from "./NotesView.js";

const app = document.getElementById('app')
const view = new NotesView(app,{onNoteAdd(){
    console.log('Lets add new Note')
},
onNoteEdit(newTitle,newBody){
    console.log(newTitle,newBody)
}})



// NotesAPI.deleteNote(2815);
// console.log(NotesAPI.getALLNotes())