import TodoListItem from "./TodoListItem";

const TodoList = props => {
	const { todoData, onDelete, onDone,  } = props;
	return (
		<ul className="list-group">
			{todoData.map(todo => {
				return <li className="list-group-item" key={todo.id}>
                <TodoListItem
				{...todo}
				onDone={onDone} 
				idTodo={todo.id} 
				task={todo.name} 
				onDelete={onDelete} />
                </li>;
			})}
		</ul>
	);
};

export default TodoList;


