import "./App.css";
import CompleteProceedSurvey from "./page/completeproceedsurvey/CompleteProceedSurveyComponent";
import ProceedSurvey from "./page/proceedsurvey/proceedSurvey";
import Main from "./page/main/main";

const route = (window) => {
  switch (window.location.pathname) {
    case "/survey/proceed":
      return <ProceedSurvey />;
    case "/complete":
      return <CompleteProceedSurvey />;
    default:
      return <Main />;
  }
};

const App = () => {
  return route(window);
};

export default App;
