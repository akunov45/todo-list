import TodoListItem from "./TodoListItem";

const TodoList = props => {
	const { todoData } = props;
	return (
		<ul className="list-group">
			{todoData.map(todo => {
				return <li className="list-group-item" key={todo.id}>
                <TodoListItem task={todo.name} day={30} />
                </li>;
			})}
		</ul>
	);
};

export default TodoList;
