import React, { Component } from "react";
import NoteLists from "./components/NoteList";
import RegisterForm from "./components/RegisterForm";
import "./assets/App.css";
import CategoryList from "./components/CategoryList/CategoryList";
import Category from "./data/Category";
import ArrayNotes from "./data/Notes";

class App extends Component {
  constructor() {
    super();
    this.category = new Category();
    this.notes = new ArrayNotes();
  }

  render() {
    return (
      <section className="content">
        <RegisterForm
          createNote={this.notes.addNote.bind(this.notes)}
          category={this.category}
        />
        <main className="principal-content">
          <CategoryList
            category={this.category}
            addCategory={this.category.addCategory.bind(this.category)}
          />
          <NoteLists
            notes={this.notes}
            eraseNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    );
  }
}

export default App;
