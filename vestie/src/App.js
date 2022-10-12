import './App.css';
import {Main} from './page/main/main'
import {ProceedSurvey} from "./page/proceedsurvey/proceedSurvey";
import {CompleteProceedSurvey} from "./page/completeproceedsurvey/CompleteProceedSurveyComponent";

const route = (window) => {
   switch (window.location.pathname) {
      case "/survey/proceed": return <ProceedSurvey />
      case "/complete": return <CompleteProceedSurvey />
      default: return <Main />
   }
}

const App = () => {
   return route(window)
}


export default App;
