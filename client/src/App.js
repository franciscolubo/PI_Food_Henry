import './App.css';
import { BrowserRouter, Route, Routes as Switch} from 'react-router-dom' 
import LandingPage from './Components/LandingPage.jsx';
import Home from './Components/Home.jsx'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecipes } from "./actions/index";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path ='/' element={<LandingPage />} />
        <Route exact path ='/home' element={<Home />} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
