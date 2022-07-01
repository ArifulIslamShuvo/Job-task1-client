import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditTask = () => {
    const {id} = useParams();
    const [edit, setEditTask] = useState({});
    const [update, setUpdate] = useState('');
    const { _id, task } = edit;

    useEffect(() => {
        fetch(`https://stormy-cliffs-82713.herokuapp.com/task/${id}`)
            .then(res => res.json())
            .then(data => setEditTask(data));

    }, [id,edit]);

    const handleSubmit = event => {
        event.preventDefault();
        const task = event.target.task.value;
        console.log(task);
        const inputTask = {task};
        

        const url = `https://stormy-cliffs-82713.herokuapp.com/task/${id}`
        fetch(url,{
            method: 'PUT',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(inputTask)
        })
        .then(res => res.json())
        .then(result=> console.log(result))
        
    };
    return (
        <div className='flex h-screen justify-center items-center p-5'>
        <div className="card w-96 bg-white shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-secondary">Edit-Task:{task}</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <input type="text" name="task" onChange={event => setUpdate(event.target.value)}
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>

                    <input className='my-2 w-full max-w-xs btn btn-secondary border-0 text-white' type="submit" value="submit" />

                </form>
            </div>
        </div>
    </div>
    );
};

export default EditTask;