import React from "react";
import './SearchTodo.css'

const SearchTodo = () => {
    return <div class="input-group flex-nowrap">
    <input type="text" className="form-control" placeholder="Поиск" aria-label="search" aria-describedby="addon-wrapping"/>
    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-info">All</button>
  <button type="button" class="btn btn-outline-danger">Active</button>
  <button type="button" class="btn btn-outline-success">Done</button>
</div>
  </div>;
};

export default SearchTodo;
