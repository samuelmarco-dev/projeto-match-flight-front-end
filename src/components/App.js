import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import LoginUser from './User/Login';
import LoginCompany from './Company/Login';
import '../assets/css/reset.css';

function App() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<LoginUser />} />
                    <Route path='/company' element={<LoginCompany />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
