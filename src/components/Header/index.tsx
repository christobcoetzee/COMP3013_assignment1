import React from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

export function Header({ createAssignment }) {
	const [text, setText] = React.useState('');
	let disabled = (text.trim()) ? false : true;

	const changeHandler = (e) => {
		setText(e.target.value);
	};

	const clickHandler = (e) => {
		createAssignment(text);
		setText('');
		e.preventDefault();
	};

	return (
		<header className={styles.header}>
			{/* This is simply to show you how to use helper functions */}
			<h1>{uppercase("bcit")} Assignment Tracker</h1>
			<form className={styles.newAssignmentForm}>
				<input onChange={changeHandler} value={text} placeholder="Add a new assignment" type="text" />
				<button onClick={clickHandler} disabled={disabled}>
					Create <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
