import React, { useState } from 'react';
import apis from '../api'
import Button from "react-bootstrap/Button";
import "../style/Form.css"


export default function Form({ onEmailChange, onMessageChange, email, message, comments, onHandleComments }) {
    const [isActive, setActive] = useState("false");
    const [alert, setAlert] = useState()
    const [validations, setValidations] = useState([])

    const commentInsertion = () => {
        apis.insertComment({ email, message }).then((res) => {
            console.log(res.data.message)
            setActive(true);
            setValidations([])
            setAlert(res.data.message)
            onHandleComments([...comments, { email, message }])
        }).catch(err => {
            setAlert()
            console.log(err.response.data.errors[0])
            if (err.response.data.validation == false) {
                setValidations(err.response.data.errors)
            } else {
                setValidations([])
                setActive(false);
                setAlert(err.response.data.error)
            }

        })
    }

    return (
        <div className="form">
            <input className="email" type="text" placeholder=" Email" onChange={(e) => onEmailChange(e.target.value)} />
            <input className="message" type="text" placeholder=" Message" onChange={(e) => onMessageChange(e.target.value)} />
            <div>
                <Button variant="primary" className="submit" onClick={commentInsertion}>SUBMIT</Button>
            </div>
            <div className={isActive ? "success" : "fail"}>{alert}</div>
            <ul>
                {
                    validations.map((validation, index) => <li className="validations" key={index}>{validation}</li>)
                }
            </ul>

        </div>
    )
}
