import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({ assignments, updateAssignment, deleteAssignment }) {
	let completed = assignments.filter(({ status }) => status === 'checked').length;

	return (
		<main className={styles.assignments}>
			<header className={styles.header}>
				<p>
					<span>{assignments.length}</span>
					<span>Created Assignments</span>
				</p>
				<p>
					<span>{completed} of {assignments.length}</span>
					<span className={styles.textPurple}>Completed Assignments</span>
				</p>
			</header>

			<ul className={styles.list}>
				{
					assignments.map((a, key) => {
						return <Assignment id={a.id} text={a.text} status={a.status} key={id}
							updateAssignment={updateAssignment} deleteAssignment={deleteAssignment} />
					})
				}
			</ul>
		</main>
	);
}
