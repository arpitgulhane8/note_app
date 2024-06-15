import React, { useState } from "react";
import Slidebar from "./Slidebar.jsx";
import Popup from "./Popup.jsx";
import Notearea from "./Notearea.jsx";
import "./main.css";

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [selectnote, setselectnote] = useState(null);
  const [newNote, setNewNote] = useState("");

  const addgroup = (newgroup) => {
    setpopupdata([...popupdata, newgroup]);
    setIsPopupOpen(false);
  };

  const handelselectnote = (group) => {
    setselectnote(group);
  };

  const addnote = (newText) => {
    if (!newText.trim() || !selectnote) return;
    const updatedGroups = popupdata.map((group) => {
      if (group.name === selectnote.name) {
        const updatedGroup = {
          ...group,
          notes: [...group.notes, { Text: newText, timestamp: new Date() }],
        };
        setselectnote(updatedGroup); // Update selectnote with the modified group
        return updatedGroup;
      }
      return group;
    });

    setpopupdata(updatedGroups);
    setNewNote("");
  };

  return (
    <div className="main-app">
      
      <div className={`appLyout ${isPopupOpen ? "blur" : ""}`}>
        <Slidebar
          className="Slidebar"
          onAddNotes={() => setIsPopupOpen(true)}
          onSelectNote={handelselectnote}
          notelist={popupdata}
        />

        <Notearea
          notename={selectnote}
          newNote={newNote}
          setNewNote={setNewNote}
          saveNewText={addnote}
        />
      </div>

      {isPopupOpen && (
        <div className="overlay">
          <Popup onClose={() => setIsPopupOpen(false)} onSave={addgroup} />
        </div>
      )}
   
    </div>
  );
}

export default Home;


