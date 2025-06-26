import { useState } from "react";

function Loops() {
    const name=['Aqib', 'Sam', 'Berry', 'Ali', 'Ahmed'];
    const namedetails=[
        {
            name: 'Aqib',
            age: 20,
            city: 'Delhi',
            id: 1
        },
        {
            name: 'Sam',
            age: 22,
            city: 'Gurgaon',
            id: 2
        },
        {
            name: 'Berry',
            age: 21,
            city: 'mumbai',
            id: 3
        },
        {
            name: 'Ali',
            age: 23,
            city: 'noida',
            id: 4
        },
        {
            name: 'Ahmed',
            age: 24,
            city: 'pune',
            id: 5
        }
    ]

    return (
        <div>
            <h1>Table Data using Loops in jsx that use array mapping.</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {namedetails.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
                </table>

        </div>
    )
}

export default Loops;