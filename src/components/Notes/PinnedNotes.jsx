import { useNotes } from "../Context/NotesContext";
import { NoteCard } from "../index";

const PinnedNotes = () => {
  const { state } = useNotes();
  return (
    <div className="pinnedNotes-Container">
      <h1>Pinned </h1>
      <div className="notesWrapper">
        {state?.map(
          (note, index) =>
            note.isPinned && (
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
export default PinnedNotes;
