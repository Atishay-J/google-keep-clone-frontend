const NoteCard = ({ title, note, isPinned, color, label }) => {
  return (
    <div className="noteCardContainer">
      <h1>{title}</h1>
      <h3>{note}</h3>
    </div>
  );
};
export default NoteCard;
