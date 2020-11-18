import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalEmail({ show, onHandleClose, chosenEmail }) {
    
    return (
        <div>
            <Modal show={show} onHide={onHandleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Gravatar Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>{chosenEmail}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onHandleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
