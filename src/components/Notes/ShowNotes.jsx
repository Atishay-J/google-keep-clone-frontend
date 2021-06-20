import { useNotes } from "../Context/NotesContext";
import { NoteCard } from "../index";

const ShowNotes = () => {
  const { state } = useNotes();
  return (
    <div className="showNotes-Container">
      {state.map((item) => (
        <NoteCard
          title={item.noteTitle}
          note={item.noteText}
          label={item.label}
          color={item.noteColor}
          isPinned={item.isPinned}
        />
      ))}
    </div>
  );
};

export default ShowNotes;
