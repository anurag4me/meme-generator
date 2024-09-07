import React, { useState } from "react";
import Draggable from "react-draggable";

export default function Text() {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to edit!");
  return (
    <Draggable>
      {editMode ? (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onDoubleClick={() => setEditMode(false)}
          onKeyDown={(e)=>e.key=="Enter" && setEditMode(false)}
        />
      ) : (
        <h2 onDoubleClick={() => setEditMode(true)}>{val}</h2>
      )}
    </Draggable>
  );
}
