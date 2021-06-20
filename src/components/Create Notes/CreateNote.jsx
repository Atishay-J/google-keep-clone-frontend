import { useEffect, useState } from "react";
import { useNotes } from "../Context/NotesContext";
import "./createNotes.css";

const CreateNote = () => {
  const [showNote, setShowNote] = useState(false);
  const [showPlaceholders, setShowPlaceholders] = useState({
    titlePlaceholder: true,
    notePlaceholder: true,
  });
  const [noteData, setNoteData] = useState({ title: "", note: "" });

  const { state, dispatch } = useNotes();

  useEffect(() => {
    console.log("state context", state);
  }, [state]);

  const togglePlaceholders = (note, placeholder) => {
    note.length > 0
      ? setShowPlaceholders({ ...showPlaceholders, [placeholder]: false })
      : setShowPlaceholders({ ...showPlaceholders, [placeholder]: true });
  };

  const takeNote = (e) => {
    const note = e.target.textContent;
    togglePlaceholders(note, "notePlaceholder");
    setNoteData({ ...noteData, note });
  };

  const takeTitle = (e) => {
    const title = e.target.textContent;
    togglePlaceholders(title, "titlePlaceholder");
    setNoteData({ ...noteData, title });
  };

  const saveNote = () => {
    console.log("Note saved");
    dispatch({
      type: "SAVE_NOTE",
      payload: { noteTitle: noteData.title, noteText: noteData.note },
    });
  };

  return (
    <div className="createNote-Container">
      <div
        className="noteTitleWrapper"
        style={{ display: showNote ? "block" : "none" }}
      >
        <div
          className="noteTitlePlaceholder"
          style={{
            display:
              showPlaceholders.titlePlaceholder === false ? "none" : "block",
          }}
        >
          Title
        </div>
        <div
          className="noteTitle"
          contentEditable="true"
          role="textbox"
          aria-placeholder="Title"
          onInput={(e) => takeTitle(e)}
        ></div>
      </div>
      <div className="textBoxWrapper" onFocus={() => setShowNote(true)}>
        <div
          className="noteTextBoxPlaceholder"
          style={{
            display:
              showPlaceholders.notePlaceholder === false ? "none" : "block",
          }}
        >
          Take a note...
        </div>
        <div
          className="noteTextBox"
          contentEditable="true"
          role="textbox"
          aria-multiline="true"
          aria-placeholder="Take a Note..."
          onInput={(e) => takeNote(e)}
        ></div>
      </div>
      <div
        className="notesOptions"
        style={{ display: showNote ? "flex" : "none" }}
      >
        <div className="noteSaveOptions">
          <h4
            className="noteClose noteOptionBtn"
            onClick={() => setShowNote(false)}
          >
            Close
          </h4>
          <h4 className="noteSave noteOptionBtn" onClick={saveNote}>
            Save
          </h4>
        </div>
      </div>
    </div>
  );
};
export default CreateNote;
