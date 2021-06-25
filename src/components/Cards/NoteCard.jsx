import { useNotes } from "../Context/NotesContext";
import { Pin, PinFill } from "react-bootstrap-icons";
import "./noteCard.css";

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
    </div>
  );
};
export default NoteCard;
