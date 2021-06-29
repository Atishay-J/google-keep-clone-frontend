import { useNotes } from "../Context/NotesContext";
import RegularNotes from "./RegularNotes";
import PinnedNotes from "./PinnedNotes";
import "./notes.css";

const ShowNotes = () => {
  const { state } = useNotes();

  return (
    <div className="showNotes-Container">
      {state.notes?.find((note) => note.isPinned) && <PinnedNotes />}

      <RegularNotes />
    </div>
  );
};

export default ShowNotes;
