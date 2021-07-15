import { useNotes } from "../Context/NotesContext";
import RegularNotes from "./RegularNotes";
import PinnedNotes from "./PinnedNotes";
import "./notes.css";

const ShowNotes = () => {
  const { state } = useNotes();

  return (
    <div className="showNotes-Container">
      {state.notes?.find((note) => note.isPinned) && <PinnedNotes />}

      {state.notes.length ? (
        <RegularNotes />
      ) : (
        <h2 className="noNotesAvailable-Heading">No notes to show</h2>
      )}
    </div>
  );
};

export default ShowNotes;
