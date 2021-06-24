import { useRef, useState } from "react";
import { useNotes } from "../Context/NotesContext";
import "./createNotes.css";

import { fakeServer } from "../Utils/ServerCalls";

import NoteOptions from "./NoteOptions";

const CreateNote = () => {
  const [showNote, setShowNote] = useState(false);

  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
    isPinned: false,
  });

  let noteRef = useRef(null);

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
  };

  const adjustNoteHeight = () => {
    noteRef.style.height = "15px";
    let scrollHeight = noteRef.scrollHeight;
    noteRef.style.height = scrollHeight + "px";
  };

  return (
    <div className="createNote-Container">
      <div
        className="crateNotePin-wrapper"
        style={{ display: showNote ? "block" : "none" }}
      >
        <button
          onClick={() =>
            setNoteData({ ...noteData, isPinned: !noteData.isPinned })
          }
        >
          {noteData.isPinned ? "Pinned" : "Pin"}
        </button>
      </div>

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
        saveNote={saveNote}
      />
    </div>
  );
};
export default CreateNote;
