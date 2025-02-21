import { useState } from "react";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [note, setNote] = useState<string>("");
  const [edit, setEdit] = useState<number>(-1);
  const [newNote, setNewNote] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleNewInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(e.target.value);
  };

  const createNotes = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (note) {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  // Create a function to handle the deleting of notes
  const handleDelete = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Create a function to handle the edit
  const handleEdit = (index:number) => {
    setEdit(index);
  }

  const handleSave = (index: number) => {
    const list = [...notes];
    list[index] = newNote;
    setNotes(list);
    setEdit(-1);
  }

  return (
    <div>
      <h1>Notes</h1>

      <div className="container">
        <form onSubmit={createNotes}>
          <h2>Create note</h2>
          <textarea
            onChange={handleInput}
            className="create"
            value={note}
          ></textarea>
          <button type="submit">Add</button>
        </form>

        <div className="container">
          <div className="container1">
            <h2>My Notes</h2>
            {notes.map((note, index) => (
              <div key={index} className="note">
                {(edit == index) ?
                (<><input onChange={handleNewInput} defaultValue={note}/>
                <FaSave className="space" onClick={() => handleSave(index)} /></>) :
                (<>{note}
                  <FaEdit className="space" onClick={() => handleEdit(index)} />{" "}</>)}
                <FaTrashAlt
                  onClick={() => handleDelete(index)}
                  className="space"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
