import { createStore } from "redux";

const ADD = "ADD"
const DELETE = "DELETE"

const addToDo = (text) => {
  return {
    type: ADD, 
    text
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE, 
    id
  }
}

const reducer = (state = [{ text: "initial text", id: Date.now() }], action) => {
  switch(action.type) {
    case ADD: 
      return [
        { text: action.text, id: Date.now() }, 
        ...state
      ]
    case DELETE:
      return state.filter(o => o.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addToDo, 
  deleteTodo
}

export default store