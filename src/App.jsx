import List from './components/List';

function App() {
    const showConditionally = false;

    return <>{showConditionally ? <List /> : <h1>I can't see the list</h1>}</>;
}

export default App;
