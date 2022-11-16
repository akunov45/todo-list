import TodoListItem from "./TodoListItem";

const TodoList = props => {
	const { todoData, onDelete, onDone, onColor } = props;
	if (!todoData.length) {
		return <span className='span'>NO DATA</span>;
	}
	return (
		<ul className='list-group'>
			{todoData.map(todo => {
				return (
					<li className='list-group-item' key={todo.id}>
						<TodoListItem
							{...todo}
							onColor={onColor}
							onDone={onDone}
							task={todo.name}
							onDelete={onDelete}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
