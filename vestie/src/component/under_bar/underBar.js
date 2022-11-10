import "./underBar.css";
import homeIcon from "../icons/home.png";
import searchIcon from "../icons/search.png";
import registerIcon from "../icons/register.png";
import myPageIcon from "../icons/mypage.png";
import settingIcon from "../icons/setting.png";
import {useState, useEffect} from "react"



export const UnderBar = () => {
    const location = window.location.href;
    // console.log(location)
    const moveToHome = () => {
        window.location.href="/";

    }
    const moveToRegister = () => {
        window.location.href="/register_setTitle";

    }
    const moveToSignUp = () => {
        window.location.href="/signup";
    }
    const moveToClosedSurvey = () => {
        window.location.href="/closedSurvey";
    }

    const setStyle=(currentLocation)=>{
        if(currentLocation.indexOf("closed")>0){
            document.getElementById("btn_closed").style.backgroundColor="#93aee07c";

        }else{
            document.getElementById("btn_home").style.backgroundColor="#93aee07c";

        }
    }
    
    useEffect(()=>{
        setStyle(location);
    })

    return (
        <div className="underBarDiv">
            
            <div className="btn btn_setting" onClick={moveToSignUp}>
                <img src={settingIcon} className="icon"/>

            </div>

            

            <div className="btn btn_register" onClick={moveToRegister} >
                <img src={registerIcon} className="icon"/>
            </div>

            <div className="btn" id="btn_home" onClick={moveToHome} >
                <img src={homeIcon} className="icon"/>
            </div>

            <div className="btn" id="btn_closed" onClick={moveToClosedSurvey}>
                <img src={searchIcon} className="icon" />
            </div>
            
            <div className="btn btn_myPage">
                <img src={myPageIcon} className="icon"/>
            </div>


            

        </div>
    );
}

export default UnderBar;