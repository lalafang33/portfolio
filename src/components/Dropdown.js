import React, { useState } from "react";

export default function Dropdown({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        Dropdown
      </button>
      {open && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}