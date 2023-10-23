import { useState } from "react";
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from "./header.module.css";


export function Header({ createAssignment, selected, setSelected }) {
	const [text, setText] = useState('');
	let disabled = (text.trim() && selected) ? false : true;

	const [isRdpActive, setIsRdpActive] = useState(false);

	const dateClickHandler = (e) => {
		setIsRdpActive(!isRdpActive);
		e.preventDefault();
	};

	const dateSelectHandler = (data) => {
		// RDP unselects a date if selected twice. Uncomment the following to remove this behaviour.
		// if (data === undefined) {
		// 	data = selected;
		// 	setIsRdpActive(!isRdpActive);
		// 	return;
		// }
		setSelected(data);
		setIsRdpActive(!isRdpActive);
	}

	const inputChangeHandler = (e) => {
		setText(e.target.value);
	};

	const submitHandler = (e) => {
		createAssignment(text, null);
		setSelected();
		setText('');
		e.preventDefault();
	};

	return (
		<header className={styles.header}>
			<h1>{uppercase("bcit")} Assignment Tracker</h1>
			<form onSubmit={submitHandler} className={styles.newAssignmentForm}>
				<input onChange={inputChangeHandler} value={text} placeholder="Add a new assignment" type="text" />
				<div className={`${isRdpActive ? 'header__rdp--active' : 'header__rdp'}`}>
					<div onClick={dateClickHandler} className="header__rdp-button">
						<AiOutlineCalendar size={20} />
						{ selected && <div>{format(selected, 'PP')}</div> }
					</div>
					<DayPicker mode="single" selected={selected} onSelect={dateSelectHandler} />
				</div>
				<button disabled={disabled}>
					Create <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
