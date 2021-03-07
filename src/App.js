
/* import './App.css'; */
import React from "react"
import {
HashRouter as Router,
 Switch,
 Route

} from 'react-router-dom'

import Navegar from "./Component/Organisms/Navegar"
import Articulos from './Component/Pages/Articulos' 
import Probabilidad from './Component/Pages/Probabilidad'
import Contactanos from './Component/Pages/Contactanos'
import Home from './Component/Pages/Home'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App= ()=>(

  <>
  
  <Router>
    <Navegar /> 

    <Switch>
       <Route path="/ebook/probabilidad" component={Probabilidad}></Route>
       <Route path="/articulos" component={Articulos}></Route>
       <Route path="/contactanos" component={Contactanos}></Route>
       <Route path="/home" component={Home}></Route>

       <Route path="/" component={Articulos}></Route>

        
           

   
        
      

    </Switch>


  </Router>

    

  
   
  </>


) 


     
    
    
   


export default App;
