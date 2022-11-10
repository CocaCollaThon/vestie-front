import SurveyList from "../../component/surveyitem/surveyList";
import Header from "../../component/header/header";
import UnderBar from "../../component/under_bar/underBar";
import {useState, useEffect} from "react"
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';




import "./main.css";
export const Main = () => {
    
    const location = useLocation();
    const [surveyDataList, setSurveyDataList] = useState([]);

    const surveys = [];

    useEffect(()=>{
        axios.get("http://13.209.169.33:8080/api/v1/survey", 
        {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          })
            .then(v => {console.log(v.data);
            setSurveyDataList(v.data);
            
        });                      
    })


    return (
        <div>
            <Header></Header>
            <div className='surveyList'>
                <SurveyList surveys={surveyDataList}></SurveyList>
            </div>
            <UnderBar></UnderBar>
        </div>
    );
}

export default Main;
