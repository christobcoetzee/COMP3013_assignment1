import React from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

let nextId = 0; // preventing the destruction of nextId when App rerenders.

function App() {
	const [assignments, setAssignments] = React.useState([]);

	const createAssignment = (newAssignment) => {
		setAssignments([
			...assignments,
			{ id: nextId++, text: newAssignment, status: 'unchecked' }
		]);
	};

	const deleteAssignment = (id) => {
		let data = assignments.filter((assignments) => assignments.id !== id);
		setAssignments(data);
	}

	const updateAssignment = (id) => {
		setAssignments(assignments.map((assignment) => {
			if (assignment.id == id) {
				let status = (assignment.status === 'checked') ? 'unchecked' : 'checked';
				assignment.status = status;
			}
			return assignment;
		}));
	};

	return (
		<>
			<Header createAssignment={createAssignment} />
			<Assignments assignments={assignments} updateAssignment={updateAssignment} deleteAssignment={deleteAssignment} />
		</>
	);
}

export default App;
