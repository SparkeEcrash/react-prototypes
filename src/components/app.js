import React from 'react';
import Table from './table';

const App = () => {
    const students = [
        {
            student: 'James',
            course: 'Math',
            grade: '77'
        },
        {
            student: 'Norbert',
            course: 'Economics',
            grade: '99'
        },
        {
            student: 'Josh',
            course: 'History',
            grade: '84'
        }
    ];

    return(
        <div>
            <h1>Student Grade Table</h1>
            <Table data={students} />
        </div>
    )
}

export default App;