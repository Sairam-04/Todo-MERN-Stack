import React from 'react'
import DisplayTasks from './DisplayTasks';

const HomeTasksComponent = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-end'>
                <i class="bi bi-plus-lg"></i>
            </div>
            <DisplayTasks />
        </div>
    )
}

export default HomeTasksComponent;
