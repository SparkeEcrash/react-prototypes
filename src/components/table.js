import React from 'react';

const Table = (props) => {

    const tableRows = props.data.map(function(student, index) {
        return (
            <tr key={index}>
                <td>{student.student}</td>
                <td>{student.course}</td>
                <td>{student.grade}</td>
            </tr>
        )
    });

    return (
        <table className="table">
            <thead className="thead-inverse">
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </table>
    )
};

export default Table;