import { createContext, useContext, useReducer } from "react";
import { getNotes, saveNote } from "../Utils/ServerCalls";

const initState = { notes: [], labels: [] };

const notesReducer = (state, action) => {
  // console.log("Action Called", action);
  // console.log("state from context", state);

  switch (action.type) {
    case "SAVE_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            noteTitle: action.payload.noteTitle,
            noteText: action.payload.noteText,
            label: action.payload.label,
            isPinned: action.payload.isPinned,
            noteColor: action.payload.noteColor,
          },
        ],
      };
    case "TOGGLE_PIN":
      console.log("Toggle Pinned Called", action.payload);

      const curNote = state.notes[action.payload.index];

      let filteredNotes = state.notes.filter(
        (note, index) => index !== action.payload.index
      );

      return {
        ...state,
        notes: [
          ...filteredNotes,
          { ...curNote, isPinned: action.payload.isPinned },
        ],
      };

    case "DELETE_NOTE":
      let remainingNotes = state.notes.filter(
        (note, index) => index !== action.payload.index
      );

      return { ...state, notes: remainingNotes };

    case "CREATE_LABEL":
      console.log("New Label Created", action.payload);
      return { ...state, labels: [...state.labels, action.payload.label] };

    case "CHANGE_NOTE_COLOR":
      let curIndex = action.payload.index;

      state.notes[curIndex].noteColor = action.payload.color;
      return {
        ...state,
      };

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
