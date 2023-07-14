import EmployeesPage from './pages/EmployeePage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DictionaryPage from './pages/DictionaryPage';
import Dictionary from './components/Dictionary';
import NotFound from './components/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='/' element={<EmployeesPage />} />
                    <Route path='/dictionary' element={<Dictionary />} />
                    <Route path='/404' element={<NotFound />} />
                    <Route path='*' element={<NotFound />} />

                    <Route
                        path='/definition/:search'
                        element={<DictionaryPage />}
                    />
                </Routes>
            </Header>
        </BrowserRouter>
    );
}

export default App;
