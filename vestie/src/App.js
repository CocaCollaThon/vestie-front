import './App.css';
import {Main} from './page/main/main'
import {ProceedSurvey} from "./page/proceedsurvey/ProceedSurvey";

const route = (window) => {
   switch (window.location.pathname) {
      case "/survey/proceed": return <ProceedSurvey />
      default: return <Main />;
   }
}

const App = () => {
   return route(window)
}


export default App;
