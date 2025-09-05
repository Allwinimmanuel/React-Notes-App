import { useState } from 'react';
import './App.css';

function App() {
  // state to store input value
  const [note, setNote] = useState('');
  // state to store list of notes
  const [notes, setNotes] = useState([]);

  // function to add note
  const addNote = () => {
    if (note.trim() !== '') {
      setNotes([...notes, note]);
      setNote(''); // clear input after adding
    }
  };

  return (
    <div className="App">
      <h1>📝 React Notes App</h1>

      {/* Input and Button */}
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note here..."
      />
      <button onClick={addNote}>Add Note</button>

      {/* Notes List */}
      <ul>
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
