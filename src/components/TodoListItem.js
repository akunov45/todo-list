import './TodoListItem.css'
const TodoListItem = props => {
	// props = {
	// task:"LEARN HTML CSS",
	// day: 30
	// }
	console.log(props);
	const {done}=props

	let clazz ="todo-name"

	if(done){
		clazz +="done"
	}
	return (
		<span className="d-flex">
            <span className={clazz} onClick={()=>props.onDone(props.idTodo)}>
			{props.task}
            </span>
            <button className="btn btn-outline-danger" onClick={()=> props.onDelete(props.idTodo)}>
            <i 
class="bi bi-trash3"></i>
            </button>
            <button className="btn btn-outline-warning" >
            <i class="bi bi-exclamation-square"></i>
            </button>

		</span>
	);
};

export default TodoListItem;

