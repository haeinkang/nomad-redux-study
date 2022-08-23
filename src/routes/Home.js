import React, { useState } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import ToDo from '../ToDo';

function Home(props) {
  const [text, setText] = useState('')

  function onChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    // props.dispatch(addToDo(text))
    props.addToDo(text)
    setText("")
  }

  return (
    <React.Fragment>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {props.toDos.map((toDo, index) => 
          <ToDo key={index} toDo={toDo} />  
        )}
      </ul>
    </React.Fragment>
  );
}

/**
 * @param {*} state 
 * @returns Home 컴포넌트에 props로써 데이터 전달 
 */
function mapStateToProps(state) {
  return { toDos: state }
}

// 이렇게하면 Home 컴포넌트가 
// 직접 dispatch나 action Creators를 처리할 필요가 없어진다.
function mapDispatchToProps(dispatch) {
  return { 
    addToDo: (text) => dispatch(actionCreators.addToDo(text)), 
  }
}

// connect는 Home으로 보내는 props에 추가될 수 있도록 허용해 준다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);