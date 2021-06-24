const NoteOptions = ({ showNote, setShowNote, saveNote }) => {
  console.log("SHow notre from OPtions", showNote);
  return (
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
  );
};
export default NoteOptions;
