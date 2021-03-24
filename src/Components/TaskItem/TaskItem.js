import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import { Link } from "react-router-dom";

const TaskItem = ({ name, description, id }) => {
    const [tasks, setTasks] = useContext(TaskContext);
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{description}</td>
            <td><button className="btn btn-outline-danger" onClick={() => { setTasks(tasks.filter(task => (task.id != id))) }}>Delete</button>
                <Link className="btn btn-outline-primary" to={{ pathname: `/updateTask/${id}` }}>Update</Link></td>
        </tr>
    );
}

export default TaskItem;

