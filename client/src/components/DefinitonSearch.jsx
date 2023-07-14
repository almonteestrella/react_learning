import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DefinitonSearch = () => {
    const [word, setWord] = useState(''); //good practice is to define first states
    const navigate = useNavigate();

    useEffect(() => {}, []); //as useEffect depends on state values, it's a good practice to declare them after the states variables.
    // if you don't pass any dependency value to the effect => it will trigger for any state change
    //empty dependency array => execute ONCE.
    //state value => execute only when this value changes

    return (
        <form
            onSubmit={() => navigate(`/definition/${word}`)}
            className='flex space-between space-x-2 max-w-[300px] mb-6'
        >
            <input
                type='text'
                name=''
                id=''
                onChange={(e) => setWord(e.target.value)}
                placeholder='word search'
                className='px-2 py-1 rounded-lg shrink min-w-0 shadow-md'
            />

            <button
                type='submit'
                className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-lg transition-all tracking-wider'
            >
                search
            </button>
        </form>
    );
};

export default DefinitonSearch;
