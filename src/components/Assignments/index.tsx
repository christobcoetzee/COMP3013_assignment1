import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({ assignments, updateAssignment, deleteAssignment }) {
	let completed = assignments.filter(({ status }) => status === 'checked').length;

	return (
		<section className={styles.assignments}>
			<header className={styles.header}>
				<div>
					<p>Created Assignments</p>
					<span>{assignments.length}</span>
				</div>

				<div>
					<p className={styles.textPurple}>Completed Assignments</p>
					<span>{completed} of {assignments.length}</span>
				</div>
			</header>

			<ul className={styles.list}>
				{
					assignments.map((a, key) => {
						return <Assignment id={a.id} text={a.text} status={a.status} key={key}
							updateAssignment={updateAssignment} deleteAssignment={deleteAssignment} />
					})
				}
			</ul>
		</section>
	);
}
