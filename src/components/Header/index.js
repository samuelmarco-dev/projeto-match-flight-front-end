import { IoMdExit } from "react-icons/io";

import Profile from "../../assets/img/profile.png";

function HeaderScreen() {
    return (
        <header>
            <img src={Profile} alt="ImageProfile" />
            <p>MatchFlight</p>
            <IoMdExit />
    </header>
    );
}

export default HeaderScreen;
