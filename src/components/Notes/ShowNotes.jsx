import { useNotes } from "../Context/NotesContext";
import RegularNotes from "./RegularNotes";
import PinnedNotes from "./PinnedNotes";
import "./notes.css";

const ShowNotes = () => {
  const { state } = useNotes();
  console.log(
    "Found Pinned",
    state?.find((note) => note.isPinned)
  );
  return (
    <div className="showNotes-Container">
      {state?.find((note) => note.isPinned) && <PinnedNotes />}

      <RegularNotes />
    </div>
  );
};

export default ShowNotes;
