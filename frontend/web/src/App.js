import React from 'react';
import {
	  BrowserRouter as Router,
	  Route,
	  Redirect,
	  Switch
} from 'react-router-dom';

//Estilos

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/css/Estilos.css';

//Paginas

import Home from './Pages/Home';

//Info

import About from './Pages/Info/About';	
import Tos from './Pages/Info/Tos';

//Panel 

import Login from './Pages/Panel/Login';
import Signup from './Pages//Panel/Signup';

//Components

import Navbar from './Components/Navbar/Navbar';

const App = () => {
	  return (
		     <Router>
		      <Navbar/>
		      <main>
		        <Switch>
		          <Route path="/" exact>
		            <Home/>
		          </Route>
		         
		         <Route path="/about" exact>
		           <About/>
		         </Route>

		         <Route path="/tos" exact>
		           <Tos/>
		         </Route>

		         <Route path="/login" exact>
		          <Login/>
		         </Route>

		         <Route path="/signup" exact>
		          <Signup/>
		         </Route>
		          <Redirect to="/" />

		        </Switch>
		      </main>
		     </Router>
		    );
}

export default App;

