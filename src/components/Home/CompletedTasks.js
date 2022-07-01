import React, { useEffect, useState } from 'react';
import { FcOk } from "react-icons/fc";

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/completed`)
            .then(res => res.json())
            .then(data => setCompletedTasks(data))

    }, []);
    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-100 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">Completed Tasks</h2>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                 completedTasks.map(complete =>
                                    <tr>
                                       <th><FcOk /></th>
                                       <td>{complete.taskcomplet}</td>
                                   </tr>
                                 )
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;