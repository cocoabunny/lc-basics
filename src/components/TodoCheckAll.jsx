import React from 'react'

function TodoCheckAll(props) {
  return (
            <div 
            onClick={props.completeAllTodos}
            className="button">Check All</div>
  )
}

export default TodoCheckAll