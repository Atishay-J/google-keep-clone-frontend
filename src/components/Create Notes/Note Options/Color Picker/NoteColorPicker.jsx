import { Palette } from "react-bootstrap-icons";
import { colors } from "./Colors";
import "./colorPicker.css";
import { useNotes } from "../../../Context/NotesContext";

const NoteColorPicker = ({ setNoteData, index }) => {
  const { dispatch } = useNotes();

  const setNoteColor = (color) => {
    setNoteData
      ? setNoteData((prevState) => {
          return { ...prevState, color };
        })
      : dispatch({ type: "CHANGE_NOTE_COLOR", payload: { color, index } });
  };

  return (
    <div className="noteColorPicker-Wrapper">
      <div className="noteColorPicker">
        {colors.map(({ color }, index) => (
          <div
            key={index}
            className="colorPickerPallete"
            style={{ background: color }}
            onClick={() => setNoteColor(color)}
          ></div>
        ))}
      </div>

      <Palette className="noteColorPickerIcon" />
    </div>
  );
};
export default NoteColorPicker;
