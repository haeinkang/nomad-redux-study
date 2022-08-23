import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actionCreators } from './store'

function ToDo({ toDo, onClickDel }) {
  
  // const onClickDelete = (id) => {
  //   deleteTodo(id)
  // }

  return (
    <li>
      <Link to={`/${toDo.id}`}>
        {`${toDo.id} - ${toDo.text}`}
        <button onClick={onClickDel}>DEL</button>
      </Link>
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
  return {
    onClickDel: () => dispatch(actionCreators.deleteTodo(ownProps.toDo.id))
  }
}
export default connect(null, mapDispatchToProps)(ToDo);