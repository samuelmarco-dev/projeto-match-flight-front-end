import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import LoginUser from './User/Login';
import UserRegistration from './User/Registration';
import LoginCompany from './Company/Login';
import CompanyInformation from './Company/Information';
import CompanyRegistration from './Company/Registration';
import '../assets/css/reset.css';

function App() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<LoginUser />} />
                    <Route path="/user/sign-up" element={<UserRegistration />} />
                    <Route path='/company' element={<LoginCompany />} />
                    <Route path='/company/information' element={<CompanyInformation />} />
                    <Route path='/company/sign-up' element={<CompanyRegistration />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
