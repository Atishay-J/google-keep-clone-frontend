import { useRef, useState } from "react";
import "./createNotes.css";

import NoteOptions from "./Note Options/NoteOptions";
import ToggleNotePin from "./Note Options/ToggleNotePin";

const CreateNote = () => {
  const [showNote, setShowNote] = useState(false);
  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
    color: "",
    isPinned: false,
  });

  let noteRef = useRef(null);

  const adjustNoteHeight = () => {
    noteRef.style.height = "15px";
    let scrollHeight = noteRef.scrollHeight;
    noteRef.style.height = scrollHeight + "px";
  };

  return (
    <div
      className="createNote-Container"
      style={{ background: noteData.color }}
    >
      <ToggleNotePin
        showNote={showNote}
        noteData={noteData}
        setNoteData={setNoteData}
      />
      <input
        className="noteTitleInput"
        style={{ display: showNote ? "block" : "none" }}
        type="text"
        placeholder="Title.."
        value={noteData.title}
        onChange={(e) =>
          setNoteData((prevData) => {
            return { ...prevData, title: e.target.value };
          })
        }
      />
      <div className="noteBody-Wrapper" onFocus={() => setShowNote(true)}>
        <textarea
          className="noteBodyInput"
          placeholder="Take a note..."
          value={noteData.note}
          ref={(ref) => (noteRef = ref)}
          onChange={(e) =>
            setNoteData((prevData) => {
              adjustNoteHeight();
              return { ...prevData, note: e.target.value };
            })
          }
        />
      </div>
      <NoteOptions
        showNote={showNote}
        setShowNote={setShowNote}
        noteData={noteData}
        setNoteData={setNoteData}
      />
    </div>
  );
};
export default CreateNote;
