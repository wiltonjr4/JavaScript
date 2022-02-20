import React, { Component } from "react";
import "./style.css";

class RegisterForm extends Component {
  
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="register-form"
        onSubmit={this._createNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Title"
          className="register-form_input"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Text your note..."
          className="register-form_input"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="register-form_input register-form_submit">
          Create Note
        </button>
      </form>
    );
  }
}

export default RegisterForm;
