import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-100 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">Calendar</h2>
                    <div className="p-30">
                        <DayPicker
                            selected={date}
                            onSelect={setDate}
                        />;

        </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;