import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";

export default function App() {
  const [note, setNote] = useState("");
  const [font, setFont] = useState("system-ui");

  function handleNoteChange(newNote) {
    setNote(newNote);
    localStorage.setItem("note", newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
    localStorage.setItem("font", newFont)
  }

  function handleDeleteLocalStorage() {
    localStorage.removeItem("note");
    localStorage.removeItem("font");
    setNote("");
    setFont("system-ui");
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
      <button className="btn" onClick={handleDeleteLocalStorage}>Lösche local storage</button>
    </div>
  );
}
