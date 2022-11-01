import "./underBar.css";
import homeIcon from "../icons/home.png";
import searchIcon from "../icons/search.png";
import registerIcon from "../icons/register.png";
import myPageIcon from "../icons/mypage.png";
import settingIcon from "../icons/setting.png";

export const UnderBar = () => {
    const address ="/";


    return (
        <div className="underBarDiv">
            <div className="btn btn_home" >
                <img src={homeIcon} className="icon"/>
            </div>

            <div className="btn btn_search">
                <img src={searchIcon} className="icon"/>
            </div>

            <div className="btn btn_register" >
                <img src={registerIcon} className="icon"/>
            </div>
                

            <div className="btn btn_myPage">
                <img src={myPageIcon} className="icon"/>
            </div>


            <div className="btn btn_setting" >
                <img src={settingIcon} className="icon"/>

            </div>

        </div>
    );
}

export default UnderBar;