import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContextSignupCompany from '../api/context/signupCompany';
import ContextTokenUser from '../api/context/tokenUser';
import ContextTokenCompany from '../api/context/tokenCompany';

import Home from './Home';
import LoginUser from './User/Login';
import UserRegistration from './User/Registration';
import TimelineUser from './User/Timeline';
import LoginCompany from './Company/Login';
import CompanyInformation from './Company/Information';
import CompanyRegistration from './Company/Registration';
import TimelineCompany from './Company/Timeline';
import ProposalInformation from './ProposalScreen/Information';
import ProposalCreate from './ProposalScreen/Registration';
import '../assets/css/reset.css';

function App() {
    const [dataCompany, setDataCompany] = useState({
        name: '', city: '', state: '', type: '', cnpj: '', url: '', email: '', password: '', confirmPassword: ''
    });
    const [tokenUser, setTokenUser] = useState(null);
    const [tokenCompany, setTokenCompany] = useState(null);

    return (
        <ContextSignupCompany.Provider value={{ dataCompany, setDataCompany }}>
            <ContextTokenUser.Provider value={{ tokenUser, setTokenUser }}>
            <ContextTokenCompany.Provider value={{ tokenCompany, setTokenCompany }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/user" element={<LoginUser />} />
                        <Route path="/user/sign-up" element={<UserRegistration />} />
                        <Route path='/user/timeline' element={<TimelineUser />} />
                        <Route path='/company' element={<LoginCompany />} />
                        <Route path='/company/information' element={<CompanyInformation />} />
                        <Route path='/company/sign-up' element={<CompanyRegistration />} />
                        <Route path='/company/timeline' element={<TimelineCompany />} />
                        <Route path='/proposal/information' element={<ProposalInformation />} />
                        <Route path='/proposal/sign-up' element={<ProposalCreate />} />
                    </Routes>
                </BrowserRouter>
            </ContextTokenCompany.Provider>
            </ContextTokenUser.Provider>
        </ContextSignupCompany.Provider>
    );
}

export default App;
