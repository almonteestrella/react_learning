import { useEffect, useState } from 'react';

const Dictionary = () => {
    const [word, setWord] = useState(''); //good practice is to define first states

    useEffect(() => {
        console.log('state updated', word);
    }); //as useEffect depends on state values, it's a good practice to declare them after the states variables.

    return (
        <>
            <input
                type='text'
                name=''
                id=''
                onChange={(e) => setWord(e.target.value)}
            />
            <h1>Let's get the definition for ${word}</h1>
        </>
    );
};

export default Dictionary;
