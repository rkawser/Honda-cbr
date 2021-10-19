import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import PageNoteFound from './Components/NotFound/PageNoteFound';
import ServiceDetails from './Components/Servicedetails/ServiceDetails'
import Services from './Components/Services/Services';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Private/PrivateRoute';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route exact path='/'>
        <Home></Home>
        </Route>

        <Route  path='/home'>
        <Home></Home>
        </Route>

        <Route  path='/service'>
        <Services></Services>
        </Route>

        <Route  path='/login'>
        <Login></Login>
        </Route>

        <Route path='/about'>
        <About></About>
        </Route>

        <Route  path='/register'>
       <Register></Register>
        </Route>

        <PrivateRoute  path='/CardDetail/:cardId'>
        <ServiceDetails></ServiceDetails>
        </PrivateRoute>

        <Route path='*'>
        <PageNoteFound></PageNoteFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>  
      </AuthProvider>    
    </div>
  );
}

export default App;
