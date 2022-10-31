import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Main} from './page/main/main'
import {ProceedSurvey} from "./page/proceedsurvey/proceedSurvey";
import {ServeySetTitle} from "./page/registerServey/registerServey_setTitle";
import {ServeySetTarget} from "./page/registerServey/registerServey_setTarget";
import {RegisterServey} from "./page/registerServey/registerServey";
import {CheckBeforeSubmit} from "./page/checkBeforeSubmit/checkBeforeSubmit";

import {CompleteProceedSurvey} from "./page/completeproceedsurvey/CompleteProceedSurveyComponent";
import { UnderLineInput } from './component/input/underline/underLineInput';
import { UnderButton } from './component/under_button/under_button';
import {SignUp_setID} from "./page/signUp/signUp_1";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element ={<Main/>} />
            <Route path="/servey" element ={<ProceedSurvey/>} />
            <Route path="/register_setTitle" element ={<ServeySetTitle/>} />
            <Route path="/register_setTarget" element ={<ServeySetTarget/>} />
            <Route path="/register_questions" element ={<RegisterServey/>} />
            <Route path="/check_before_register" element ={<CheckBeforeSubmit/>} />
            <Route path="/complete_register" element ={<CompleteProceedSurvey/>} />
         </Routes>
      </BrowserRouter>
   );
  
}



const App = () => {
  return Router();
};

export default App;
