import { useContext, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { TaskContext } from "../TaskContext/TaskContext";


const UpdateTask = () => {

    const { id } = useParams();
    const [tasks, setTasks] = useContext(TaskContext);
    const getName=tasks.find(task=>task.id==id).name;
    const getDescription=tasks.find(task=>task.id==id).description;
    const [name, setName] = useState(getName);
    const [description, setDescription] = useState(getDescription);
    const [isUpdated, setIsUpdated] = useState(false);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updateTask = (e) => {
        e.preventDefault();
        const new_tasks = tasks.map(task => (
            task.id != id ? task : { name: name, description: description, id:id }
        ))
        setTasks(new_tasks)
        setIsUpdated(true)
    }


    if (isUpdated === false) {
        return (
            <div>
                <form onSubmit={updateTask}>
                    <label>Name:</label>
                    <input name="name" onChange={updateName} value={name} />
                    <label>Description:</label>
                    <input name="description" onChange={updateDescription} value={description} />
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
    else{
        return (
            <Redirect to="/"/>
        )
    }

}

export default UpdateTask;