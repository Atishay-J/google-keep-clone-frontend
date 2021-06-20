import { createContext, useContext, useReducer } from "react";
import { getNotes, saveNote } from "../Utils/ServerCalls";

const initState = [
  {
    noteTitle: "",
    noteText: "",
    label: "",
    isPinned: false,
    noteColor: "",
  },
];

const notesReducer = (state, action) => {
  console.log("Action Called", action);
  console.log("state from context", state);

  switch (action.type) {
    case "SAVE_NOTE": {
      const response = saveNote(action.payload);

      if (response.status === 200) {
        console.log("Server call succeed");
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
      }
      return state;
    }
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
