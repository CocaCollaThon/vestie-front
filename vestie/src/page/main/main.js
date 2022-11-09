import SurveyList from "../../component/surveyitem/surveyList";
import Header from "../../component/header/header";
import UnderBar from "../../component/under_bar/underBar";
import {useState, useEffect} from "react"
import axios from 'axios';

                                            
import "./main.css";
export const Main = () => {

    const [surveyDataList, setSurveyDataList] = useState([]);
    // const surveys = [];

    // useEffect(()=>{
    //     axios.get("http://localhost:8080/api/v1/survey")
    //         .then(v => setSurveyDataList(v.data));
    //     surveyDataList.map((value)=>{
    //         var surveyData = new Object();
    //         surveyData.id = value.id;
    //         surveyData.title = value.title;
    //         surveyData.endDate = value.endDate;
    //         surveyData.questionNumber = value.questionNumber;
    //         surveyData.point = value.point;
    //         surveys.push(surveyData)
    //     });                      
    // })
    const surveys = [
        {id: 1, title: "제목 1", endDate: "20220000", questionNumber: "110", point: "15"},
        {id: 2, title: "제목 2", endDate: "20220000", questionNumber: "110", point: "15"},
        {id: 3, title: "제목 3", endDate: "20220000", questionNumber: "110", point: "15"},
        {id: 4, title: "제목 4", endDate: "20220000", questionNumber: "110", point: "15"},
        {id: 5, title: "제목 5", endDate: "20220000", questionNumber: "110", point: "15"},
        {id: 6, title: "제목 6", endDate: "20220000", questionNumber: "110", point: "15"},
        {id: 7, title: "제목 7", endDate: "20220000", questionNumber: "110", point: "15"},
    ];


    return (
        <div>
            <Header></Header>
            <div className='surveyList'>
                <SurveyList surveys={surveys}></SurveyList>
            </div>
            <UnderBar></UnderBar>
        </div>
    );
}

export default Main;
