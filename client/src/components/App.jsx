import React, { useState, useEffect } from 'react';
import Filter from "./Filter"
import Form from "./Form"
import List from "./List"
import apis from "../api"
import '../style/App.css';


function App() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [search, setSearch] = useState("")
  const [comments, setComments] = useState([])


  useEffect(() => {
    apis.getAllComments().then((res) => {
      console.log(res.data.data)
      let comments = res.data.data
      let customComments = comments.map(c => (
        { email: c.email, message: c.message }
      )
      )
      setComments(customComments)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Form onEmailChange={setEmail} onMessageChange={setMessage} email={email} message={message} comments={comments} onHandleComments={setComments} />
      <Filter onSearchChange={setSearch} />
      <List comments={comments} search={search} />
    </div>
  );
}

export default App;
