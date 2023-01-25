import React from 'react';
import './NewBookForm.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class NewBookForm extends React.Component {
  render() {
    return (
      <Modal className='Modal' style={{ textAlign: "center" }} show={this.props.showForm} onHide={this.props.closeModal}>
        <Modal.Header closeButton style={{color: "black",}}>New Book</Modal.Header>
        <form onSubmit={this.props.handleNewBookSubmit}>
          <label htmlFor='title'>Title</label>
          <input required type="text" placeholder='Title' name='title' id='title' />
          <label htmlFor='description'>Description</label>
          <input required type="text" placeholder='Description' name='description' id='description' />
          <label htmlFor='status'>Status</label>
          <input required type="text" placeholder='Status' name='status' id='status' />
          <Button type="submit" className="mt-3" variant="outline-dark"> Add new</Button>
        </form>
        <Modal.Footer style={{ margin: '0 auto' }}></Modal.Footer>
      </Modal>
    )
  }
}

export default NewBookForm;



