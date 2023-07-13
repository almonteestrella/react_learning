import { useEffect, useState } from 'react';

const Dictionary = () => {
    const [word, setWord] = useState(''); //good practice is to define first states
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('state updated', word + ' ' + word2);
    }, [word2]); //as useEffect depends on state values, it's a good practice to declare them after the states variables.
    // if you don't pass any dependency value to the effect => it will trigger for any state change
    //empty dependency array => execute ONCE.
    //state value => execute only when this value changes

    return (
        <>
            <div>
                <input
                    type='text'
                    name=''
                    id=''
                    onChange={(e) => setWord(e.target.value)}
                />
                <h1>Let's get the definition for ${word}</h1>
            </div>
            <div>
                <input
                    type='text'
                    name=''
                    id=''
                    onChange={(e) => setWord2(e.target.value)}
                />
                <h1>Let's get the definition for ${word2}</h1>
            </div>
        </>
    );
};

export default Dictionary;
