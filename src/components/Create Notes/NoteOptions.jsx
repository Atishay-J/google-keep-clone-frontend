import { fakeServer } from "../Utils/ServerCalls";
import { useNotes } from "../Context/NotesContext";

const NoteOptions = ({ showNote, noteData, setShowNote, setNoteData }) => {
  console.log("SHow notre from OPtions", showNote);

  const { dispatch } = useNotes();

  const saveNote = () => {
    fakeServer(noteData.title, noteData.note).then((res) => {
      console.log("Response from server", res);
      if (res.status === 200) {
        console.log("Note saved");
        dispatch({
          type: "SAVE_NOTE",
          payload: {
            noteTitle: noteData.title,
            noteText: noteData.note,
            isPinned: noteData.isPinned,
          },
        });
      }
      console.log("Server call FAilde");
    });
    setNoteData({
      title: "",
      note: "",
      isPinned: false,
    });
    setShowNote(false);
  };
  return (
    <div
      className="notesOptions"
      style={{ display: showNote ? "flex" : "none" }}
    >
      <div className="noteSaveOptions">
        <button className="noteSave noteOptionBtn" onClick={saveNote}>
          Close
        </button>
      </div>
    </div>
  );
};
export default NoteOptions;
