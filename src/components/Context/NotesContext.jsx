import { createContext, useContext, useReducer } from "react";
import { getNotes, saveNote } from "../Utils/ServerCalls";

const initState = [];

const notesReducer = (state, action) => {
  console.log("Action Called", action);
  console.log("state from context", state);

  switch (action.type) {
    case "SAVE_NOTE":
      return [
        ...state,
        {
          noteTitle: action.payload.noteTitle,
          noteText: action.payload.noteText,
          label: action.payload.label,
          isPinned: action.payload.isPinned,
          noteColor: action.payload.noteColor,
        },
      ];
    case "TOGGLE_PIN":
      console.log("Toggle Pinned Called", action.payload);
      const curNote = state[action.payload.index];
      const filteredNotes = state.filter(
        (note, index) => index !== action.payload.index
      );

      console.log("Current Notes", curNote);

      console.log("Filtered Notes", filteredNotes);

      return [
        ...filteredNotes,
        { ...curNote, isPinned: action.payload.isPinned },
      ];

    default:
      return state;
  }
};

export const NotesContext = createContext();
export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
