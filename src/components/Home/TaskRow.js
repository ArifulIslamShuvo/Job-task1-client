import React, { useState } from 'react';

const TaskRow = ({task}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const completedTask = (taskcomplet) => {
        // console.log(taskcomplet);
        const complet = { taskcomplet }
        console.log(complet);

        const url = `http://localhost:5000/completed`
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
                    <div class="form-control">
                        <label class="cursor-pointer label">
                            {
                                isChecked ? <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" /> :

                                    <input type="checkbox"
                                        checked={isChecked}
                                        onChange={handleOnChange}
                                        onClick={() => completedTask(task.task)} class="checkbox checkbox-secondary" />
                            }
                        </label>
                    </div>
                </td>
                <td>{task.task}</td>
                <td><button className="btn btn-sm">Edit</button></td>
            </tr>

    );
};

export default TaskRow;