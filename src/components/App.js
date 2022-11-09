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
	};

	render() {
		return (
			<div className="container">
				<TodoHeader />
				<StatusTodo />
				<SearchTodo />
				<TodoList todoData={this.state.todos} />
				<AddTodo btnName="Add Todo" />
			</div>
		);
	}
}
