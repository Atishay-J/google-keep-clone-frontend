import { useEffect, useState } from "react";
import { Tag, PlusCircle } from "react-bootstrap-icons";
import { useNotes } from "../../../Context/NotesContext";
import "./labels.css";

const Labels = ({ setNoteData }) => {
  const [showCreateLabel, setShowCreateLabel] = useState(false);
  const [showLabelList, setShowLabelList] = useState(false);
  const [newLabelName, setNewLabelName] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const { state, dispatch } = useNotes();

  const newLabelInput = (e) => {
    let value = e.target.value;
    setNewLabelName(value);
  };

  const saveNewLabel = () => {
    if (newLabelName === "") {
      return setShowCreateLabel(false);
    }
    dispatch({ type: "CREATE_LABEL", payload: { label: newLabelName } });
    setNewLabelName("");
    setShowCreateLabel(false);
  };

  const selectLabelName = (labelName) => {
    setNoteData((prevState) => {
      return { ...prevState, label: labelName };
    });
    setShowLabelList(false);
    setSelectedLabel(labelName);
  };

  useEffect(() => {
    setSelectedLabel("");
  }, [state.notes]);

  return (
    <div className="labels-Container">
      <div
        className="labelList-Wrapper"
        style={{ display: showLabelList ? "block" : "none" }}
      >
        <ol className="labelList">
          {state.labels.map((label, index) => (
            <li
              key={index}
              className="labelListItem"
              onClick={() => selectLabelName(label)}
            >
              {label}
            </li>
          ))}
        </ol>
        <div
          className="newLabelIcon-Wrapper"
          onClick={() => setShowCreateLabel((prevState) => !prevState)}
        >
          <PlusCircle className="newLabelIcon" />
          create new Label
        </div>
        <div
          className="newLabelInput-Wrapper"
          style={{ display: showCreateLabel ? "flex" : "none" }}
        >
          <input
            type="text"
            className="newLabelInput"
            placeholder="Enter Label name..."
            value={newLabelName}
            onChange={(e) => newLabelInput(e)}
          />
          <button className="newLabelInputBtn" onClick={saveNewLabel}>
            {newLabelName ? "Save" : "Cancel"}
          </button>
        </div>
      </div>
      <div
        className="labelButton"
        onClick={() => setShowLabelList((prevState) => !prevState)}
      >
        <Tag className="labelIcon" />
        {selectedLabel && <p className="selectedLabelName">{selectedLabel}</p>}
      </div>
    </div>
  );
};
export default Labels;
