import React, { useState } from 'react';

function Home(props) {
  const [text, setText] = useState('')

  function onChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(text)
    setText("")
  }

  return (
    <React.Fragment>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
    </React.Fragment>
  );
}

export default Home;