import { useState } from 'react';
import Employee from './components/List';

function App() {
    const showConditionally = true;
    const [role, setRole] = useState('student'); //way to change values on the UI.

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
                        <Employee
                            name='juan'
                            img='https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600'
                        />
                        <Employee
                            name='maria'
                            role='dentist'
                            img='https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600'
                        />
                        <Employee
                            name='daniela'
                            role={role}
                            img='https://images.pexels.com/photos/733835/pexels-photo-733835.jpeg?auto=compress&cs=tinysrgb&w=600'
                        />
                    </div>
                </div>
            ) : (
                <h1>I can not see the list</h1>
            )}
        </>
    );
}

export default App;
