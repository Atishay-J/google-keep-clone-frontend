import { Pin, PinFill } from "react-bootstrap-icons";
import "./noteOptions.css";
const ToggleNotePin = ({ showNote, setNoteData, noteData }) => {
  return (
    <div
      className="notePin-Wrapper"
      style={{ display: showNote ? "block" : "none" }}
      onClick={() =>
        setNoteData((prevData) => {
          return { ...prevData, isPinned: !prevData.isPinned };
        })
      }
    >
      {noteData.isPinned ? (
        <PinFill className="notePinIcon" />
      ) : (
        <Pin className="notePinIcon" />
      )}
    </div>
  );
};
export default ToggleNotePin;
