import { useContext } from 'react';
import { TaskContext } from "../TaskContext/TaskContext"
import TaskItem from '../TaskItem/TaskItem';
import { Link } from "react-router-dom";

const TaskList = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    console.log(tasks);
    return (
        <div>
            <Link className="btn btn-outline-success mb-1 mt-1 " to={{ pathname: `/addTask` }}>Add</Link>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <TaskItem name={task.name} description={task.description} id={task.id} />
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TaskList;