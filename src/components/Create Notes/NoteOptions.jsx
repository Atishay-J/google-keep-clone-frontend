const NoteOptions = ({ showNote, saveNote }) => {
  console.log("SHow notre from OPtions", showNote);
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
