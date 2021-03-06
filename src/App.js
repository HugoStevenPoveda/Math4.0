
/* import './App.css'; */
import React from "react"
import {
 BrowserRouter as Router,
 Switch,
 Route

} from 'react-router-dom'

import Navegar from "./Component/Organisms/Navegar"
import Articulos from './Component/Pages/Articulos' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App= ()=>(

  <>
  
  <Router>
    <Navegar /> 

    <Switch>
        <Route path="/probabilidad">
           <Probabilidad />

        </Route>
        <Route path="/articulos" component={Articulos} >
        </Route>
          

    </Switch>


  </Router>

    

  
   
  </>


) 

function Probabilidad() {
  return <h2> hola mundo </h2>
}
  
     
    
    
   


export default App;
