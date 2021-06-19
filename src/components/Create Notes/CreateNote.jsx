import { useState } from "react";
import "./createNotes.css";

const CreateNote = () => {
  const [showPlaceholders, setShowPlaceholders] = useState({
    titlePlaceholder: true,
    notePlaceholder: true,
  });

  const [noteData, setNoteData] = useState({ title: "", note: "" });

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
      <div className="noteTitleWrapper">
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
      <div className="textBoxWrapper">
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
    </div>
  );
};
export default CreateNote;
