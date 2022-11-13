import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";
import StatusTodo from "./StatusTodo";
import "./App.css";

export default class App extends Component {
    state = {
    todos: [
    { name: "Learn HTML CSS", important: false, done: false, id: 1 },
    { name: "Learn JS", important: false, done: false, id: 2 },
    { name: "Learn JS 2", important: false, done: false, id: 3 },
    ],
    comment: "",
};
    addTodo = (name) => {
    const newTodo = {
    name,
    inportant: false,
    done: false,
    id: 4,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
};
    deleteTodo = (id) => {
    console.log(id);
    this.setState(({ todos }) => {
    const ind = todos.findIndex((el) => el.id === id);
      //[1,2,3,4,5]
      //[1,2,3,4,5]
      // const before = [...todos.slice(0, ind)];
      // const after = [...todos.slice(ind+1)];
      // console.log(before);
      // console.log(after);
      // const newState = [...before,...after];
    return {
        todos: [...todos.slice(0, ind), ...todos.slice(ind + 1)],
    };
    });
};
    colorTodo = (id) => {
    this.setState(({ todos }) => {
    const ind = todos.findIndex((el) => el.id === id);
    const oldTodo = todos[ind];
    const upTodo = {
        ...oldTodo,
        important: !oldTodo.important,
    };
    return {
        todos: [...todos.slice(0, ind), upTodo, ...todos.slice(ind + 1)],
    };
    });
};
    doneTodo = (id) => {
    this.setState(({ todos }) => {
    const ind = todos.findIndex((el) => el.id === id);
    const oldTodo = todos[ind];
    console.log(oldTodo, "obj");
    const before = todos.slice(0, ind);
    const after = todos.slice(ind + 1);
    const upDateTodo = {
        ...oldTodo,
        done: !oldTodo.done,
    };
    return {
        todos: [...before, upDateTodo, ...after],
    };
    });
};
render() {
    const { onAddTodo } = this.props;
    return (
    <div className="container">
        <TodoHeader />
        <StatusTodo />
        <SearchTodo />
        <TodoList
        onColor={this.colorTodo}
        onDone={this.doneTodo}
        todoData={this.state.todos}
        onDelete={this.deleteTodo}
        />
        <AddTodo onAddTodo={this.addTodo} />
    </div>
    );
}
}
