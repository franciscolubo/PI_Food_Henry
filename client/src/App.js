import './App.css';
import { BrowserRouter, Route, Routes as Switch} from 'react-router-dom' 
import LandingPage from './Components/LandingPage.jsx';
import Home from './Components/Home.jsx'
import RecipeDetail from './Components/RecipeDetail.jsx'
import CreateRecipe from './Components/CreateRecipe.jsx'
import EditRecipe from './Components/EditRecipe.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='max-width'>
      <Switch>
        <Route exact path ='/' element={<LandingPage />} />
        <Route exact path ='/home' element={<Home />} />
        <Route exact path ='/recipes/:idRecipe' element={<RecipeDetail />} />
        <Route exact path ='/recipes' element={<CreateRecipe />} />
        <Route exact path ='/recipes/editRecipe/:id' element={<EditRecipe />} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
