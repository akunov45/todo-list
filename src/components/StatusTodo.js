import React from "react";
import "./StatusTodo.css";
const StatusTodo = ({ onSetStatus, status }) => {
	const btns = [
		{ status: "all", btnName: "All" },
		{ status: "active", btnName: "Active" },
		{ status: "done", btnName: "Done" },
	];

	return (
		<div className='btn-group'>
			{btns.map(btn => {
				let isActive = btn.status === status; // true
				let activeClass = isActive ? "btn-info" : "btn-outline-secondary";
				return (
					<button
						key={btn.status}
						onClick={() => onSetStatus(btn.status)}
						className={`btn ${activeClass}`}>
						{btn.btnName}
					</button>
				);
			})}
		</div>
	);
};

export default StatusTodo;
