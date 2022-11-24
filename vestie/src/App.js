import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Main} from './page/main/main'
import {ProceedSurvey} from "./page/proceedsurvey/proceedSurvey";
import {SurveySetTitle} from "./page/registerServey/registerServey_setTitle";
import {SurveySetTarget} from "./page/registerServey/registerServey_setTarget";
import {RegisterSurvey} from "./page/registerServey/registerSurvey";
import {CheckBeforeSubmit} from "./page/checkBeforeSubmit/checkBeforeSubmit";

import {CompleteProceedSurvey} from "./page/completeproceedsurvey/CompleteProceedSurveyComponent";
import {ClosedSurvey} from "./page/closedSurvey/closedSurvey";
import {SurveyResults} from "./page/closedSurvey/surveyResults";


import {SignUp} from "./page/signUp/signUp";
import {Login} from "./page/login/login";
import {SignUpInputPersonalInfo} from "./page/signUp/signUpInputPersonalInfo";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element ={<Main/>} />
            <Route path="/survey" element ={<ProceedSurvey/>} />
            <Route path="/register_setTitle" element ={<SurveySetTitle/>} />
            <Route path="/register_setTarget" element ={<SurveySetTarget/>} />
            <Route path="/register_questions" element ={<RegisterSurvey/>} />
            

            <Route path="/check_before_register" element ={<CheckBeforeSubmit/>} />
            <Route path="/check_before_submit" element ={<CheckBeforeSubmit/>} />
            <Route path="/complete_register" element ={<CompleteProceedSurvey/>} />
            <Route path="/complete_submit" element ={<CompleteProceedSurvey/>} />

            <Route path="/closedSurvey" element ={<ClosedSurvey/>} />
            <Route path="/surveyResults" element ={<SurveyResults/>} />

            <Route path="/signup" element ={<SignUp/>} />
            <Route path="/signup_input_personal_info_page" element ={<SignUpInputPersonalInfo/>} />
            <Route path="/login" element ={<Login/>} />
         </Routes>
      </BrowserRouter>
   );
  
}



const App = () => {
  return Router();
};

export default App;
