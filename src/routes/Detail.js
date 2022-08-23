import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  const { id } = useParams()
  const toDo = toDos.find(o => o.id === parseInt(id))

  return (
    <div>
      <h1>{toDo ? toDo.text : 'not found'}</h1>
      <h5>Created at: {toDo ? toDo.id : ''}</h5>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps)
  return { toDos: state }
}
export default connect(mapStateToProps)(Detail);