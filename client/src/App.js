import './App.css';
import { BrowserRouter, Route, Routes as Switch} from 'react-router-dom' 
import LandingPage from './Components/LandingPage.jsx';
import Home from './Components/Home.jsx'
import RecipeDetail from './Components/RecipeDetail.jsx'
import CreateRecipe from './Components/CreateRecipe.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path ='/' element={<LandingPage />} />
        <Route exact path ='/home' element={<Home />} />
        <Route exact path ='/recipes/:idRecipe' element={<RecipeDetail />} />
        <Route exact path ='/recipes' element={<CreateRecipe />} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
