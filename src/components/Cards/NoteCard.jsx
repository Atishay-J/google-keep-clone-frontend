import { useNotes } from "../Context/NotesContext";
import "./noteCard.css";
const NoteCard = ({ title, note, isPinned, color, label, index }) => {
  const { state, dispatch } = useNotes();

  return (
    <div className="noteCardContainer" style={{ background: color }}>
      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_PIN",
            payload: { isPinned: !isPinned, index },
          })
        }
      >
        {isPinned ? "unpin" : "pin"}
      </button>

      <h1 className="noteCardTitle">{title}</h1>
      <h3 className="noteCardNote">{note}</h3>
    </div>
  );
};
export default NoteCard;
