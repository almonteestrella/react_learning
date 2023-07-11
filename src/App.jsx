import EmployeesPage from './pages/EmployeePage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './pages/SecondPage';

function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='/' element={<EmployeesPage />} />
                    <Route path='/secondpage' element={<SecondPage />} />
                </Routes>
            </Header>
        </BrowserRouter>
    );
}

export default App;
