import React from 'react'
import './StatusTodo.css'
const StatusTodo = () => {
  return (
    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" class="btn btn-outline-info">All</button>
    <button type="button" class="btn btn-outline-danger">Active</button>
    <button type="button" class="btn btn-outline-success">Done</button>
  </div>
  )
}

export default StatusTodo
