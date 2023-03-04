export default class NotesAPI {
    static getALLNotes() {
        const notes = JSON.parse(localStorage.getItem('notesapp-notes') || '[]')
        
        return notes.sort((a,b) => {
            return new Date(a.updated) > new Date(b.update) ? -1 : 1;
        })
    }

    static saveNote(noteTosave){
        const notes = NotesAPI.getALLNotes();

        const exisiting = notes.find(note => note.id == noteTosave.id);
        if(exisiting){
            exisiting.title = noteTosave.title;
            exisiting.body = noteTosave.body;
            exisiting.update = new Date().toDateString();
        }else {
        noteTosave.id = Math.floor(Math.random() * 10000);
        noteTosave.updated = new Date().toISOString();
        notes.push(noteTosave);
    }
        localStorage.setItem("notesapp-notes",JSON.stringify(notes));
    }



    
    static deleteNote(id){
        const notes = NotesAPI.getALLNotes();
        const newNotes = notes.filter(note => note.id != id)
        localStorage.setItem("notesapp-notes",JSON.stringify(newNotes))
    }
}