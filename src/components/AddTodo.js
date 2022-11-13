import { Component } from "react";
import "./AddTodo.css";
// import Button from '@mui/material/Button';
class AddTodo extends Component {
  state = {
    inputText: "",
  };
  setInputText = (text) => {
    console.log(text.target.value);
	this.setState({ inputText: text.target.value })
  };
  addTask=()=>{
	this.props.onAddTodo(this.state.inputText)
	
  }
  render() {
    return (
    <div className="d-flex add-form">
        <input
	className="add-input"
	type="text" placeholder="Введите задачу"
		onChange={this.setInputText}/>
        <button className="btn btn-success" onClick={this.addTask}>add</button>
      </div>
    );
  }
}

export default AddTodo;
