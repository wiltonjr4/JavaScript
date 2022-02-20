import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

class NoteLists extends Component {

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="note-list_iten" key={index}>
              <NoteCard title = {note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteLists;
