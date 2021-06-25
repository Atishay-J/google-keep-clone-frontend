import { Palette } from "react-bootstrap-icons";

import "./colorPicker.css";

const NoteColorPicker = ({ setNoteData }) => {
  const colors = [
    { color: "red" },
    { color: "green" },
    { color: "pink" },
    { color: "yellow" },
    { color: "blue" },
    { color: "peru" },
  ];
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
