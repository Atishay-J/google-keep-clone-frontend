const ToggleNotePin = ({ showNote, setNoteData, noteData }) => {
  return (
    <div
      className="crateNotePin-wrapper"
      style={{ display: showNote ? "block" : "none" }}
    >
      <button
        onClick={() =>
          setNoteData((prevData) => {
            return { ...prevData, isPinned: !prevData.isPinned };
          })
        }
      >
        {noteData.isPinned ? "Pinned" : "Pin"}
      </button>
    </div>
  );
};
export default ToggleNotePin;
