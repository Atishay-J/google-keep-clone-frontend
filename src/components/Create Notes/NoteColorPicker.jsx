import { useState } from "react";

const NoteColorPicker = ({ setNoteData }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colors = [
    { color: "red" },
    { color: "green" },
    { color: "pink" },
    { color: "yellow" },
    { color: "blue" },
    { color: "peru" },
  ];
  return (
    <div className="noteColorPicket-Wrapper">
      <div
        className="noteColorPicker"
        style={{ display: showColorPicker ? "flex" : "none" }}
      >
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

      <div
        className="noteColorPickerIcon"
        onPointerOver={() => {
          console.log("Mouse Aaaaayyaa");
          setShowColorPicker(true);
        }}
      >
        <h3>Icon</h3>
      </div>
    </div>
  );
};
export default NoteColorPicker;
