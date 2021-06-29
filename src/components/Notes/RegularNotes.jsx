import { useNotes } from "../Context/NotesContext";
import { NoteCard } from "../index";
const RegularNotes = () => {
  const { state } = useNotes();
  return (
    <div className="regularNotes-Container">
      <h1 className="notesSectionTitle">Others</h1>
      <div className="notesWrapper">
        {state.notes?.map(
          (note, index) =>
            note.isPinned === false && (
              <NoteCard
                key={index}
                title={note.noteTitle}
                note={note.noteText}
                label={note.label}
                color={note.noteColor}
                isPinned={note.isPinned}
                index={index}
              />
            )
        )}
      </div>
    </div>
  );
};
export default RegularNotes;
