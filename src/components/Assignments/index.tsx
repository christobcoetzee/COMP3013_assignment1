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
					assignments.map((a) => {
						return <Assignment id={a.id} text={a.text} deadline={a.deadline} status={a.status} key={a.id}
							updateAssignment={updateAssignment} deleteAssignment={deleteAssignment} />
					})
				}
			</ul>
		</main>
	);
}
