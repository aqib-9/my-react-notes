function NestedLoops({ college }) {
    return (
        <div>
            <h1>College Lists:</h1>
            <h2>Name: {college.name}</h2>
            <h3>Students:</h3>
            <ul>
                {college.students.map((student, idx) => (
                    <li key={idx}>
                        name {student.name} - Age: {student.age}, City: {student.city}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NestedLoops;