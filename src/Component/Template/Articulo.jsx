import React from 'react'
import '../../Style/bootstrap.css'

const  Articulo =({titulo,resumen,palabrasClave})=>(
       <>
           <div className="jumbotron">
            <h1 className="display-3"> {titulo} </h1>
            <p className="lead"> {resumen} </p>
            <hr className="my-4" />
            <p> {palabrasClave} </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
            </div>



       </>

)



export default Articulo





