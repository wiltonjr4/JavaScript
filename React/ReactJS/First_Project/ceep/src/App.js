import React, { Component } from "react";
import NoteLists from "./components/NoteList";
import RegisterForm from "./components/RegisterForm";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = { notes: newArrayNotes };
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createNote={this.createNote.bind(this)} />
        <NoteLists notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
