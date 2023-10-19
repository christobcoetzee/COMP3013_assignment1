import styles from "./assignment.module.css";
import { TbCheck, TbTrash } from "react-icons/tb";

export function Assignment({ id, text, status, updateAssignment, deleteAssignment }) {
	const styledStatus = (status === 'checked') ? styles.textCompleted : '';

	const deleteItem = (e) => {
		deleteAssignment(id);
		e.preventDefault();
	}

	const updateStatus = (e) => {
		updateAssignment(id);
		e.preventDefault();
	}

	return (
		<li className={styles.assignment} data-id={id}>
			<button onClick={updateStatus} className={styles.checkContainer} aria-checked={status === 'checked'} aria-labelledby={id}>
				{
					status === 'checked' && <TbCheck size={20} color="white" />
				}
			</button>

			<p className={styledStatus} id={id}>{text}</p>

			<button onClick={deleteItem} className={styles.deleteButton} aria-label="Delete">
				<TbTrash size={20} />
			</button>
		</li>
	);
}
