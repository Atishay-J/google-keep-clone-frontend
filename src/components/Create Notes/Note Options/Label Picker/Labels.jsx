import { useState } from "react";
import { Tag, PlusCircle } from "react-bootstrap-icons";
import { useNotes } from "../../../Context/NotesContext";
import "./labels.css";

const Labels = () => {
  const [showCreateLabel, setShowCreateLabel] = useState(false);
  const [newLabelName, setNewLabelName] = useState("");
  const { state, dispatch } = useNotes();

  const newLabelInput = (e) => {
    let value = e.target.value;
    setNewLabelName(value);
  };

  const saveNewLabel = () => {
    if (newLabelName === "") {
      return setShowCreateLabel(false);
    }
    console.log("Saveddd");
    dispatch({ type: "CREATE_LABEL", payload: { label: newLabelName } });
    setNewLabelName("");
  };

  return (
    <div className="labels-Container">
      <div className="labelList-Wrapper">
        <ol className="labelList">
          {state.labels.map((label, index) => (
            <li key={index} className="labelListItem">
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
      <div className="label-button">
        <Tag className="labelIcon" />
      </div>
    </div>
  );
};
export default Labels;
