import React, { useState } from 'react'
import ModalEmail from "./ModalEmail"
import crypto from 'crypto';

import "../style/List.css";

export default function List({ comments, search }) {
    const [show, setShow] = useState(false);
    const [chosenEmail, setChosenEmail] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (email) => {
        setChosenEmail(email)
        setShow(true)
    }

    const filterData = () => {
        return comments.filter((comment) => comment.email.toLowerCase().includes(search.toLowerCase())).
            map((comment, index) => {
                let imgStr = crypto.createHash('md5')
                    .update(comment.email)
                    .digest('hex');
                return (
                    <li className="comments-item" key={index}>
                        <img onClick={() => handleShow(comment.email)} className="img" src={`https://www.gravatar.com/avatar/${imgStr}`} />
                        <div>
                            <span className="email">{comment.email}</span>
                            <span className="message">{comment.message}</span>
                        </div>
                    </li>
                )
            })
    }

    return (
        <div>
            <ul className="list">
                {filterData()}
            </ul>
            <ModalEmail show={show} onHandleClose={handleClose} chosenEmail={chosenEmail} />

        </div>
    )
}
