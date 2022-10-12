import './App.css';
import {Main} from './page/main/main'
import {ProceedSurvey} from "./page/proceedsurvey/proceedSurvey";
import {CompleteProceedSurvey} from "./page/completeproceedsurvey/CompleteProceedSurveyComponent";
import { UnderLineInput } from './component/input/underline/underLineInput';
import { UnderButton } from './component/under_button/under_button';


const route = (window) => {
   switch (window.location.pathname) {
      case "/survey/proceed": return <ProceedSurvey />
      case "/complete": return <CompleteProceedSurvey />
      case "/input": return <UnderLineInput />
      case "/btn": return <UnderButton />


      default: return <Main />
   }
}

const App = () => {
  return route(window);
};

export default App;
