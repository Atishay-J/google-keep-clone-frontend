import { Palette } from "react-bootstrap-icons";
import { colors } from "./Colors";
import "./colorPicker.css";

const NoteColorPicker = ({ setNoteData }) => {
  return (
    <div className="noteColorPicker-Wrapper">
      <div className="noteColorPicker">
        {colors.map(({ color }, index) => (
          <div
            key={index}
            className="colorPickerPallete"
            style={{ background: color }}
            onClick={() =>
              setNoteData((prevData) => {
                return { ...prevData, color };
              })
            }
          ></div>
        ))}
      </div>

      <Palette className="noteColorPickerIcon" />
    </div>
  );
};
export default NoteColorPicker;
