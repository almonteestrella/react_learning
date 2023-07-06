import { useState } from 'react';
import Employee from './components/List';

function App() {
    const showConditionally = true;
    const [role, setRole] = useState('student');

    return (
        <>
            {showConditionally ? (
                <div>
                    <input
                        type='text'
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    />
                    <Employee name='juan' />
                    <Employee name='maria' role='dentist' />
                    <Employee name='daniela' role={role} />
                </div>
            ) : (
                <h1>I can not see the list</h1>
            )}
        </>
    );
}

export default App;
