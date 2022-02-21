import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { category: [] };

    this._newCategory = this._newCategory.bind(this);
  }

  componentDidMount() {
    this.props.category.subscribe(this._newCategory);
  }

  componentWillUnmount() {
    this.props.category.unsubscribe(this._newCategory);
  }

  _newCategory(category) {
    this.setState({ ...this.state, category });
  }

  _handleInputEvent(event) {
    if (event.key === "Enter") {
      let categoryValue = event.target.value;
      this.props.addCategory(categoryValue);
    }
  }

  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {this.state.category.map((category, index) => {
            return (
              <li key={index} className="category-list_iten">
                {category}
              </li>
            );
          })}
        </ul>

        <input
          type="text"
          className="caregory-list_input"
          placeholder="Add Category"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
