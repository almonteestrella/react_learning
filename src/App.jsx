import EmployeesPage from './pages/EmployeePage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './pages/SecondPage';
import DictionaryPage from './pages/DictionaryPage';

function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='/' element={<EmployeesPage />} />
                    <Route path='/secondpage' element={<SecondPage />} />
                    <Route path='/dictionary' element={<DictionaryPage />} />
                    <Route
                        path='/dictionary/:search'
                        element={<DictionaryPage />}
                    />
                </Routes>
            </Header>
        </BrowserRouter>
    );
}

export default App;
