import React from "react";
import styles from "./header.module.css";
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

export function Header({ createAssignment }) {
	const [text, setText] = React.useState('');
	let disabled = (text.trim()) ? false : true;

	const inputChangeHandler = (e) => {
		setText(e.target.value);
	};

	const submitHandler = (e) => {
		createAssignment(text, null);
		setText('');
		e.preventDefault();
	};

	return (
		<header className={styles.header}>
			<h1>{uppercase("bcit")} Assignment Tracker</h1>
			<form onSubmit={submitHandler} className={styles.newAssignmentForm}>
				<input onChange={inputChangeHandler} value={text} placeholder="Add a new assignment" type="text" />
				<button disabled={disabled}>
					Create <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
