import React, { useRef, useState } from 'react';
import SurveyList from "../../component/surveyitem/surveyList";
import Header from "../../component/header/header";


export const Main = () => {
  

  const surveys=[
    { id: 1, title: "제목 1", deadline:"20220000", Q_num:"110",point: "15" },
    { id: 1, title: "제목 1", deadline:"20220000", Q_num:"110",point: "15" },
    { id: 1, title: "제목 1", deadline:"20220000", Q_num:"110",point: "15" },
    { id: 1, title: "제목 1", deadline:"20220000", Q_num:"110",point: "15" },
    { id: 1, title: "제목 1", deadline:"20220000", Q_num:"110",point: "15" },
    { id: 1, title: "제목 1", deadline:"20220000", Q_num:"110",point: "15" },
    { id: 1, title: "제목 1", deadline:"20220000", Q_num:"110",point: "15" },
    
  ];


  return (
    <div>
      <Header></Header>
      <SurveyList surveys={surveys}></SurveyList>
    </div>
  );
}

export default Main;
