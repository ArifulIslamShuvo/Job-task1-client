import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskRow = ({task}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const navigate = useNavigate();


    const navigateProduct = id => {
        navigate(`/task/${id}`);
    }

    const completedTask = (taskcomplet) => {
        // console.log(taskcomplet);
        const complet = { taskcomplet }
        console.log(complet);

        const url = `https://stormy-cliffs-82713.herokuapp.com/completed`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(complet)
        })
            .then(res => res.json())
            .then(result => console.log(result))

    };

    return (
            <tr>
                <td className="text-amber-50">
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            {
                                isChecked ? <input type="checkbox" checked="checked" className="checkbox checkbox-secondary" /> :

                                    <input type="checkbox"
                                        checked={isChecked}
                                        onChange={handleOnChange}
                                        onClick={() => completedTask(task.task)} className="checkbox checkbox-secondary" />
                            }
                        </label>
                    </div>
                </td>
                <td>{task.task}</td>
                <td><button  onClick={() =>navigateProduct (task._id)} className="btn btn-sm">Edit</button></td>
            </tr>

    );
};

export default TaskRow;