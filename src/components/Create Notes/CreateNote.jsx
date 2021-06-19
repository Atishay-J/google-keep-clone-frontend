import { useState } from "react";
import "./createNotes.css";

const CreateNote = () => {
  const [showNote, setShowNote] = useState(false);
  const [showPlaceholders, setShowPlaceholders] = useState({
    titlePlaceholder: true,
    notePlaceholder: true,
  });

  const [noteData, setNoteData] = useState({ title: "", note: "" });

  const toggleNote = () => {
    console.log("Toggling Note");
    setShowNote(!showNote);
  };

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
      <h4
        onClick={() => setShowNote(false)}
        style={{ display: showNote ? "block" : "none" }}
      >
        Close
      </h4>
    </div>
  );
};
export default CreateNote;
