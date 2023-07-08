import { useState } from 'react';
import Employee from './components/List';

function App() {
    const showConditionally = true;
    const [role, setRole] = useState('student'); //way to change values on the UI.
    const [employees, setEmployees] = useState([
        {
            name: 'juan',
            img: 'https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'developer',
        },
        {
            name: 'maria',
            img: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'dentist',
        },
        {
            name: 'daniela',
            img: 'https://images.pexels.com/photos/733835/pexels-photo-733835.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'student',
        },
        {
            name: 'estela',
            img: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'toddler',
        },
        {
            name: 'indhira',
            img: 'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: 'baga',
        },
        {
            name: 'anna',
            img: 'https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: '',
        },
        {
            name: 'albert',
            img: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=600',
            role: '',
        },
    ]);

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
                        {employees.map(({ name, role, img }, index) => {
                            return (
                                <Employee
                                    name={name}
                                    role={role}
                                    img={img}
                                    key={index}
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
