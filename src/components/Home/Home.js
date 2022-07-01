import React, { useEffect, useState } from 'react';
import TaskRow from './TaskRow';

const Home = () => {
    const [tasks, setTasks] = useState([])


    useEffect(() => {

        fetch(`https://stormy-cliffs-82713.herokuapp.com/task`)
            .then(res => res.json())
            .then(data => setTasks(data))

    }, []);

    return (
        <div className="mx-10">
            <h2 className="text-2xl font-bold text-secondary p-3">DAILY TASK</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Daily Task</th>
                            <th>Edit Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => <TaskRow
                         key={task._id}
                         task={task}
                        ></TaskRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;