import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

class NoteLists extends Component {

  constructor(){
    super();
    this.state = {notes:[]}

    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount(){
    this.props.notes.subscribe(this._newNotes);
  }

  componentWillUnmount(){
    this.props.notes.unsubscribe(this._newNotes);
  }

  _newNotes(notes){
    this.setState({...this.state, notes});
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, noteIndex) => {
          return (
            <li className="note-list_iten" key={noteIndex}>
              <NoteCard
                index={noteIndex}
                title={note.title}
                text={note.text}
                eraseNote={this.props.eraseNote}
                category={note.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteLists;
