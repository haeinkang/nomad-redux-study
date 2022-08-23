import React from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'

function ToDo({ toDo, onClickDel }) {
  
  // const onClickDelete = (id) => {
  //   deleteTodo(id)
  // }

  return (
    <li>
      {`${toDo.id} - ${toDo.text}`}
      <button 
        // onClick={() => onClickDelete(toDo.id)}
        onClick={onClickDel}
      >DEL</button>
    </li>
  );
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} ownProps : the ownProps passed to the connected component 
 * @returns 
 */
function mapDispatchToProps(dispatch, ownProps) {
  console.log({ownProps})
  return {
    // deleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)), 
    onClickDel: () => dispatch(actionCreators.deleteTodo(ownProps.toDo.id))
  }
}
export default connect(null, mapDispatchToProps)(ToDo);