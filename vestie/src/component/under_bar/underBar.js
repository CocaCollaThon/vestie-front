import "./underBar.css";
import homeIcon from "../icons/home.png";
import searchIcon from "../icons/search.png";
import registerIcon from "../icons/register.png";
import myPageIcon from "../icons/mypage.png";
import settingIcon from "../icons/setting.png";



export const UnderBar = () => {
    const moveToHome = () => {
        window.location.href="/";

    }
    const moveToRegister = () => {
        window.location.href="/register_setTitle";

    }
    const moveToSignUp = () => {
        window.location.href="/signup";
    }
    

    return (
        <div className="underBarDiv">
            <div className="btn btn_home" onClick={moveToHome} >
                <img src={homeIcon} className="icon"/>
            </div>

            <div className="btn btn_search">
                <img src={searchIcon} className="icon" oncl/>
            </div>

            <div className="btn btn_register" onClick={moveToRegister} >
                <img src={registerIcon} className="icon"/>
            </div>
            

            <div className="btn btn_myPage">
                <img src={myPageIcon} className="icon"/>
            </div>


            <div className="btn btn_setting" onClick={moveToSignUp}>
                <img src={settingIcon} className="icon"/>

            </div>

        </div>
    );
}

export default UnderBar;