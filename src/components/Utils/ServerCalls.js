export const fakeServer = (noteTitle, noteText) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        { data: { noteTitle, noteText }, status: 200 },
        console.log("FullFIlleeeedd")
      );
    }, 1000);
  });
};

export const saveNote = async ({
  noteTitle,
  noteText,
  label,
  isPinned,
  noteColor,
}) => await fakeServer(noteTitle, noteText);

export const getNotes = () => {
  return console.log("Notes fetched");
};
