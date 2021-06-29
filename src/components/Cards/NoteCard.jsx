import { useNotes } from "../Context/NotesContext";
import { Pin, PinFill, Trash, Tag } from "react-bootstrap-icons";
import "./noteCard.css";
import NoteColorPicker from "../Create Notes/Note Options/Color Picker/NoteColorPicker";

const NoteCard = ({ title, note, isPinned, color, label, index }) => {
  const { dispatch } = useNotes();

  console.log("State Label", label);

  return (
    <div className="noteCardContainer" style={{ background: color }}>
      <div
        className="notePin-Wrapper"
        onClick={() =>
          dispatch({
            type: "TOGGLE_PIN",
            payload: { isPinned: !isPinned, index },
          })
        }
      >
        {isPinned ? (
          <PinFill className="notePinIcon" />
        ) : (
          <Pin className="notePinIcon" />
        )}
      </div>

      <h1 className="noteCardTitle">{title}</h1>
      <p className="noteCardNote">{note}</p>
      <div className="noteCardOptions-Container">
        <div className="noteCardOptions">
          <div className="labelButton">
            <Tag className="labelIcon" />
            {label && <p className="selectedLabelName">{label}</p>}
          </div>
          <NoteColorPicker index={index} />
        </div>
        <Trash
          className="trashIcon"
          onClick={() => dispatch({ type: "DELETE_NOTE", payload: { index } })}
        />
      </div>
    </div>
  );
};
export default NoteCard;
