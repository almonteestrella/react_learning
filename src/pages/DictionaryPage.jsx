import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';

const DictionaryPage = () => {
    const [word, setWord] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);

    const { search } = useParams();
    const navigate = useNavigate();

    //data fetching
    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((resp) => {
                if (resp.status === 404) {
                    setNotFound(true);
                } else if (resp.status === 401) {
                    navigate('/login');
                } else if (resp.status === 500) {
                    setError(true);
                }

                if (!resp.ok) {
                    setError(true);
                    throw new Error('Something went wrong');
                }

                return resp.json();
            })
            .then((data) => setWord(data[0].meanings))
            .catch((err) => console.log(err.message));
    }, []);

    if (notFound) {
        return (
            <>
                <NotFound />
                <Link to={'/dictionary'}>back</Link>
            </>
        );
    }
    if (error) {
        return (
            <>
                <h3>something went wrong. try again</h3>
                <Link to={'/dictionary'}>back</Link>
            </>
        );
    }
    return (
        <>
            {word ? (
                <div>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech}
                                {': '}
                                {meaning.definitions[0].definition}{' '}
                            </p>
                        );
                    })}
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default DictionaryPage;
