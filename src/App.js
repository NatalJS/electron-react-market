import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
// import "./App.scss";
const { ipcRenderer } = window;

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    ipcRenderer.on("item:add", (e, item) => {
      setList((oldList) => [...oldList, item]);
    });
  }, []);
  return (
    <div>
      <h1 className="title">Shopping List</h1>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          
            {list.map((item) => (
              <>
              <tr>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
