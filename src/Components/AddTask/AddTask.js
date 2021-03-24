import { TaskContext } from "../TaskContext/TaskContext";
import { useParams, Redirect } from "react-router-dom";
import { useContext, useState } from 'react';

const AddTask = () => {

    const [tasks, setTasks] = useContext(TaskContext);
    const [id, setName] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();
        setTasks(prevTasks => [...prevTasks, { name: name, description: description, }])
        setIsAdded(true);
    }

    if (isAdded === false) {
        return (
            <div class="form">
                <form onSubmit={addItem}>
                    <div class="form-group">
                        <label for="nameinput">Name:</label>
                        <input placeholder="Enter name" class="form-control" id="nameinput" name="name" onChange={updateName} value={name} />
                    </div>
                    <div class="form-group">
                        <label for="descinput">Description:</label>
                        <input placeholder="Enter description" class="form-control" id="descinput" name="description" onChange={updateDescription} value={description} />
                    </div>
                    <button class="btn btn-success" type="submit">Add</button>
                </form>
            </div>
        );
    }
    else {
        return (
            <Redirect to="/" />
        )
    }
}

export default AddTask;