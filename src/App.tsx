import React from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
	const [selected, setSelected] = React.useState<Date>();

	const [assignments, setAssignments] = React.useState([]);

	const createAssignment = (text) => {
		setAssignments([
			...assignments,
			{
				id: crypto.randomUUID(),
				text: text,
				deadline: selected,
				status: 'unchecked'
			}
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
			<Header createAssignment={createAssignment} selected={selected} setSelected={setSelected} />
			<Assignments assignments={assignments} updateAssignment={updateAssignment} deleteAssignment={deleteAssignment} />
		</>
	);
}

export default App;
