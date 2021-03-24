import { useContext } from 'react';
import { TaskContext } from "../TaskContext/TaskContext"
import { Link } from "react-router-dom";

const Error404 = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    console.log(tasks);
    return (
        <div className="error404">
            <div>
                <h2>Error 404</h2>
                <h4>page not found</h4>
                <p>
                The requested URL was not found on this server.
                </p>
            </div>
                <Link to={{ pathname: `/` }}>Back</Link>
        </div>
    )
}

export default Error404;