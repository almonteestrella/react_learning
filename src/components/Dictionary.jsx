import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dictionary = () => {
    const [word, setWord] = useState(''); //good practice is to define first states
    const navigate = useNavigate();

    useEffect(() => {}, []); //as useEffect depends on state values, it's a good practice to declare them after the states variables.
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

                <button
                    onClick={() => {
                        navigate(`/definition/${word}`);
                    }}
                >
                    search
                </button>
            </div>
        </>
    );
};

export default Dictionary;
