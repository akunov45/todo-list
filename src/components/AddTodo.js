import React from "react";
import "./AddTodo.css";
class AddTodo extends React.Component {
	state = {
		inputText: "",
	};

	setInputText = text => {
		this.setState({ inputText: text.target.value });
	};
	addTask = () => {
		this.props.onAddTodo(this.state.inputText);
		this.setState({ inputText: "" });
	};

	render() {
		return (
			<div className='d-flex add-form'>
				<input
					className='add-input'
					type='text'
					value={this.state.inputText}
					placeholder='Введите задачу'
					onChange={this.setInputText}
				/>
				<button className='btn btn-success' onClick={this.addTask}>
					add
				</button>
			</div>
		);
	}
}

export default AddTodo;
