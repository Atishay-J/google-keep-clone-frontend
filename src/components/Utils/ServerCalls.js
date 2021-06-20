export const saveNote = ({
  noteTitle,
  noteText,
  label,
  isPinned,
  noteColor,
}) => {
  return { data: { noteTitle, noteText }, status: 200 };
};

export const getNotes = () => {
  return console.log("Notes fetched");
};
