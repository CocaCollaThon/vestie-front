import ClosedSurveyItemList from "../../component/closedSurveyItem/closedSurveyList";
import Header from "../../component/header/header";
import UnderBar from "../../component/under_bar/underBar";
import {useState, useEffect} from "react"
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';




import "./closedSurvey.css";
export const ClosedSurvey = () => {
    
    const location = useLocation();
    const [surveyDataList, setSurveyDataList] = useState([]);

    const surveys = [];

    useEffect(()=>{
        axios.get("http://13.209.169.33:8080/api/v1/survey/close", 
        {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          })
            .then(v => {
            setSurveyDataList(v.data);
            
        });                      
    })


    return (
        <div>
            <Header></Header>
            <div className='surveyList'>
                <ClosedSurveyItemList surveys={surveyDataList}></ClosedSurveyItemList>
            </div>
            <UnderBar></UnderBar>
        </div>
    );
}

export default ClosedSurvey;
