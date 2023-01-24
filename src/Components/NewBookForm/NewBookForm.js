import React from 'react';
import './NewBookForm.css'
import Button from 'react-bootstrap/Button';

class NewBookForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleNewBookSubmit}>
        <label htmlFor='title'>Title</label>
        <input type="text" placeholder='Title' name='title' id='title' />
        <label htmlFor='description'>Description</label>
        <input type="text" placeholder='Description' name='description' id='description' />
        <label htmlFor='status'>Status</label>
        <input type="text" placeholder='Status' name='status' id='status' />
        <Button type="submit" className="mt-3" variant="outline-light"> Add new</Button>
      </form>
    )
  }
}

export default NewBookForm;