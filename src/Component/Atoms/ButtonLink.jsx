import React  from "react"
import {Button} from "react-bootstrap" 
import {Link} from "react-router-dom"

const ButtonLink=({link,text,color})=>(
 <>
  <Link to ={link}> 
                <Button variant={color}>  
                 {text}
                </Button>
                </Link> 
</> 

)

export default ButtonLink

/*  primary=azul
secundario:gris
success:verde
warning:amarillo
danger:rojo
info:azul claro
light:blanco
dark:negro
link:trasparente */