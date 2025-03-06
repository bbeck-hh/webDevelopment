import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";

export default function App() {
  const [note, setNote] = useState("");
  const [font, setFont] = useState("system-ui");

  // react hook useLocalStorageState
  const [noteLocalStorage, setNoteLocalStorage] = useLocalStorageState("noteReact", "");
  const [fontLocalStorage, setFontLocalStorage] = useLocalStorageState("fontReact", "serif");

  function handleNoteChange(newNote) {
    setNote(newNote);
    localStorage.setItem("note", newNote);
    // React style
    setNoteLocalStorage(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
    localStorage.setItem("font", newFont)
    // React style
    setFontLocalStorage(newFont);
  }

  function handleDeleteLocalStorage() {
    localStorage.removeItem("note");
    localStorage.removeItem("font");
    setNote("");
    setFont("system-ui");
    // React style
    localStorage.removeItem("noteReact");
    localStorage.removeItem("fontReact");
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
      <button className="btn" onClick={handleDeleteLocalStorage}>Lösche local storage</button>
      <button className="btn" onClick={handleDeleteLocalStorage}>Lösche local storage React</button>
    </div>
  );
}
