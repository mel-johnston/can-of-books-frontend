import React from 'react';
import './UpdateBookForm.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class UpdateBookForm extends React.Component {
  render() {
    return (
      <Modal className='Modal' style={{ textAlign: "center" }} show={this.props.showUpdateForm} onHide={this.props.closeModal}>
        <Modal.Header closeButton style={{color: "black",}}>New Book</Modal.Header>
        <form onSubmit={this.props.handleUpdateBookSubmit}>
          <label htmlFor='title'>Title</label>
          <input required type="text" defaultValue={this.props.bookInfo.title} placeholder='Title' name='title' id='title' />
          <label htmlFor='description'>Description</label>
          <input required type="text"  defaultValue={this.props.bookInfo.description} placeholder='Description' name='description' id='description' />
          <label htmlFor='status'>Status</label>
          <input required type="text" defaultValue={this.props.bookInfo.status} placeholder='Status' name='status' id='status' />
          <Button type="submit" className="mt-3" variant="outline-dark"> Add new</Button>
        </form>
        <Modal.Footer style={{ margin: '0 auto' }}></Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateBookForm;



