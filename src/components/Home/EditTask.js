import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditTask = () => {
    const {id} = useParams();
    const [Edit, setEditTask] = useState({});
    const { _id, task } = Edit;
    console.log(Edit);

    useEffect(() => {
        fetch(`http://localhost:5000/task/${id}`)
            .then(res => res.json())
            .then(data => setEditTask(data));

    }, []);
    return (
        <div>
            <h2>hello {id}</h2>
        </div>
    );
};

export default EditTask;