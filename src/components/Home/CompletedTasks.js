import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/completed`)
            .then(res => res.json())
            .then(data => setCompletedTasks(data))

    }, []);
    return (
        <div>
            <h3>Completed Tasks:{completedTasks.length}</h3>
        </div>
    );
};

export default CompletedTasks;