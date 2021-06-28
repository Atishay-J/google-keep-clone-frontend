import { useNotes } from "../Context/NotesContext";
import { Pin, PinFill, Trash } from "react-bootstrap-icons";
import "./noteCard.css";
import NoteColorPicker from "../Create Notes/Note Options/Color Picker/NoteColorPicker";

const NoteCard = ({ title, note, isPinned, color, label, index }) => {
  const { dispatch } = useNotes();

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
      <h3 className="noteCardNote">{note}</h3>
      <Trash
        className="trashIcon"
        onClick={() => dispatch({ type: "DELETE_NOTE", payload: { index } })}
      />
      <NoteColorPicker />
    </div>
  );
};
export default NoteCard;
