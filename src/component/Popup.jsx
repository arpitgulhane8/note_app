import React from "react";
import { useState } from "react";
import './popup.css'
function Popup({ onSave, onClose }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#B38BFA");

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const getInitials = (name) => {
    const words = name.trim().split(" ");
    const initials = words
      .filter(word => word.length > 0) // Filter out empty words
      .slice(0, 2)
      .map(word => word[0].toUpperCase())
      .join("");
    return initials;
  };
  
  const saveGroup = () => {
    if (!name.trim()) return;
    const newGroup = {
      name,
      color,
      notes: [],
      initials:getInitials(name)
    };
    onSave(newGroup)
    onClose()
  };

  return (
    <div
      className="popup"
    >
      <p className="popup_note">Create New Notes group</p>
      <div className="pgroup_name">
       <label className="pgroup_label">Group Name</label> 
        <input
        className="pinput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your group name...."
        />
      </div>
      <div className="pcolor_picker">
        <label className="pcolor_option">Color Option</label>
        {colors.map((colors, index) => (
          <button className="pcolor_btn"
            key={index}
            value={colors}
            style={{
              backgroundColor: colors,
            }}
            onClick={() => setColor(colors)}
          />
        ))}
      </div>
      <button
        onClick={saveGroup}
        className="pcreate"
      >
        Create
      </button>
    </div>
  );
}

export default Popup;
