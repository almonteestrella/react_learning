import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const DictionaryPage = () => {
    const [word, setWord] = useState([]);
    const { search } = useParams();

    //data fetching
    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((resp) => resp.json())
            .then((data) => setWord(data[0].meanings));
    }, []);
    return (
        <>
            <h1>here is the definition of:</h1>
            {word ? (
                word.map((meaning) => (
                    <p key={uuidv4()}>
                        {meaning.partOfSpeech}
                        {': '}
                        {meaning.definitions[0].definition}
                    </p>
                ))
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default DictionaryPage;
