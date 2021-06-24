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
    <div className="noteColorPicker">
      {colors.map(({ color }, index) => {
        return (
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
        );
      })}
    </div>
  );
};
export default NoteColorPicker;
