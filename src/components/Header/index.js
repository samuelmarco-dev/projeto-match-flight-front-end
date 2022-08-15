import { IoMdExit } from "react-icons/io";
import { IoAirplaneSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function HeaderScreen() {
    const navigate = useNavigate();

    return (
        <header>
            <IoAirplaneSharp />
            <p>MatchFlight</p>
            <IoMdExit onClick={()=> {
                localStorage.clear();
                navigate('/');
            }}/>
    </header>
    );
}

export default HeaderScreen;
