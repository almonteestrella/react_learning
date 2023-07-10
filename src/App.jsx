import { useState } from 'react';
import Employee from './components/List';

function App() {
    const showConditionally = true;
    const [role, setRole] = useState('student'); //way to change values on the UI.
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'juan',
            img: 'https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'developer',
        },
        {
            id: 2,
            name: 'maria',
            img: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'dentist',
        },
        {
            id: 3,
            name: 'daniela',
            img: 'https://images.pexels.com/photos/733835/pexels-photo-733835.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'student',
        },
        {
            id: 4,
            name: 'estela',
            img: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'toddler',
        },
        {
            id: 5,
            name: 'indhira',
            img: 'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'baga',
        },
        {
            id: 6,
            name: 'anna',
            img: 'https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: '',
        },
        {
            id: 7,
            name: 'albert',
            img: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: '',
        },
    ]);

    const updatedEmployee = (id, newName, newRole) => {
        const updatedList = employees.map((employee) => {
            if (id === employee.id) {
                return { ...employee, name: newName, role: newRole };
            } else {
                return employee;
            }
        });
        setEmployees(updatedList);
    };

    return (
        <>
            {showConditionally ? (
                <div className=''>
                    <input
                        type='text'
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    />
                    <div className='flex flex-wrap justify-center'>
                        {employees.map(({ name, role, img, id }) => {
                            return (
                                <Employee
                                    name={name}
                                    role={role}
                                    img={img}
                                    key={id}
                                    id={id}
                                    updatedEmployee={updatedEmployee}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <h1>I can not see the list</h1>
            )}
        </>
    );
}

export default App;
