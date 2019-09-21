import React, { Component } from 'react';

class CreateDeck extends Component {


  render() {
    return (
      <form className="demoForm">
       <h3>Create a Flashcard Deck</h3>
       <div className="form-group">
         <label htmlFor="label">Deck Name</label>
         <input className="form-control"
           name="label" />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description</label>
         <textarea className="form-control"
           name="description" />
       </div>
       <button type="submit" className="btn btn-primary" onClick={this.props.editDeck}>
          Create Deck
       </button>
     </form>
    );
  }

}

export default CreateDeck;