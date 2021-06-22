import { useNotes } from "../Context/NotesContext";
import RegularNotes from "./RegularNotes";
import PinnedNotes from "./PinnedNotes";

const ShowNotes = () => {
  const { state } = useNotes();
  console.log(
    "Found Pinned",
    state?.find((note) => note.isPinned)
  );
  return (
    <div className="showNotes-Container">
      {state?.find((note) => note.isPinned) && (
        <div className="pinnedNotes-Wrapper">
          <PinnedNotes />
        </div>
      )}

      <div className="regularNotes-Wrapper">
        <RegularNotes />
      </div>
    </div>
  );
};

export default ShowNotes;
