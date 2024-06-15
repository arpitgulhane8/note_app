import React from "react";
import "./notearea.css";
import noteimg from "../assest/note_img.png"
import lock from "../assest/lock.png"
import vector from "../assest/Vector.png"


function Notearea({ notename, newNote, setNewNote, saveNewText }) {

  if (!notename) {
     //Render only the image if notename is null
    return (
      <div className="notearea_home">
        <img src={noteimg} alt="note_img" className="note_img" />
        <h1>Pocket Notes</h1>
        
        <p>Send and receive messages without keeping your phone online.
         Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
       
       <div className="encrypted"><img src={lock} alt="lockimg" className="lockimg"/><p>end-to-end encrypted</p></div>
      </div>
    );
  }

  return (
    <div className="notearea">
      <header className="header">
        <div
          className="header_initial"
          style={{ backgroundColor: notename ? notename.color : "" }}
        >
          {notename ? notename.initials : ""}
        </div>

        <div className="header_name">
          {notename ? notename.name : "Select a note group"}
        </div>
      </header>

      <div className="note_display">
        {notename &&
          notename.notes.map((note, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent:"space_between",marginLeft:"10px" }}
            >
      
              <p style={{ width: "30%" }}>
                {new Date(note.timestamp).toLocaleString()}
              </p>

              <p style={{ width: "70%", boxSizing: "border-box" }}>
                {note.Text}
              </p>
            </div>
          ))}
      </div>

      <footer className="note_input">
        <input
          value={newNote}
          type="text"
          onChange={(e) => setNewNote(e.target.value)}
          className="text_area"
          placeholder="Enter Your Text Here...."
        />

        <button className="add_btn" onClick={() => saveNewText(newNote)}>
          <img  style={{width:"10px",height:"10px"}} src={vector} alt="vector"/></button>
      </footer>
    </div>
  );
}

export default Notearea;

