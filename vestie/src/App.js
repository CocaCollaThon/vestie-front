import './App.css';
import { Main } from './page/main/main'

const route = (window) => {
   switch (window.location.pathname) {
      default: return <Main />;
   }
}

const App = () => {
   return route(window)
}


export default App;
