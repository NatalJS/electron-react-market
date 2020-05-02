import React, { useState } from "react";

const { ipcRenderer } = window;

export default function Add() {
  const [item, setItem] = useState({ name: "", value: "" });
  const addItem = () => {
    ipcRenderer.send("item:add", item);
  };
  return (
    <div className="form">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Item name"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
        <input
          className="input"
          type="number"
          placeholder="value"
          value={item.value}
          onChange={(e) => setItem({ ...item, value: e.target.value })}
        ></input>
        </div>
        </div>
      <button className="button is-primary" onClick={addItem}> add item</button>
    </div>
  );
}
