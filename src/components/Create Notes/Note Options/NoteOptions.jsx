import { fakeServer } from "../../Utils/ServerCalls";
import { useNotes } from "../../Context/NotesContext";
import NoteColorPicker from "./Color Picker/NoteColorPicker";
import Labels from "./Label Picker/Labels";
import "./noteOptions.css";

const NoteOptions = ({ showNote, noteData, setShowNote, setNoteData }) => {
  const { dispatch } = useNotes();

  const saveNote = () => {
    fakeServer(noteData.title, noteData.note).then((res) => {
      console.log("Response from server", res);
      if (res.status === 200) {
        dispatch({
          type: "SAVE_NOTE",
          payload: {
            noteTitle: noteData.title,
            noteText: noteData.note,
            noteColor: noteData.color,
            label: noteData.label,
            isPinned: noteData.isPinned,
          },
        });
      }
      console.log("Server call Failed");
    });
    setNoteData({
      title: "",
      note: "",
      color: "",
      label: "",
      isPinned: false,
    });
    setShowNote(false);
  };
  return (
    <div
      className="notesOptions-Container"
      style={{ display: showNote ? "flex" : "none" }}
    >
      <div className="noteOptions">
        <Labels setNoteData={setNoteData} />
        <NoteColorPicker setNoteData={setNoteData} />
      </div>
      <div className="noteSave-Wrapper" onClick={saveNote}>
        <button className="noteSave">Save</button>
      </div>
    </div>
  );
};
export default NoteOptions;
