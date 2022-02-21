import React, { Component } from "react";
import "./style.css";
import {ReactComponent as DeletePNG} from "../../assets/img/delete.svg"

class NoteCard extends Component {
  
  erase() {
    const index = this.props.index;
    this.props.eraseNote(index);
  }
  
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">{this.props.title}</h3>
          <DeletePNG onClick={this.erase.bind(this)}/>
          <h4>{this.props.category}</h4>
        </header>
        <p className="note-card_text">{this.props.text}</p>
      </section>
    );
  }
}

export default NoteCard;
